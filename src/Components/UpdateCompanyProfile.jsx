import React from "react";
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
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";

export function UpdateCompanyProfile() {
  return (
    <MDBContainer fluid className="ADcontainer">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 class="text-black mb-4 text-center fw-bolder">Update Company Details</h1>

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
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Address/City</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput label="city" size="lg" id="form2" type="text" />
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
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Phone </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput label="phone" size="lg" id="form2" type="number" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className="my-4" size="lg">
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
