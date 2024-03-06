package com.pms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

@NoArgsConstructor
public class CompanyDTO {
	
	  private String companyName;
	 
		private String contactNo;
	    private String website;
	    private String city;
	    public CompanyDTO(String companyName, String contactNo, String website, String city) {
			super();
			this.companyName = companyName;
			this.contactNo = contactNo;
			this.website = website;
			this.city = city;
		}

}
