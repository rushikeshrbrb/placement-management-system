//package com.pms.controller;
//
//import java.io.File;
//import java.io.IOException;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.pms.dto.JobApplicationDTO;
//import com.pms.entity.JobApplication;
//import com.pms.service.JobApplicationService;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/api/job-applications")
//public class JobApplicationController {
//	@Autowired
//	private JobApplicationService jobApplicationService;
////	@Autowired
////	private JobApplicationDTO applicationDTO;
//
//	@Value("${file.upload-dir}")
//	private String uploadDir;
//	// http://localhost:8080/api/job-applications/j1qob/4
//
//	// Application details saved in the database with particular job
//
//	
//	  
//	  @PostMapping("/apply") public ResponseEntity<String> applyForJob(@RequestBody
//	  JobApplicationDTO applicationDTO) { JobApplication jobApplication =
//	  jobApplicationService.applyForJob(applicationDTO); return
//	  ResponseEntity.ok("Job application successful. Application ID: " +
//	  jobApplication.getApplicationId()); }
//	 
//
////	 
////	
////	  @PostMapping("/apply") public ResponseEntity<String> applyForJob(
////	  
////	  @RequestParam("file") MultipartFile file,
////	  
////	  @RequestParam("email") String email,
////	  
////	  @RequestParam("mobileNo") String mobileNo,
////	  
////	  @RequestParam("experience") Integer experience,
////	  
////	  @RequestParam("graduationYear") String graduationYear,
////	  
////	  @RequestParam("textareaValue") String textareaValue,
////	  
////	  @RequestParam("studentId") Integer studentId,
////	  
////	  @RequestParam("JobId") Integer JobId) {
////	  
////	  try { // Save the file to the server
////		  String
////		  filePath = uploadDir + "/" +
////	  file.getOriginalFilename(); file.transferTo(new File(filePath));
////	  
////	  // Create a JobApplicationDTO with file path 
////	  JobApplicationDTO applicationDTO
////	  = new JobApplicationDTO(); applicationDTO.setEmail(email);
////	  applicationDTO.setMobileNo(mobileNo);
////	  applicationDTO.setExperience(experience);
////	  applicationDTO.setGraduationYear(graduationYear);
////	  applicationDTO.setTextareaValue(textareaValue);
////	  applicationDTO.setResume(filePath); // Set the file path
////	  applicationDTO.setStudentId(studentId); applicationDTO.setJobId(JobId);
////	  
////	  // Apply for the job using the service
////	  JobApplication jobApplication =
////	  jobApplicationService.applyForJob(applicationDTO);
////	  
////	  return ResponseEntity.ok("Job application successful. Application ID: " + jobApplication.getApplicationId()); } catch (IOException e) {
////	  e.printStackTrace(); return
////	  ResponseEntity.status(500).body("Error uploading file"); } }
//
////http://localhost:8080/api/job-applications/job/3
//	// Populate application form basis on the job id
//	@GetMapping("/job/{jobId}")
//	public List<JobApplication> getJobApplicationsByJobId(@PathVariable Integer jobId) {
//		return jobApplicationService.getJobApplicationsByJobId(jobId);
//	}
//	
//	
//	@PostMapping("/select/{applicationId}")
//    public ResponseEntity<String> selectStudent(@PathVariable Integer applicationId) {
//        jobApplicationService.selectStudent(applicationId);
//        return ResponseEntity.ok("Student selected successfully.");
//    }
//
//    @PostMapping("/reject/{applicationId}")
//    public ResponseEntity<String> rejectStudent(@PathVariable Integer applicationId, @RequestBody String remark) {
//        jobApplicationService.rejectStudent(applicationId, remark);
//        return ResponseEntity.ok("Student rejected successfully.");
//    }
//}

package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pms.dto.JobApplicationDTO;
import com.pms.dto.SelectedStudentDTO;
import com.pms.entity.JobApplication;
import com.pms.enums.ApplicationStatus;
import com.pms.service.JobApplicationService;

@CrossOrigin
@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    // Application details saved in the database with a particular job
    @PostMapping("/apply")
    public ResponseEntity<String> applyForJob(@RequestBody JobApplicationDTO applicationDTO) {
        JobApplication jobApplication = jobApplicationService.applyForJob(applicationDTO);
        return ResponseEntity.ok("Job application successful. Application ID: " + jobApplication.getApplicationId());
    }

    // Populate application form basis on the job id
    @GetMapping("/job/{jobId}")
    public List<JobApplication> getJobApplicationsByJobId(@PathVariable Integer jobId) {
        return jobApplicationService.getJobApplicationsByJobId(jobId);
    }

    @PostMapping("/select/{applicationId}")
    public ResponseEntity<String> selectStudent(@PathVariable Integer applicationId) {
        jobApplicationService.selectStudent(applicationId);
        return ResponseEntity.ok("Student selected successfully.");
    }

    @PostMapping("/reject/{applicationId}")
    public ResponseEntity<String> rejectStudent(@PathVariable Integer applicationId, @RequestBody String remark) {
        jobApplicationService.rejectStudent(applicationId, remark);
        return ResponseEntity.ok("Student rejected successfully.");
    }
    
    @GetMapping("/selected-students")
    public List<JobApplication> getSelectedStudents() {
        return jobApplicationService.getSelectedStudents();
    }

    @GetMapping("/selected-student/{companyId}")
    public List<JobApplication> getSelectedStudentsByCompany(@PathVariable Integer companyId) {
        return jobApplicationService.getSelectedStudentsByCompany(companyId, ApplicationStatus.SELECTED);
    }
    
    @GetMapping("/selectedApplicationsWithCompany")
    public List<JobApplication> getSelectedApplicationsWithCompany() {
        return jobApplicationService.findSelectedApplicationsWithCompany();
    }
    
    @GetMapping("/selectedStudents")
    public List<SelectedStudentDTO> findSelectedStudents() {
        return jobApplicationService.findSelectedStudents();
    }
    
    
  
}

