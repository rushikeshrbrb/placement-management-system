package com.pms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.pms")
public class PmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PmsBackendApplication.class, args);
	}

}
