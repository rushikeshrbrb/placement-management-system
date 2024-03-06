package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.Admin;
import com.pms.exception.PmsServiceException;
import com.pms.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	
	private AdminRepository adminRepository;
	

	 public List<Admin> getAllAdmin() {
	        return adminRepository.findAll();
	    }
	 
	 public Admin getAdminByUserId(int userId) {
		 	
	        return adminRepository.findByUserId(userId).get();
	    }

	 public void updateAdminByUserId(int userId, Admin updatedAdmin) {
	        
	        Optional<Admin> existingStudentOptional = adminRepository.findByUserId(userId);

	        if (existingStudentOptional.isPresent()) {
	            // Student exists, update its details
	            Admin existingAdmin= existingStudentOptional.get();

	            // Update the fields you want to change
//	            existingAdmin.setAdminId(updatedAdmin.getAdminId());
	            existingAdmin.setName(updatedAdmin.getName());
	            existingAdmin.setDesignation(updatedAdmin.getDesignation());
	            

	            // Save the updated student
	            adminRepository.save(existingAdmin);
	        } else {
	            // Student with the given user_id does not exist
	            throw new PmsServiceException("admin not found for User ID: " + userId);
	        }
	    }
}