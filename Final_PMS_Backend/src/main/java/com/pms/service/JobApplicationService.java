package com.pms.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dto.JobApplicationDTO;
import com.pms.dto.SelectedStudentDTO;
import com.pms.entity.Company;
import com.pms.entity.Job;
import com.pms.entity.JobApplication;
import com.pms.entity.Student;
import com.pms.enums.ApplicationStatus;
import com.pms.repository.CompanyRepository;
import com.pms.repository.JobApplicationRepository;
import com.pms.repository.JobRepository;
import com.pms.repository.StudentRepository;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private JobRepository jobRepository;
    
    @Autowired
    private StudentRepository studentRepository;
    
    @Autowired
    private CompanyRepository companyRepository;
    
    

//    public JobApplication applyForJob(JobApplicationDTO applicationDTO) {
//        Job job = jobRepository.findById(applicationDTO.getJobId())
//                .orElseThrow(() -> new EntityNotFoundException("Job not found"));
//
//        JobApplication jobApplication = new JobApplication();
//        jobApplication.setEmail(applicationDTO.getEmail());
//        jobApplication.setMobileNo(applicationDTO.getMobileNo());
//        jobApplication.setExperience(applicationDTO.getExperience());
//        jobApplication.setGraduationYear(applicationDTO.getGraduationYear());
//        jobApplication.setTextareaValue(applicationDTO.getTextareaValue());
//        jobApplication.setJob(job);
//        jobApplication.setStudent(student); // Set the Student entity
//        jobApplication.setCompany(company); 
//        jobApplication.setResume(applicationDTO.getResume());
//        
//
//        // Set additional fields based on your DTO
//
//        return jobApplicationRepository.save(jobApplication);
//    }
    
    public JobApplication applyForJob(JobApplicationDTO applicationDTO) {
    	JobApplication jobApplication = new JobApplication();
    	try {
        Job job = jobRepository.findById(applicationDTO.getJobId())
                .orElseThrow(() -> new EntityNotFoundException("Job not found"));

        Student student = studentRepository.findById(applicationDTO.getStudentId())
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));

        Company company = companyRepository.findById(applicationDTO.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        //JobApplication jobApplication = new JobApplication();
        jobApplication.setEmail(applicationDTO.getEmail());
        jobApplication.setMobileNo(applicationDTO.getMobileNo());
        jobApplication.setExperience(applicationDTO.getExperience());
        jobApplication.setGraduationYear(applicationDTO.getGraduationYear());
        jobApplication.setTextareaValue(applicationDTO.getTextareaValue());
        jobApplication.setJob(job);
        jobApplication.setStudent(student); // Set the Student entity
        jobApplication.setCompany(company); // Set the Company entity
        jobApplication.setResume(applicationDTO.getResume());
    	}
    	catch(Exception e) {
    		e.printStackTrace();
    		System.out.println("error");
    		
    	}

        // Set additional fields based on your DTO

        return jobApplicationRepository.save(jobApplication);
    }


    public List<JobApplication> getJobApplicationsByJobId(Integer jobId) {
        return jobApplicationRepository.findByJobJobId(jobId);
    }

    public void updateApplicationStatus(Integer applicationId, ApplicationStatus status, String remark) {
        JobApplication jobApplication = jobApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new EntityNotFoundException("Job Application not found"));

        jobApplication.setStatus(status);
        jobApplication.setRemark(remark);
        jobApplicationRepository.save(jobApplication);
    }

    // Existing methods

    public void selectStudent(Integer applicationId) {
        updateApplicationStatus(applicationId, ApplicationStatus.SELECTED, null);
    }

    public void rejectStudent(Integer applicationId, String remark) {
        updateApplicationStatus(applicationId, ApplicationStatus.REJECTED, remark);
    }

    public List<JobApplication> getSelectedStudents() {
        return jobApplicationRepository.findByStatus(ApplicationStatus.SELECTED);
    }

//    public List<JobApplication> getSelectedStudentsByCompany(Integer companyId) {
//        return jobApplicationRepository.findByJobCompanyCompanyIdAndStatus(companyId, ApplicationStatus.SELECTED);
//    }
//    public List<JobApplication> getSelectedStudentsByCompany(Integer companyId) {
//        return jobApplicationRepository.findByJobCompanyCompanyIdAndStatus(companyId, "SELECTED");
//    }
    public List<JobApplication> getSelectedStudentsByCompany(Integer companyId, ApplicationStatus status) {
        return jobApplicationRepository.findByJobCompanyCompanyIdAndStatus(companyId, status);
    }
    
//    public List<Object[]> findSelectedStudents() {
//        return jobApplicationRepository.findSelectedStudents();
//    }
    public List<JobApplication> findSelectedApplicationsWithCompany() {
        return jobApplicationRepository.findByStatusAndCompanyIsNotNull(ApplicationStatus.SELECTED);
    }
    
//    public List<Map<String, String>> findSelectedStudents() {
//        List<Object[]> selectedStudentsData = jobApplicationRepository.findSelectedStudents();
//
//        return selectedStudentsData.stream()
//                .map(data -> {
//                    Map<String, String> result = Map.of(
//                            "studentName", (String) data[0],
//                            "email", (String) data[1],
//                            "companyName", (String) data[2]
//                    );
//                    return result;
//                })
//                .collect(Collectors.toList());
//    }
    public List<SelectedStudentDTO> findSelectedStudents() {
        List<JobApplication> selectedStudents = jobApplicationRepository.findByStatusAndCompanyIsNotNull(ApplicationStatus.SELECTED);

        return selectedStudents.stream()
                .map(application -> new SelectedStudentDTO(application.getStudent().getName(), application.getCompany().getCompanyName()))
                .collect(Collectors.toList());
    }

}
