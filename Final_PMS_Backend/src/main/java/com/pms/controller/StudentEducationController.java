package com.pms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.dto.StudentEducationStatus;
import com.pms.dto.UserRegistrationStatus;
import com.pms.entity.StudentEducation;
import com.pms.entity.User;
import com.pms.service.StudentEducationService;

import java.util.List;

@RestController
@CrossOrigin
public class StudentEducationController {
	
	@Autowired
	StudentEducationService studentEducationService;
	
	@PostMapping("/registerStudentEducation")
	public StudentEducationStatus studentRegister(@RequestBody StudentEducation user) {
		
			int id=studentEducationService.registerStudentEducation(user);
			StudentEducationStatus status=new StudentEducationStatus();
			status.setStatus(true);
			status.setStatusMessage("user register successfully");
		
			status.setstudentId(id);
			return status;
	}
	
	@GetMapping("/getAllStudentEducationDetails")
    public List<StudentEducation> getAllStudentEducationDetails() {
        return studentEducationService.getAllStudentEducationDetails();
    }
			
	@GetMapping("/getStudentEducationByStudentId/{studentId}")
	public List<StudentEducation> getStudentEducationByStudentId(@PathVariable int studentId) {
	    return studentEducationService.getStudentEducationByStudentId(studentId);
	}


}
