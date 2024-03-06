package com.pms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pms.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer>  {
    Optional<Company> findByCompanyId(int companyId);
//    Company findByCompanyId(int companyId);
    Optional<Company> findByUserId(Integer userId);
}

