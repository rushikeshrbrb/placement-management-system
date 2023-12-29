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
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";

export default function StudentInfo() {
  const [formData, setFormData] = useState({
    name: "",
    tenthPassYear: "",
    tenthPercentage: "",
    twelfthPassYear: "",
    twelfthPercentage: "",
    graduationYear: "",
    graduationPercentage: "",
    graduationCGPA: "",
    resume: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    tenthPassYear: "",
    tenthPercentage: "",
    twelfthPassYear: "",
    twelfthPercentage: "",
    graduationYear: "",
    graduationPercentage: "",
    graduationCGPA: "",
    resume: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    let newValue = value;

    console.log(name+" "+value);

  
    if (name === "tenthPassYear" || name === "twelfthPassYear" || name === "graduationYear") {
      // Allow only 4-digit years with digits
      newValue = /^\d{0,4}$/.test(value) ? value.slice(0, 4) : "";
    } else if (
      name === "tenthPercentage" ||
      name === "twelfthPercentage" ||
      name === "graduationPercentage"
    ) {
      // Allow percentage in decimal between 0 and 100, with optional dot
      const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      const floatValue = parseFloat(value);
      newValue = floatValue >= 0 && floatValue <= 100 ? value : "";
    } else {
      newValue = "";
    }
    } else if (name === "graduationCGPA") {
      newValue = /^[0-9]*(\.[0-9]{0,2})?$/.test(value) && parseFloat(value) <= 10 ? value : formData[name];
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    
    console.log("Form Submitted:", formData);

    setShowAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    const newErrors = {};

    if (!formData.tenthPassYear) {
      newErrors.tenthPassYear = "10th Pass Year is required";
    }

    if (!formData.tenthPercentage) {
      newErrors.tenthPercentage = "10th Percentage is required";
    }

    if (!formData.twelfthPassYear) {
      newErrors.twelfthPassYear = "12th Pass Year is required";
    }

    if (!formData.twelfthPercentage) {
      newErrors.twelfthPercentage = "12th Percentage is required";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Graduation Pass Year is required";
    }

    if (!formData.graduationCGPA) {
      newErrors.graduationCGPA = "Graduation Percentage is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setFormErrors(newErrors);



    if (Object.keys(newErrors).length === 0) {
      
      setShowAlert(true);

      // Clear the success message after 3 seconds (adjust the duration as needed)
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      // Reset form and errors after submitting
      setFormData({
        
        tenthPassYear: "",
        tenthPercentage: "",
        twelfthPassYear: "",
        twelfthPercentage: "",
        graduationYear: "",
        graduationPercentage: "",
        graduationCGPA: "",
        resume: "",
      });

      setFormErrors({
        
        tenthPassYear: "",
        tenthPercentage: "",
        twelfthPassYear: "",
        twelfthPercentage: "",
        graduationYear: "",
        graduationPercentage: "",
        graduationCGPA: "",
        resume: "",
      });

      

      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      tenthPassYear: "",
      tenthPercentage: "",
      twelfthPassYear: "",
      twelfthPercentage: "",
      graduationYear: "",
      graduationPercentage: "",
      graduationCGPA: "",
      resume: "",
    });

    setFormErrors({
      name: "",
      tenthPassYear: "",
      tenthPercentage: "",
      twelfthPassYear: "",
      twelfthPercentage: "",
      graduationYear: "",
      graduationPercentage: "",
      graduationCGPA: "",
      resume: "",
    });

    setIsSubmitted(false);
  };

  return (
    <MDBContainer fluid className="StudentRegister">
      <Form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-black mb-4 text-center fw-bolder">
              Upload Student Info
            </h1>

                         <MDBCard>
               <MDBCardBody className="px-4">
                 <MDBRow className="align-items-center pt-4 pb-3">
                   <MDBCol md="3" className="ps-5">
                     <h6 className="mb-0">10th Pass Year</h6>
                   </MDBCol>
                   <MDBCol md="9" className="pe-5">
                     <MDBInput
                      label="Enter Your 10th Pass Year"
                      size="lg"
                      type="text"
                      name="tenthPassYear"
                      value={formData.tenthPassYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.tenthPassYear && (
                      <div className="text-danger">
                        {formErrors.tenthPassYear}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">10th Percentage</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your 10th Percentage"
                      size="lg"
                      type="text"
                      name="tenthPercentage"
                      value={formData.tenthPercentage}
                      onChange={handleInputChange}
                    />
                    {formErrors.tenthPercentage && (
                      <div className="text-danger">
                        {formErrors.tenthPercentage}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">12th Pass Year</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your 12th Pass Year"
                      size="lg"
                      type="text"
                      name="twelfthPassYear"
                      value={formData.twelfthPassYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.twelfthPassYear && (
                      <div className="text-danger">
                        {formErrors.twelfthPassYear}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">12th Percentage</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your 12th Percentage"
                      size="lg"
                      type="text"
                      name="twelfthPercentage"
                      value={formData.twelfthPercentage}
                      onChange={handleInputChange}
                    />
                    {formErrors.twelfthPercentage && (
                      <div className="text-danger">
                        {formErrors.twelfthPercentage}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Graduation Year</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your Graduation Year"
                      size="lg"
                      type="text"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.graduationYear && (
                      <div className="text-danger">
                        {formErrors.graduationYear}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Graduation CGPA</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your Graduation CGPA"
                      size="lg"
                      type="text"
                      name="graduationCGPA"
                      value={formData.graduationCGPA}
                      onChange={handleInputChange}
                    />
                    {formErrors.graduationCGPA && (
                      <div className="text-danger">
                        {formErrors.graduationCGPA}
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Upload Resume</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label=""
                      size="lg"
                      type="file"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                    />
                    {formErrors.resume && (
                      <div className="text-danger">{formErrors.resume}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                {showAlert && (
                  <div className="alert alert-success mb-3">Data uploaded successfully!</div>
                )}

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