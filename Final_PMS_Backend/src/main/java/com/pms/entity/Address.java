package com.pms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class Address {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="Address_id")
		private int id;
		private String pincode;
		private String city;
		private String state;
		private String country;
		
		@OneToOne
		@JoinColumn(name="Student_Id")
		private Student student;
		
		@OneToOne
		@JoinColumn(name="Company_Id")
		private Company company;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Student getStudent() {
			return student;
		}
		public void setStudent(Student student) {
			this.student = student;
		}
		public Company getCompany() {
			return company;
		}
		public void setCompany(Company company) {
			this.company = company;
		}
		public String getPincode() {
			return pincode;
		}
		public void setPincode(String pincode) {
			this.pincode = pincode;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getCountry() {
			return country;
		}
		public void setCountry(String country) {
			this.country = country;
		}
}
