package com.pms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class JobApplicationDTO {
	private String email;
    private String mobileNo;
    private Integer experience;
    private String graduationYear;
    private String textareaValue;
    private String resume; // File path
    private Integer studentId;
    private Integer jobId;

    private Integer companyId;
    
    
    
    public JobApplicationDTO(String email, String mobileNo, Integer experience, String graduationYear,
			String textareaValue, String resume, Integer studentId, Integer jobId, Integer companyId) {
		super();
		this.email = email;
		this.mobileNo = mobileNo;
		this.experience = experience;
		this.graduationYear = graduationYear;
		this.textareaValue = textareaValue;
		this.resume = resume;
		this.studentId = studentId;
		this.jobId = jobId;
		this.companyId = companyId;
	}

	// Getters and setters

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public String getGraduationYear() {
		return graduationYear;
	}

	public void setGraduationYear(String graduationYear) {
		this.graduationYear = graduationYear;
	}

	public String getTextareaValue() {
		return textareaValue;
	}

	public void setTextareaValue(String textareaValue) {
		this.textareaValue = textareaValue;
	}

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public Integer getJobId() {
		return jobId;
	}

	public void setJobId(Integer jobId) {
		this.jobId = jobId;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}
    
    
    
}
