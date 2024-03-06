package com.pms.service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.pms.dto.CompanyDTO;
import com.pms.entity.Company;
import com.pms.entity.User;
import com.pms.exception.PmsServiceException;
import com.pms.repository.CompanyRepository;
import com.pms.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

	@Autowired
    private CompanyRepository companyRepository;
	
	@Autowired
    private UserRepository userRepository;
	
	 public Company saveCompany(Company company) {
	        return companyRepository.save(company);
	  }

	 public Optional<Company> getCompanyById(Integer companyId) {
		    return companyRepository.findById(companyId);
		}


	public List<Company> getAllCompanies() {
		return companyRepository.findAll();
	}

    public Company updateCompany(int companyId, Company updatedCompany) {
        Optional<Company> existingCompany = companyRepository.findById(companyId);

        if (existingCompany.isPresent()) {
            Company company = existingCompany.get();
            // Update the fields of the existing company with the new values
            company.setCompanyName(updatedCompany.getCompanyName());
            company.setWebsite(updatedCompany.getWebsite());
            company.setCity(updatedCompany.getCity());
            company.setContactNo(updatedCompany.getContactNo());    
            company.setAddress(updatedCompany.getAddress());
            
            // Save the updated company
            return companyRepository.save(company);
        } else {
            // Handle the case where the company with the given ID is not found
            return null;
        }
    }
    
    public void deleteCompany(int companyId) {
	 companyRepository.deleteById(companyId);
	
    }
    
    public Company getCompanyByUserId(int user_id) {
        return companyRepository.findByUserId(user_id)
                .orElseThrow(() -> new PmsServiceException("Company not found for user ID: " + user_id));
    }
    
    public Company updateCompanyByUserId(int userId, Company updatedCompany) {
        Optional<Company> existingCompany = companyRepository.findByUserId(userId);

        if (existingCompany.isPresent()) {
            Company company = existingCompany.get();
            // Update the fields of the existing company with the new values
            company.setCompanyName(updatedCompany.getCompanyName());
            company.setWebsite(updatedCompany.getWebsite());
            company.setCity(updatedCompany.getCity());
            company.setContactNo(updatedCompany.getContactNo());
            company.setAddress(updatedCompany.getAddress());

            
            return companyRepository.save(company);
        } else {
            
            throw new PmsServiceException("Company not found for user ID: " + userId);
        }
    }
    
    public Optional<CompanyDTO> getCompanyById1(Integer companyId) {
        Optional<Company> company = companyRepository.findById(companyId);
        return company.map(this::convertToDTO);
    }

    private CompanyDTO convertToDTO(Company c) {
        return new CompanyDTO(
                c.getCompanyName(),
                c.getContactNo(),
                c.getWebsite(),
                c.getCity() );
    }
    
    public List<CompanyDTO> AllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return companies.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    

}
