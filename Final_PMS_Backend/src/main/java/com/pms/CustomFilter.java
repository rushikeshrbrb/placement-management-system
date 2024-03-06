//package com.pms;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//public class CustomFilter extends OncePerRequestFilter {
//
//    @Override
//    protected void doFilterInternal(
//            HttpServletRequest request,
//            HttpServletResponse response,
//            FilterChain filterChain
//    ) throws ServletException, IOException {
//
//        // Perform any custom logic after successful authentication
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication != null && authentication.isAuthenticated()) {
//            String username = authentication.getName();
//            // Perform additional actions based on the authenticated user if needed
//
//            // For example, you can log the successful login
//            System.out.println("User '" + username + "' logged in successfully");
//        }
//
//        // Continue with the filter chain
//        filterChain.doFilter(request, response);
//    }
//}
//
