import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../Styles/studentRegister.css";
import "@mdi/font/css/materialdesignicons.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";

export default function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
    birthDate: "",
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
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Birth Date is required";
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

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      gender: "",
      birthDate: "",
      email: "",
      password: "",
      phone: "",
    });

    // You can also reset the formErrors if needed
    setFormErrors({
      name: "",
      address: "",
      gender: "",
      birthDate: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <MDBContainer fluid className="StudentRegister">
      <Form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-black mb-4 text-center fw-bolder">
              Student Registration
            </h1>

            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Student Name</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your Name"
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
                    <h6 className="mb-0">Address</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Your Address"
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
                    <h6 className="mb-0">Gender</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBRadio
                      btn
                      btnColor="secondary"
                      id="btn-radio"
                      name="gender"
                      wrapperTag="span"
                      label="Male"
                      onChange={handleInputChange}
                    />
                    <MDBRadio
                      btn
                      btnColor="secondary"
                      id="btn-radio2"
                      name="gender"
                      wrapperClass="mx-2"
                      wrapperTag="span"
                      label="Female"
                      defaultChecked
                      onChange={handleInputChange}
                    />
                    {formErrors.gender && (
                      <div className="text-danger">{formErrors.gender}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Birth Date</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <Form.Control
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                    />
                    {formErrors.birthDate && (
                      <div className="text-danger">{formErrors.birthDate}</div>
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
                      label="username@domain.com"
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
                    <h6 className="mb-0">Phone</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Phone"
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
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit
                </MDBBtn>
                <MDBBtn
                  className="my-4 mx-4"
                  size="lg"
                  type="reset"
                  onClick={handleReset}
                >
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
