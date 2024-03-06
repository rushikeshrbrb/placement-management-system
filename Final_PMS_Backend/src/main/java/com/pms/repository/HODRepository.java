package com.pms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.Admin;
import com.pms.entity.HOD;

public interface HODRepository extends JpaRepository<HOD, Integer> {
	public Optional<HOD> findByUserId(int userId);
}
