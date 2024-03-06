package com.pms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.pms.entity.StudentEducation;


public interface StudentEducationRepository extends JpaRepository<StudentEducation , Integer> {
	
	 
	
	 List<StudentEducation> findByStudentId(int studentId);

}
