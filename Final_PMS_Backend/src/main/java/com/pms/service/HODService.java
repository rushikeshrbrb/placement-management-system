package com.pms.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.Admin;
import com.pms.entity.HOD;
import com.pms.exception.PmsServiceException;
import com.pms.repository.HODRepository;
@Service
public class HODService {
	@Autowired
	private HODRepository hodRepository;
	
	 public HOD getHodByUserId(int userId) {
		 	
	        return hodRepository.findByUserId(userId).get();
	    }
	 
	 public void updateHodByUserId(int userId, HOD updatedHod) {
	        
	        Optional<HOD> existinghodOptional = hodRepository.findByUserId(userId);

	        if (existinghodOptional.isPresent()) {
	            // Student exists, update its details
	            HOD existingHod= existinghodOptional.get();

	            // Update the fields you want to change
//	            existingAdmin.setAdminId(updatedAdmin.getAdminId());
	            existingHod.setName(updatedHod.getName());
	            existingHod.setDesignation(updatedHod.getDesignation());
	            

	            // Save the updated student
	            hodRepository.save(existingHod);
	        } else {
	            // Student with the given user_id does not exist
	            throw new PmsServiceException("admin not found for User ID: " + userId);
	        }
	    }
	
	
	
}
