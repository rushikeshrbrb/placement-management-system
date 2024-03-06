import React, { useState, useEffect } from "react";
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

import { useParams } from "react-router-dom";

import { findcompany, updatecompany } from "../Services/services";

export function UpdateCompanyProfile() {

  const {userId} = useParams();

console.log("Param value", userId);

  const [formData, setFormData] = useState({
                                        companyName: "",
                                        email: "",
                                        website: "",
                                        phone: "",
                                        city: "",
                                      });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await updatecompany(userId, formData);
      console.log("updated value: ", result);
      setTimeout(() => {
        alert("Company Details Updated");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const populateuserState = async () => {
    try {
      const result = await findcompany(userId);
      console.log(result);
      setFormData(result);
    } catch (error) {
      
      console.log(error);
    }
  };

  useEffect(() => {
    populateuserState();
  },[]);

  return (
    <MDBContainer fluid className="ADcontainer"  style={{ backgroundColor: "white" }}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 className="text-black mb-4 text-center fw-bolder">Update Company Details</h1>
          <MDBCard>
            <MDBCardBody className="px-4">
              <form onSubmit={handleSubmit}>
                 Company Name 
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
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

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
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

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
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

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
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Phone</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Phone"
                      size="lg"
                      id="form2"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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