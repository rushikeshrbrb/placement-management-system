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
  MDBInput
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import { saveInfo } from "../Services/services";

export default function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      email: '',
      password: '',
      role: ''
    });

    setFormErrors({
      email: '',
      password: '',
      role: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

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

    if (!formData.role) {
      newErrors.role = "role is required";
    } 

    // setFormErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   console.log("Form Submitted:", formData);
    //   saveInfo(formData);
      
      
    // }

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
         saveInfo(formData);
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Error saving info:", error);
      }
    }
    setFormData({
      email: '',
      password: '',
      role: ''
    });
  };

  return (
    <MDBContainer fluid className="StudentRegister">
      <Form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-black mb-4 text-center fw-bolder">User Registration</h1>
            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">User Email</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter email"
                      size="lg"
                      id="form1"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Password</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Password"
                      size="lg"
                      id="form2"
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <label htmlFor="role">User Type</label>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <select
                    className="pe-5"
                      label="Your Address"
                      size="lg"
                      id="form3" 
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="ADMIN">Admin</option>
                      <option value="STUDENT">Student</option>
                      <option value="COMPANY">Company</option>
                      <option value="PLACEMENT OFFICER">Placement Officer</option>
                      <option value="HOD">HOD</option>
                    </select>
                    {formErrors.role && <div className="text-danger">{formErrors.role}</div>}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                {submitted && (
                  <div className="text-success">Successfully registered!</div>
                )}
                <MDBBtn className="my-4" size="lg" type="submit">
                  Submit
                </MDBBtn>
                <MDBBtn className="my-4 mx-4" size="lg" type="reset" onClick={handleReset}>
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