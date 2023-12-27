import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../Styles/AddNewJob.css";
import "@mdi/font/css/materialdesignicons.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

export function UpdateCompanyProfile() {
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const isValidIndianPhoneNumber = () => {
    const phoneRegex = /^[789]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidIndianCity = () => {
    const indianCities = ["Mumbai", "Delhi", "Bangalore","Pune","Hydrabad","Noida","Indore"];

    
    return indianCities.includes(city);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!companyName) {
      alert("Please enter the company name");
      return;
    }

    if (!city || !isValidIndianCity()) {
      alert("Please enter a valid city in India");
      return;
    }

    if (website && !website.startsWith("http://") && !website.startsWith("https://")) {
      alert("Please enter a valid website starting with http:// or https://");
      return;
    }

    if (!email || !isValidEmail()) {
      alert("Please enter a valid email address");
      return;
    }

    if (!phone || !isValidIndianPhoneNumber()) {
      alert("Please enter a valid Indian mobile number");
      return;
    }

    
    console.log('Form submitted:', { companyName, city, website, email, phone });

    
    setCompanyName("");
    setCity("");
    setWebsite("");
    setEmail("");
    setPhone("");
  };

  return (
    <MDBContainer fluid className="ADcontainer">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 class="text-black mb-4 text-center fw-bolder">Update Company Details</h1>

          <MDBCard>
            <MDBCardBody className="px-4">
              <form onSubmit={handleSubmit}>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Company Name</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your Company Name"
                      size="lg"
                      id="form1"
                      type="text"
                      name="name"
                      value={companyName}
                      onChange={handleCompanyNameChange}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Address/City</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="City"
                      size="lg"
                      id="form2"
                      type="text"
                      value={city}
                      onChange={handleCityChange}
                    />
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Website</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter your company site"
                      size="lg"
                      id="form2"
                      type="text"
                      value={website}
                      onChange={handleWebsiteChange}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Email</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="info@company.com"
                      size="lg"
                      id="form2"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Phone </h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="phone"
                      size="lg"
                      id="form2"
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBBtn className="my-4" size="lg" type="submit">
                  Submit
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
