package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.ContactUs;



public interface ContactUsRepo extends JpaRepository < ContactUs , Integer>{
	
	public Optional<ContactUs> findByEmail(String email);
	
	public List<ContactUs> findAll(); 
	
	

}
