import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "../Styles/AddNewJob.css";
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
import { getPlacementOfficerByUserId, updatePlacementOfficer } from "../../Services/services";



export function UpdatePofficer() {

  const {userId} = useParams();

console.log("Param value", userId);

const [formData, setFormData] = useState({
    name: "",
    designation: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await getPlacementOfficerByUserId(userId, formData);
      console.log(result);
      setTimeout(() => {
        alert(" Details Updated");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const populateadminState = async () => {
    try {
      if (!userId) {
        console.error('User ID is undefined or null.');
        return; // Do not proceed with the request if userId is undefined or null
      }
  
      const result = await getPlacementOfficerByUserId(userId);
  
      if (result) {
        console.log(result);
        setFormData(result);
      } else {
        console.error('Failed to fetch admin data.');
      }
    } catch (error) {
      console.error('Error fetching admin:', error);
    }
  };
  


  useEffect(() => {
    populateadminState();
  },[]);

  return (
    <MDBContainer fluid className="ADcontainer">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 className="text-black mb-4 text-center fw-bolder">Update admin Details</h1>
          <MDBCard>
            <MDBCardBody className="px-4">
              <form onSubmit={handleSubmit}>
                Name
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Name</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="name"
                      size="lg"
                      id="form1"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Designation</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="designation"
                      size="lg"
                      id="form2"
                      type="text"
                      name="designation"
                      value={formData.designation}
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