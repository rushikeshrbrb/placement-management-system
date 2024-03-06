package com.pms.service;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.pms.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

	private final String SECRET_KEY = "1f1d81e51f638beb0080040bf7b3ecc3332586cc96b8dd8d5af0cef135445b62";
	
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}
	
	public boolean isValid(String token, UserDetails user) {
		String username = extractUsername(token);
		return (username.equals(user.getUsername())) && !isTokenExpired(token) ;
	}
	
	
	
	private boolean isTokenExpired(String token) {
		// TODO Auto-generated method stub
		return extractExpiration(token).before(new Date());
	}

	private Date extractExpiration(String token) {
		// TODO Auto-generated method stub
		return extractClaim(token, Claims::getExpiration);
	}

	public <T> T extractClaim(String token, Function<Claims, T> resolver) {
			
		Claims claims = extractAllClaims(token);
		return resolver.apply(claims);
		
	}
	
	private Claims extractAllClaims(String token) {
		return Jwts
				.parser()
				.verifyWith(getSigningKey())
				.build()
				.parseSignedClaims(token)
				.getPayload();
	}
	
	public String generateToken(User user) {
		String token = Jwts
				.builder()
				.subject(user.getEmail())
				.issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis()+ 24*60*60*1000))
				.signWith(getSigningKey())
				.compact();
		
		return token;
	}	
	
	private SecretKey getSigningKey() {
		byte[] keyBytes = Decoders.BASE64URL.decode(SECRET_KEY);
		return Keys.hmacShaKeyFor(keyBytes);
	}
}
