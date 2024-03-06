import "@mdi/font/css/materialdesignicons.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useState } from "react";

import "../Styles/studentRegister.css";
import { Form } from "react-bootstrap";

export default function CompanyRegister() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    website: "",
    email: "",
    password: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    gender: "",
    birthDate: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.website) {
      newErrors.website = "Website URL is required";
    } else {
      const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;

      if (!urlRegex.test(formData.website)) {
        newErrors.website = "Invalid website URL";
      }
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase character.";
    } else if (!/[!@#$%^&*(),.?":{}|<>0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = "Password must contain at least one digit.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Update formErrors state
    setFormErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      // Add logic to submit the form data to the server or perform any other actions
      setFormData({
        name: "",
        address: "",
        gender: "",
        birthDate: "",
        email: "",
        password: "",
        phone: "",
      });
    }
  };

  return (
    <MDBContainer fluid className="StudentRegister">
      <Form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-black mb-4 text-center fw-bolder">
              Add Company Details
            </h1>

            <MDBCard>
              <MDBCardBody className="px-4">
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
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <div className="text-danger">{formErrors.name}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Address/City</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="city"
                      size="lg"
                      id="form2"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />

                    {formErrors.address && (
                      <div className="text-danger">{formErrors.address}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Website</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="website"
                      size="lg"
                      id="form2"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />

                    {formErrors.website && (
                      <div className="text-danger">{formErrors.website}</div>
                    )}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <div className="text-danger">{formErrors.email}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Password</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter your password"
                      size="lg"
                      id="form2"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {formErrors.password && (
                      <div className="text-danger">{formErrors.password}</div>
                    )}
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
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && (
                      <div className="text-danger">{formErrors.phone}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBBtn
                  className="my-4"
                  size="lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </MDBBtn>
                <MDBBtn className="my-4 mx-4" size="lg" type="reset">
                  Reset
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Form>
    </MDBContainer>
  );
}
