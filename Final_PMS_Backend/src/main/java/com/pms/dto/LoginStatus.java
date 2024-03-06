package com.pms.dto;

public class LoginStatus {
	private int userId;
	private String role;
	private boolean status;
	private String messageIfAny;
	public String getMessageIfAny() {
		return messageIfAny;
	}
	public void setMessageIfAny(String messageIfAny) {
		this.messageIfAny = messageIfAny;
	}
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

	public boolean getStatus() {
		return status;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public void setStatus(boolean b) {
		this.status = b;
	}

}
