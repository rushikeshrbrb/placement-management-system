package com.pms.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pms.dto.ContactUsStatus;
import com.pms.entity.ContactUs;
import com.pms.service.ContactUsService;


@RestController
@CrossOrigin
public class ContactUsController {

	
	@Autowired
	private ContactUsService contactUsService; 
	
	@PostMapping("/registercontact")
	public ContactUsStatus contactusRegister(@RequestBody ContactUs contactUs) {
		try {
			int id=contactUsService.registerContact(contactUs);
			ContactUsStatus status=new ContactUsStatus();
			status.setStatus(true);
			status.setStatusMessage("Contacted successfully");
			status.setContact_id(id);
			return status;
		
		}
		catch(Exception e) {
			ContactUsStatus status=new ContactUsStatus();
			status.setStatusMessage("Not Contacted . Please try again");
			return status;
			
		}	
	}
	
	@GetMapping("/getAllContacts")
    public List<ContactUs> getAllContacts() {
        return contactUsService.getAllContacts();
    }
	
	 @GetMapping("/contactbyemail")
	    public ResponseEntity<ContactUs> getContactByEmail(@RequestParam String email) {
	        Optional<ContactUs> contactUs = contactUsService.getContactByEmail(email);
	        return contactUs.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }
	

}
