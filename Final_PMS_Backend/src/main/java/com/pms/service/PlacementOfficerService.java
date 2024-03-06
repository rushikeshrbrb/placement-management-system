package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.Admin;
import com.pms.entity.PlacementOfficer;
import com.pms.exception.PmsServiceException;
import com.pms.repository.AdminRepository;
import com.pms.repository.PlacementOfficerRepository;

@Service
public class PlacementOfficerService {

	@Autowired
	private PlacementOfficerRepository placementOfficerRepository;
	

	 public List<PlacementOfficer> getAllPlacementOfficers() {
	        return placementOfficerRepository.findAll();
	    }
	 
	 public PlacementOfficer getPlacementOfficerByUserId(int userId) {
		 	
	        return placementOfficerRepository.findByUserId(userId).get();
	    }

	 public void updatePlacementOfficerByUserId(int userId, PlacementOfficer updatedPlacementOfficer) {
	        
	        Optional<PlacementOfficer> existingStudentOptional = placementOfficerRepository.findByUserId(userId);

	        if (existingStudentOptional.isPresent()) {
	            // Student exists, update its details
	            PlacementOfficer existingPlacementOfficer= existingStudentOptional.get();

	            // Update the fields you want to change
//	            existingAdmin.setAdminId(updatedAdmin.getAdminId());
	            existingPlacementOfficer.setName(updatedPlacementOfficer.getName());
	            existingPlacementOfficer.setDesignation(updatedPlacementOfficer.getDesignation());
	            

	            // Save the updated student
	            placementOfficerRepository.save(existingPlacementOfficer);
	        } else {
	            // Student with the given user_id does not exist
	            throw new PmsServiceException("Placement Officer not found for User ID: " + userId);
	        }
	    }
}
