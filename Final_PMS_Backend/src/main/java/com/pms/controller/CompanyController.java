package com.pms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.pms.dto.CompanyDTO;
import com.pms.entity.Company;
import com.pms.exception.PmsServiceException;
import com.pms.service.CompanyService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
//@PreAuthorize("hasRole('COMPANY')")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	
	@GetMapping("/company/fetchbycompanyid/{companyId}")
	public ResponseEntity<Company> getCompanyById(@PathVariable Integer companyId) {
	    Optional<Company> company = companyService.getCompanyById(companyId);

	    return company.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
	            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	
//	 @PostMapping("/register")
//	    public ResponseEntity<Company> registerCompany(@RequestBody Company company) {
//	        Company savedCompany = companyService.saveCompany(company);
//	        return new ResponseEntity<>(savedCompany, HttpStatus.CREATED);
//	    }
	 
	 // use in admin dashboard
    @GetMapping("/admin/getallcompanies")
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }
    
     
    @PutMapping("/company/updatecompanyProfile/{companyId}")
    public ResponseEntity<Company> updateCompany(@PathVariable Integer companyId, @RequestBody Company updatedCompany) {
        Company updated = companyService.updateCompany(companyId, updatedCompany);

        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/admin/companydelete/{companyId}")
   public ResponseEntity<Void> deleteCompany(@PathVariable Integer companyId) {
        companyService.deleteCompany(companyId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    //company dashbord changeeeeeeeee
//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/company/findcompany/{userId}")
    public ResponseEntity<Company> getCompanyByUserId(@PathVariable int userId) {
        Company company = companyService.getCompanyByUserId(userId);
        return new ResponseEntity<>(company, HttpStatus.OK);
    }
    
    @PutMapping("/company/updateCompanyByUserId/{userId}")
    public ResponseEntity<String> updateCompanyByUserId(@PathVariable int userId, @RequestBody Company updatedCompany) {
        try {
            companyService.updateCompanyByUserId(userId, updatedCompany);
            return new ResponseEntity<>("Company updated successfully", HttpStatus.OK);
        } catch (PmsServiceException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    
    
    @GetMapping("/allCompany")
    public List<CompanyDTO> AllCompanies() {
        return companyService.AllCompanies();
    }

}
