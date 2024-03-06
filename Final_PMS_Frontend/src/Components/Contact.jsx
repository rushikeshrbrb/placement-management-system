import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/registercontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful submission, you can handle it accordingly
        console.log("Contact form submitted successfully");
        alert("Contacted successfully")
      } else {
        // Handle error cases
        console.error("Failed to submit contact form");
        alert("Somthing went wrong .........")
      }
    } catch (error) {
      console.error("Error submitting contact form", error);
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="divider d-flex align-items-center my-4">
          <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/ringing-phone.png" alt="ringing-phone"/>
            <h1 className="text-center fw-bold mx-3 mb-0">Contact Us</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Enter Name"
              id="formControlLg"
              type="text"
              size="lg"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form4Example3"
              rows={8}
              label="Message"
              size="lg"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
