package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.PlacementOfficer;

public interface PlacementOfficerRepository extends JpaRepository<PlacementOfficer, Integer> {
	public List<PlacementOfficer> findAll();
	public Optional<PlacementOfficer> findByUserId(int userId);
}
