package com.pms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pms.entity.Company;
import com.pms.entity.JobApplication;
import com.pms.enums.ApplicationStatus;

public interface JobApplicationRepository  extends JpaRepository<JobApplication, Integer> {
	List<JobApplication> findByJobJobId(Integer jobId);
	 List<JobApplication> findByStatus(ApplicationStatus status);
	 List<JobApplication> findByCompanyAndStatus(Company company, String status);
	 List<JobApplication> findByJobCompanyCompanyIdAndStatus(Integer companyId, ApplicationStatus status);
	 @Query("SELECT ja.student.name, ja.company.companyName " +
	           "FROM JobApplication ja " +
	           "WHERE ja.status = 'SELECTED'")
	    List<Object[]> findSelectedStudents();
	    
	    List<JobApplication> findByStatusAndCompanyIsNotNull(ApplicationStatus status);

}
