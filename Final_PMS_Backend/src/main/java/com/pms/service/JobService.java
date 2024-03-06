package com.pms.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dto.JobDTO;
import com.pms.entity.Company;
import com.pms.entity.Job;
import com.pms.exception.PmsServiceException;
import com.pms.repository.JobRepository;

@Service
public class JobService implements JobServiceImpl{

	private final JobRepository jobRepository;
    private final CompanyService companyService;
    @PersistenceContext
    private EntityManager entityManager;
	@Autowired
//	JobRepository jobRepository;
	
	public JobService(JobRepository jobRepository, CompanyService companyService) {
        this.jobRepository = jobRepository;
        this.companyService = companyService;
    }
	
	

	public void updateJobByCompanyId(int companyId, int jobId, Job updateJob) {
		Optional<Job> existingJobOptional = jobRepository.findByCompany_CompanyIdAndJobId(companyId, jobId);

		if (existingJobOptional.isPresent()) {
			// Job exists, update its details
			Job existingJob = existingJobOptional.get();
			existingJob.setMarks10(updateJob.getMarks10());
			existingJob.setMarks12(updateJob.getMarks12());
			existingJob.setCTC(updateJob.getCTC());
			existingJob.setDesignation(updateJob.getDesignation());
			existingJob.setExperience(updateJob.getExperience());
			existingJob.setDescription(updateJob.getDescription());
			// Add more fields as needed

			// Save the updated job
			jobRepository.save(existingJob);
		} else {
			// Job with the given company ID and job ID does not exist
			throw new PmsServiceException("Job not found for Company ID: " + companyId + " and Job ID: " + jobId);
		}
	}

	public List<Job> findJobsByCompanyId(int companyId) {
		return jobRepository.findByCompany_CompanyId(companyId);
	}

	public List<Job> getAllJobs() {
		return jobRepository.findAll();
	}
	
	  public Job addJob(Job job) {
//		  System.out.println(job.getCompany().getCompanyId());
		  
	        return jobRepository.save(job);
	    }
	  
	  
	  @Transactional
	    public void createJob(JobDTO jobDTO) {
	        Job job = new Job();
	        job.setDesignation(jobDTO.getDesignation());
	        job.setSpecialization(jobDTO.getSpecialization());
	        job.setExperience(jobDTO.getExperience());
	        job.setDescription(jobDTO.getDescription());
	        job.setMarks10(jobDTO.getMarks10());
	        job.setMarks12(jobDTO.getMarks12());
	        job.setGraduation_percent(jobDTO.getGraduationPercent());
	        job.setStatus(jobDTO.getStatus());
	        job.setCTC(jobDTO.getCTC());

	        // Retrieve the Company using EntityManager
	        Company company = entityManager.find(Company.class, jobDTO.getCompanyId());

	        // Set the Company
	        job.setCompany(company);

	        jobRepository.save(job);
	    }
	  
	  public void deleteJobById(int jobId) {
	        jobRepository.deleteById(jobId);
	    }


	
}
