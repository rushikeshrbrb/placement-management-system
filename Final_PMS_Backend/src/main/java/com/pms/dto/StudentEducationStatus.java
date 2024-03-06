package com.pms.dto;

public class StudentEducationStatus {
	
	private boolean status;
	private String statusMessage;
	private int studentEducationId;
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public int getstudentId() {
		return studentEducationId;
	}
	public void setstudentId(int studentId) {
		this.studentEducationId = studentId;
	}
	

}
