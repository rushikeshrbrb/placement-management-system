package com.pms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.Admin;
import com.pms.entity.HOD;
import com.pms.exception.PmsServiceException;
import com.pms.service.HODService;

@RestController
@CrossOrigin
public class HODController {
	@Autowired
	private HODService hodService;

	 @GetMapping("/hod/{userId}")
	    public HOD getHodByUserId(@PathVariable int userId) {
	        return hodService.getHodByUserId(userId);
	    }
	 
	 @PutMapping("/updateByHodId/{userId}")
	    public ResponseEntity<String> updateHodByUserId(@PathVariable int userId, @RequestBody HOD updatedHod) {
	        try {
	        	hodService.updateHodByUserId(userId, updatedHod);
	            return new ResponseEntity<>("admin updated successfully", HttpStatus.OK);
	        } catch (PmsServiceException e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	        }
	    }

}
