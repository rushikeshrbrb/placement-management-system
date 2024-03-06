package com.pms.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Company_Job")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Job_Id")
    private int jobId;
    
//    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Company_Id", referencedColumnName = "Company_Id")
//   @JsonManagedReference
    private Company company;
    
    
    @OneToMany(mappedBy = "job")
    private List<JobApplication> jobApplications;
    @Column(name = "Designation"/*, nullable = false*/)
    private String designation;

    @Column(name = "Specialization")
    private String specialization;

    @Column(name = "Experience")
    private Integer experience;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "10_cri")
    private String marks10;

    @Column(name = "marks12")
    private String marks12;

    @Column(name = "Grad_cri")
    private String graduation_percent;

    @Column(name = "Status")
    private String status;

    @Column(name = "CTC")
    private Double CTC;

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

//	public Company getCompany() {
//		return company;
//	}
//
//	public void setCompany(Company company) {
//		this.company = company;
//	}

	public String getDesignation() {
		return designation;
	}

	public Company getCompany() {
		return company;
	}

	 public void setCompany(Company company) {
	        this.company = company;
	        if (company != null) {
	            this.company.getJobs().add(this);
	        }
	    }

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMarks10() {
		return marks10;
	}

	public void setMarks10(String marks10) {
		this.marks10 = marks10;
	}

	public String getMarks12() {
		return marks12;
	}

	public void setMarks12(String marks12) {
		this.marks12 = marks12;
	}

	public String getGraduation_percent() {
		return graduation_percent;
	}

	public void setGraduation_percent(String graduation_percent) {
		this.graduation_percent = graduation_percent;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Double getCTC() {
		return CTC;
	}

	public void setCTC(Double CTC) {
	    this.CTC = CTC;
	}

    // Getters and setters
    
    
    
	 }
	 


