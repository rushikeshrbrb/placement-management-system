package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.Admin;
public interface AdminRepository extends JpaRepository<Admin, Integer> {

			public List<Admin> findAll();
			public Optional<Admin> findByUserId(int userId);
			
	}