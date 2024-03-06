package com.pms.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
	private int userId;
	private String token;
    private String message;
    private final String role;

    public AuthenticationResponse(String token, String message,String role,int userId) {
        this.token = token;
        this.message = message;
        this.role = role;
        this.userId=userId;
    }

    public String getToken() {
        return token;
    }

    public String getMessage() {
        return message;
    }
}
