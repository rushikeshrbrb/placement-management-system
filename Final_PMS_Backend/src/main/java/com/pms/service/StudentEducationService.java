package com.pms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.StudentEducation;
import com.pms.repository.StudentEducationRepository;

@Service
public class StudentEducationService {
	
	@Autowired
	private StudentEducationRepository studentEducationRepo;
	
	public int registerStudentEducation(StudentEducation studentEducation) {
		
			StudentEducation se=studentEducationRepo.save(studentEducation);
			return se.getStudentEducationId();
	
	}
	
	public List<StudentEducation> getAllStudentEducationDetails() {
        return studentEducationRepo.findAll();
    }
	
	public List<StudentEducation> getStudentEducationByStudentId(int studentId) {
        return studentEducationRepo.findByStudentId(studentId);
    }

}
