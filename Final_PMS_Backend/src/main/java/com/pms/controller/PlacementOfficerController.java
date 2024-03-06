package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.PlacementOfficer;
import com.pms.exception.PmsServiceException;
import com.pms.service.PlacementOfficerService;

@RestController
@CrossOrigin
@PreAuthorize("hasRole('PLACEMENT_OFFICER')")
public class PlacementOfficerController {

	@Autowired
	private PlacementOfficerService placementOfficerService;
//	@PostMapping("/registerStudent")
//	public StudentRegistrationStatus studentRegister(@RequestBody Student student) {
//		try {
//			int id=studentService.registerStudent(student);
//			StudentRegistrationStatus status=new StudentRegistrationStatus();
//			status.setStatus(true);
//			status.setStatusMessage("Stident register successfully");
//			status.setStudentId(id);
//			return status;
//			
//		}
//		catch(PmsServiceException e) {
//			StudentRegistrationStatus status=new StudentRegistrationStatus();
//			status.setStatus(false);
//			status.setStatusMessage(e.getMessage());
//			return status;
//			
//		}
//		
//	}
	
//	@GetMapping("/getStudents/{id}")
//	public Student fetchStudentById(@PathVariable int id){
//		return studentService.getStudentById(id);
//	}
	//changes
	@PreAuthorize("hasRole('PLACEMENT_OFFICER')")
	@GetMapping("/placement/getAllPlacementOfficers")
	public List<PlacementOfficer> getAllStudents() {
        return placementOfficerService.getAllPlacementOfficers();
    }
	
	
	 @GetMapping("/placement/getonePlacementOfficer/{userId}")
	    public PlacementOfficer getPlacementOfficerByUserId(@PathVariable int userId) {
	        return placementOfficerService.getPlacementOfficerByUserId(userId);
	    }
	 
	 @PutMapping("/placement/updateByPlacementOfficerId/{userId}")
	    public ResponseEntity<String> updatePlacementOfficerByUserId(@PathVariable int userId, @RequestBody PlacementOfficer updatedPlacementOfficer) {
	        try {
	            placementOfficerService.updatePlacementOfficerByUserId(userId, updatedPlacementOfficer);
	            return new ResponseEntity<>("Placement Officer updated successfully", HttpStatus.OK);
	        } catch (PmsServiceException e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	        }
	    }

}

