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
    const [formData, setFormData] = useState({
      companyName: "",
      email: "",
      website: "",
      phone: "",
      city: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Assuming updateuser is an asynchronous function that updates the user data
        const result = await updateuser(formData, params.id);
        console.log(params.id);
        // Assuming setIsSubmitted is a function to set a submitted state
        setIsSubmitted(true);
        setTimeout(() => {
          alert('Company details updated');
        }, 1000);
  
        console.log('Form submitted:', formData);
  
        // Clear the form fields after submission
        setFormData({
          companyName: "",
          email: "",
          website: "",
          phone: "",
          city: "",
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    const populateUserState = async () => {
      try {
        // Assuming findcompany is an asynchronous function that fetches user data
        const result = await findcompany(params.user_id);
        setFormData(result.user);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      populateUserState();
    }, [params.user_id]);
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
                      value={formData.companyName}
                      onChange={handleChange}
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
                      value={formData.city}
                      onChange={handleChange}
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
                      value={formData.website}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phoneRegex}
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
