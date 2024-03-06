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

import com.pms.entity.Admin;
import com.pms.exception.PmsServiceException;
import com.pms.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
	@Autowired
	private AdminService adminService;
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
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/admin/getAllAdmin")
	public List<Admin> getAllStudents() {
        return adminService.getAllAdmin();
    }
	
	
	 @GetMapping("/admin/getoneAdmin/{userId}")
	    public Admin getAdminByUserId(@PathVariable int userId) {
	        return adminService.getAdminByUserId(userId);
	    }
	 
	 @PutMapping("/admin/updateByAdminId/{userId}")
	    public ResponseEntity<String> updateAdminByUserId(@PathVariable int userId, @RequestBody Admin updatedAdmin) {
	        try {
	            adminService.updateAdminByUserId(userId, updatedAdmin);
	            return new ResponseEntity<>("admin updated successfully", HttpStatus.OK);
	        } catch (PmsServiceException e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	        }
	    }
}