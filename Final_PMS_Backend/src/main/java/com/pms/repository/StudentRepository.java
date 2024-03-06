package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pms.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	public List<Student> findAll();
	public Optional<Student> findById(int id);
	

	public Optional<Student> findByUserId(int userId);
	
	 @Query("SELECT s.id, s.name, s.phone FROM Student s")
	    List<Object[]> findStudentNameIdPhone();
	    
	  
	
}

