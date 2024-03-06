package com.pms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pms.dto.UserProjection;
import com.pms.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	
	public Optional<User> findByEmail(String email);
	
	List<UserProjection> findByRole(String role);
	
	public Optional<User> findByEmailAndPassword(String email, String password);
	
}
