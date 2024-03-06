package com.pms.controller;

import com.pms.dto.JobDTO;
import com.pms.entity.Job;
import com.pms.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
//@RequestMapping(value = "/your-endpoint", produces = "application/json")
public class JobController {

    @Autowired
    private JobService jobService;

    @PutMapping("/addjob/{companyId}/{jobId}")
    public void updateJobByCompanyId(@PathVariable int companyId, @PathVariable int jobId, @RequestBody Job updateJob) {
        jobService.updateJobByCompanyId(companyId, jobId, updateJob);
    }
//    http://localhost:8080/jobcompany/16
    //Fetct Job Basis on the company id 
    @GetMapping("/jobcompany/{companyId}")
    public List<Job> getJobsByCompanyId(@PathVariable int companyId) {
        return jobService.findJobsByCompanyId(companyId);
    }
    
    @GetMapping("/alljobs")
    public ResponseEntity<List<Job>> getAllJobs() {
        List<Job> allJobs = jobService.getAllJobs();
        return new ResponseEntity<>(allJobs, HttpStatus.OK);
    }
    
//    @RequestMapping(method = RequestMethod.POST ,value ="/api/jobs",produces = "application/json",consumes = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Job> addJob(@RequestBody Job job) {
//       Job addedJob = jobService.addJob(job);
//        return new ResponseEntity<>(addedJob, HttpStatus.CREATED);
//    }
    
    @PostMapping("/create")
    public ResponseEntity<String> createJob(@RequestBody JobDTO jobDTO) {
        jobService.createJob(jobDTO);
        return new ResponseEntity<>("Job created successfully", HttpStatus.CREATED);
    }
    
    @DeleteMapping("/delete/{jobId}")
    public ResponseEntity<String> deleteJobById(@PathVariable int jobId) {
        try {
            jobService.deleteJobById(jobId);
            return ResponseEntity.ok("Job deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting job: " + e.getMessage());
        }
    }

}
