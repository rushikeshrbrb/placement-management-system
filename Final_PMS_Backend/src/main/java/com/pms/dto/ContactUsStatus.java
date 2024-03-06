package com.pms.dto;

public class ContactUsStatus {

	private boolean status;
	private String statusMessage;
	private int Contact_id;
	
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
	public int getContact_id() {
		return Contact_id;
	}
	public void setContact_id(int contact_id) {
		Contact_id = contact_id;
	}
}
