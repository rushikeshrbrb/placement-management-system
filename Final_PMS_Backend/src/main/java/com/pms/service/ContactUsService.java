package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.entity.ContactUs;
import com.pms.repository.ContactUsRepo;



@Service
public class ContactUsService {
	
	@Autowired
	ContactUsRepo contactUsRepo;
	
	public int registerContact(ContactUs contactUs)
	{
		Optional<ContactUs> contactcheck=contactUsRepo.findByEmail(contactUs.getEmail());
//		if(contactcheck.isEmpty())
			ContactUs saveContactUs=contactUsRepo.save(contactUs);
			return saveContactUs.getContact_id();	
	}
	public List<ContactUs> getAllContacts() {
        return contactUsRepo.findAll();
    }
	
	public Optional<ContactUs> getContactByEmail(String email) {
        return contactUsRepo.findByEmail(email);
    }

}
