package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pms.entity.Admin;
import com.pms.entity.AuthenticationResponse;
import com.pms.entity.Company;
import com.pms.entity.HOD;
import com.pms.entity.Job;
import com.pms.entity.PlacementOfficer;
import com.pms.entity.Student;
import com.pms.entity.Token;
import com.pms.entity.User;
import com.pms.exception.PmsServiceException;
import com.pms.exception.UserAlreadyRegisteredException;
import com.pms.repository.AdminRepository;
import com.pms.repository.CompanyRepository;
import com.pms.repository.HODRepository;
import com.pms.repository.JobRepository;
import com.pms.repository.PlacementOfficerRepository;
import com.pms.repository.StudentRepository;
import com.pms.repository.TokenRepository;
import com.pms.repository.UserRepository;

@Service
public class AuthenticationService {
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	private final TokenRepository tokenRepository;

	private final AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private HODRepository hodRepository;
	
	@Autowired
	private PlacementOfficerRepository placementOfficerrepo;

	public AuthenticationService(UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService,
			TokenRepository tokenRepository, AuthenticationManager authenticationManager) {
		super();
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.tokenRepository = tokenRepository;
		this.authenticationManager = authenticationManager;
	}

	public AuthenticationResponse register(User request) {
		Optional<User> userCheck = userRepository.findByEmail(request.getEmail());
		if (userCheck.isEmpty()) {
			User user = new User();
			user.setRole(request.getRole());
			user.setEmail(request.getEmail());
			user.setPassword(passwordEncoder.encode(request.getPassword()));

			User savedUser = repository.save(user);
			createRoleSpecificEntity(user.getRole(), savedUser.getId());

			String jwt = jwtService.generateToken(user);

			saveUserToken(jwt, savedUser);

			return new AuthenticationResponse(jwt, "User registration was successful",savedUser.getRole(),savedUser.getId());
		} else {
			throw new UserAlreadyRegisteredException("User already registered!");
		}

	}

	private void createRoleSpecificEntity(String role, int userId) {
		switch (role) {
		case "STUDENT":
			Student student = new Student();
			student.setUser(userRepository.getById(userId));
			studentRepository.save(student);
			break;
		case "ADMIN":
			Admin admin = new Admin();
			admin.setUser(userRepository.getById(userId));
			adminRepository.save(admin);
			break;
		case "COMPANY":
			Company company = new Company();

			company.setUser(userRepository.getById(userId));
			Company savedCompany = companyRepository.save(company);
			Job job = new Job();

			job.setCompany(savedCompany);
			jobRepository.save(job);

			break;
			
		case "HOD":
			HOD hod = new HOD();
			hod.setUser(userRepository.getById(userId));
			hodRepository.save(hod);
			break;
			
		case "PLACEMENT OFFICER":
			PlacementOfficer placementOfficer = new PlacementOfficer();
			placementOfficer.setUser(userRepository.getById(userId));
			placementOfficerrepo.save(placementOfficer);
			break;
		// Handle other roles if needed
		default:
			break;
		}
	}

	public AuthenticationResponse authenticate(User request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

		User user = repository.findByEmail(request.getEmail()).orElseThrow();
		String jwt = jwtService.generateToken(user);

		revokeAllTokenByUser(user);
		saveUserToken(jwt, user);

		return new AuthenticationResponse(jwt, "successful",user.getRole(),user.getId());

	}

	private void revokeAllTokenByUser(User user) {
		List<Token> validTokens = tokenRepository.findAllTokensByUser(user.getId());
		if (validTokens.isEmpty()) {
			return;
		}

		validTokens.forEach(t -> {
			t.setLoggedOut(true);
		});

		tokenRepository.saveAll(validTokens);
	}

	private void saveUserToken(String jwt, User user) {
		Token token = new Token();
		token.setToken(jwt);
		token.setLoggedOut(false);
		token.setUser(user);
		tokenRepository.save(token);
	}
}
