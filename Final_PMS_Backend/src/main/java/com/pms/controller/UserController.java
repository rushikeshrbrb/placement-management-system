package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.dto.LoginDetails;
import com.pms.dto.LoginStatus;
import com.pms.dto.Status;
import com.pms.dto.UserProjection;
import com.pms.dto.UserRegistrationStatus;
import com.pms.entity.User;
import com.pms.exception.PmsServiceException;
import com.pms.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
//	@PostMapping("/register")
//	public UserRegistrationStatus userRegister(@RequestBody User user) {
//		try {
//			int id=userService.registerUser(user);
//			UserRegistrationStatus status=new UserRegistrationStatus();
//			status.setStatus(true);
//			status.setStatusMessage("user register successfully");
//			status.setCustomerId(id);
//			return status;
//			
//		}
//		catch(PmsServiceException e) {
//			UserRegistrationStatus status=new UserRegistrationStatus();
//			status.setStatus(false);
//			status.setStatusMessage(e.getMessage());
//			return status;
//			
//		}
//		
//	}
	@PostMapping("/user/login")
	public LoginStatus login(@RequestBody LoginDetails loginDetails) {
		try {
			User user;
		
			user = userService.login(loginDetails.getEmail(), loginDetails.getPassword());
			int id=user.getId();
			LoginStatus status = new LoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			UserRegistrationStatus userstatus=new UserRegistrationStatus();
			userstatus.setCustomerId(id);
			status.setUserId(user.getId());
			status.setRole(user.getRole());
			//status.setCustomer(customer);
			return status;
		}
		catch (PmsServiceException e) {
			LoginStatus status = new LoginStatus();
			UserRegistrationStatus userstatus=new UserRegistrationStatus();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}	
	
//	@GetMapping("/users/byRole/{role}")
//	public ResponseEntity<List<User>> getUsersByRole(@PathVariable String role) {
//	    List<User> users = userService.getAllUsersByRole(role);
//
//	    if (!users.isEmpty()) {
//	        return new ResponseEntity<>(users, HttpStatus.OK);
//	    } else {
//	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	    }
//	}
//	@PreAuthorize("hasRole('ADMIN')")
	 @GetMapping("/role/{role}")
	    public ResponseEntity<List<UserProjection>> getUsersByRole(@PathVariable String role) {
	        List<UserProjection> users = userService.findUsersByRole(role);
	        return ResponseEntity.ok(users);
	    }
	@DeleteMapping("/deleteusers/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
        userService.deleteUserById(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
}
