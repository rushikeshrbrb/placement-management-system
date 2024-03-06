package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.Job;


public interface JobRepository  extends JpaRepository<Job, Integer>{
	List<Job> findByCompany_CompanyId(int companyId);
	Optional<Job> findByCompany_CompanyIdAndJobId(int companyId, int jobId);
}
