import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import './contact.css';

function Prac() {
  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="12">
            <h2 className="text-center p-3 " id="head">Contact Us</h2>
            <p className="text-center">We're always happy to hear from you.</p>
            <MDBInput type="text" label="Name" name="name" />
            <MDBInput
              type="email"
              label="Email"
              className="mt-3"
              name="email"
            />
            <MDBInput
              type="textarea"
              label="Message"
              className="mt-3"
              name="message"
            />
            <MDBBtn color="primary" className="mt-3">
              Submit
            </MDBBtn>
            <div className="mt-3 bg-success p-5 par">
              Connect with Us! Have questions, suggestions, or just want to say
              hello? We'd love to hear from you! Use the form above to drop us a
              message, and our team will get back to you as soon as possible.
              Your feedback is important to us, and we are here to assist you in
              any way we can. Thank you for reaching out!
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Prac;
