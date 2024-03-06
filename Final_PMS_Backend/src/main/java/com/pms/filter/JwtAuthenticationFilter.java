package com.pms.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.pms.service.JwtService;
import com.pms.service.UserDetailsServiceImpl;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	
	private final JwtService service;
	private final UserDetailsServiceImpl userDetailsService;
	
	
	public JwtAuthenticationFilter(JwtService service, UserDetailsServiceImpl userDetailsService) {
		super();
		this.service = service;
		this.userDetailsService = userDetailsService;
	}



	@Override
	protected void doFilterInternal(
			@NonNull HttpServletRequest request, 
			@NonNull HttpServletResponse response, 
			@NonNull FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String authHeader = request.getHeader("Authorization");
		
		if(authHeader == null || !authHeader.startsWith("Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}
		
		String token = authHeader.substring(7);
		String username = service.extractUsername(token);
		
		
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = userDetailsService.loadUserByUsername(username);
			
			if(service.isValid(token, userDetails)) {
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
								userDetails,null,userDetails.getAuthorities()
						);
						
				authToken.setDetails(
						
						new WebAuthenticationDetailsSource().buildDetails(request)
						);
				
					SecurityContextHolder.getContext().setAuthentication(authToken);
					
				
			}
		}
		
		filterChain.doFilter(request, response);
		
	}
	
		
}
