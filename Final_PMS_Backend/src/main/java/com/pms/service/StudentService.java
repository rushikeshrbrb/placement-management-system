package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.Student;
import com.pms.exception.PmsServiceException;
import com.pms.repository.StudentRepository;





@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
//	public int registerStudent(Student student) {
//		
//		Optional<Student> studentCheck = studentRepository.findUserById(student.getUser().getId());
//		if(studentCheck.isPresent()) {
//			Student saveStudent = studentRepository.save(student);
//			return saveStudent.getId();
//		}
//		else {
//			throw new PmsServiceException("Student Already Registered");
//		}
//	}
	
//	 public Student getStudentById(int id) {
//	        Optional<Student> student = studentRepository.findUserById(id);
//	        return student.orElse(null); // Return null if the student is not found
//	    }
	 
	 public List<Student> getAllStudents() {
	        return studentRepository.findAll();
	    }
	 
	 public Student getStudentsByUserId(int userId) {
		 	
	        return studentRepository.findByUserId(userId).get();
	    }

	 public void updateStudentByUserId(int userId, Student updatedStudent) {
	        
	        Optional<Student> existingStudentOptional = studentRepository.findByUserId(userId);

	        if (existingStudentOptional.isPresent()) {
	            // Student exists, update its details
	            Student existingStudent = existingStudentOptional.get();

	            // Update the fields you want to change
	            existingStudent.setName(updatedStudent.getName());
	            existingStudent.setGender(updatedStudent.getGender());
	            existingStudent.setDob(updatedStudent.getDob());
	            existingStudent.setPhone(updatedStudent.getPhone());
	            existingStudent.setAddress(updatedStudent.getAddress());

	            // Save the updated student
	            studentRepository.save(existingStudent);
	        } else {
	            // Student with the given user_id does not exist
	            throw new PmsServiceException("Student not found for User ID: " + userId);
	        }
	    }
	 
	 public List<Object[]> findStudentNameIdPhone() {
	        return studentRepository.findStudentNameIdPhone();
	    }
}
