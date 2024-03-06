package com.pms.dto;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDTO {

    private int companyId;  // New field to store the Company Id
    private String designation;
    private String specialization;
    private Integer experience;
    private String description;
    private String marks10;
    private String marks12;
    private String graduationPercent;
    private String status;
    private Double CTC;
	public int getCompanyId() {
		return companyId;
	}
	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}
	public String getDesignation() {
		return designation;
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
	public String getGraduationPercent() {
		return graduationPercent;
	}
	public void setGraduationPercent(String graduationPercent) {
		this.graduationPercent = graduationPercent;
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
	public void setCTC(Double cTC) {
		CTC = cTC;
	}

    // Add any other fields if needed
    
    
}

