package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.Student;
import com.pms.exception.PmsServiceException;
import com.pms.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService studentService;
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
	
	@GetMapping("/getAllStudents")
	public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
	
	
	 @GetMapping("/getByUserId/{userId}")
	    public Student getStudentsByUserId(@PathVariable int userId) {
	        return studentService.getStudentsByUserId(userId);
	    }
	 
	 @PutMapping("/updateByUserId/{userId}")
	    public ResponseEntity<String> updateStudentByUserId(@PathVariable int userId, @RequestBody Student updatedStudent) {
	        try {
	            studentService.updateStudentByUserId(userId, updatedStudent);
	            return new ResponseEntity<>("Student updated successfully", HttpStatus.OK);
	        } catch (PmsServiceException e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	        }
	    }
	 @GetMapping("/namesAndPhones")
	    public List<Object[]> findStudentNameIdPhone() {
	        return studentService.findStudentNameIdPhone();
	    }
}