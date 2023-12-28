import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Contact() {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="divider d-flex align-items-center my-4">
            <h1 className="text-center fw-bold mx-3 mb-0">Contact Us</h1>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Enter Name"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form4Example3"
            rows={8}
            label="Message"
            size="lg"
          />

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="mb-0 px-5" size="lg">
              Submit
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
