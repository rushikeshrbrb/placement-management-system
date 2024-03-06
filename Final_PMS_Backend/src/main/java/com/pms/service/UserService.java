package com.pms.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.pms.dto.UserProjection;
import com.pms.entity.Admin;
import com.pms.entity.Company;
import com.pms.entity.HOD;
import com.pms.entity.Job;
import com.pms.entity.Student;
import com.pms.entity.User;
import com.pms.exception.PmsServiceException;
import com.pms.repository.AdminRepository;
import com.pms.repository.CompanyRepository;
import com.pms.repository.HODRepository;
import com.pms.repository.JobRepository;
import com.pms.repository.StudentRepository;
import com.pms.repository.UserRepository;

@Service
public class UserService {
	
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
	    private BCryptPasswordEncoder passwordEncoder;
    public int registerUser(User user) {
        Optional<User> userCheck = userRepository.findByEmail(user.getEmail());
        if (userCheck.isEmpty()) {
            // Encrypt the user's password before saving
            String encryptedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encryptedPassword);

            User savedUser = userRepository.save(user);
            createRoleSpecificEntity(user.getRole(), savedUser.getId());
            return savedUser.getId();
        } else {
            throw new PmsServiceException("User already registered!");
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
				 Company savedCompany=companyRepository.save(company);
				Job job =new Job();
				
				job.setCompany(savedCompany);
				jobRepository.save(job);
				
				
				
				break;
				
			case "HOD":
				HOD hod = new HOD();
				hod.setUser(userRepository.getById(userId));
				hodRepository.save(hod);
				break;
			// Handle other roles if needed
			default:
				break;
		}
	}

	 public boolean comparePassword(String rawPassword, String encodedPassword) {
	        return passwordEncoder.matches(rawPassword, encodedPassword);
	    }
		public User login(String email, String password) {
		    Optional<User> user = userRepository.findByEmail(email);
		    
		    if (user.isPresent() && comparePassword(password, user.get().getPassword())) {
		        return user.get();
		    } else {
		        throw new PmsServiceException("Invalid user or password");
		    }
		}

	
	
//	public List<User> getAllUsersByRole(String role) {
//	    return userRepository.findByRole(role);
//	}
	
	  public List<UserProjection> findUsersByRole(String role) {
	        return userRepository.findByRole(role);
	    }
//	
	
	 @Transactional
	    public void deleteUserById(int userId) {
	        Optional<User> userOptional = userRepository.findById(userId);

	        if (userOptional.isPresent()) {
	            User user = userOptional.get();
	            userRepository.delete(user);
	        } else {
	            throw new PmsServiceException("User not found with ID: " + userId);
	        }
	    }
	 
	 
	 

}



	

