package com.pms.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pms.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	 private final UserRepository repository;

	    public UserDetailsServiceImpl(UserRepository repository) {
	        this.repository = repository;
	    }	
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return repository.findByEmail(username)
				.orElseThrow(()-> new UsernameNotFoundException("User not found"));
	}

}
