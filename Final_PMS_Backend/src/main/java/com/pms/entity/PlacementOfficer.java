package com.pms.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "PlacementOfficer")
public class PlacementOfficer {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int officerId;

	    @OneToOne
	    @JoinColumn(name = "user_Id")
	    @JsonIgnore 
	    private User user;

	    private String name;
	    private String designation;

	    public int getOfficerId() {
	        return officerId;
	    }

	    public void setOfficerId(int officerId) {
	        this.officerId = officerId;
	    }

	    
	    public User getUser() {
	        return user;
	    }

	   
	    public void setUser(User user) {
	        this.user = user;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getDesignation() {
	        return designation;
	    }

	    public void setDesignation(String designation) {
	        this.designation = designation;
	    }
	

}
