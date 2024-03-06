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
    class10PassingYear: "",
   class10Percentage: "",
    class12PassingYear: "",
   class12Percentage: "",
    graduationCompletionYear: "",
    graduationPercentage: "",
    resume: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    class10PassingYear: "",
   class10Percentage: "",
    class12PassingYear: "",
   class12Percentage: "",
    graduationCompletionYear: "",
    graduationPercentage: "",
    graduationPercentage: "",
    resume: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    
    
    let newValue = value;

    console.log(name+" "+value);

  
    if (name === "class10PassingYear" || name === "class12PassingYear" || name === "graduationCompletionYear") {
      // Allow only 4-digit years with digits
      newValue = /^\d{0,4}$/.test(value) ? value.slice(0, 4) : "";
    } else if (
      name === "class10Percentage" ||
      name === "class12Percentage" ||
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
    } else if (name === "graduationPercentage") {
      newValue = /^[0-9]*(\.[0-9]{0,2})?$/.test(value) && parseFloat(value) <= 10 ? value : formData[name];
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
    
    
    console.log("Form Submitted:", formData);

    setShowAlert(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    const newErrors = {};

    if (!formData.class10PassingYear) {
      newErrors.class10PassingYear = "10th Pass Year is required";
    }

    if (!formData.class10Percentage) {
      newErrors.class10Percentage = "10th Percentage is required";
    }

    if (!formData.class12PassingYear) {
      newErrors.class12PassingYear = "12th Pass Year is required";
    }

    if (!formData.class12Percentage) {
      newErrors.class12Percentage = "12th Percentage is required";
    }

    if (!formData.graduationCompletionYear) {
      newErrors.graduationCompletionYear = "Graduation Pass Year is required";
    }

    if (!formData.graduationPercentage) {
      newErrors.graduationPercentage = "Graduation Percentage is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setFormErrors(newErrors);



    if (Object.keys(newErrors).length === 0) {
      
      try {
        const response = await fetch('http://localhost:8080/registerStudentEducation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setShowAlert(true);
          console.log("SUCCESS");
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);

          // Reset form and errors after submitting
          setFormData({
            name: "",
            class10PassingYear: "",
           class10Percentage: "",
            class12PassingYear: "",
            class12Percentage: "",
            graduationCompletionYear: "",
            graduationPercentage: "",
            graduationPercentage: "",
            resume: "",
          });

          setFormErrors({
            name: "",
            class10PassingYear: "",
           class10Percentage: "",
            class12PassingYear: "",
            class12Percentage: "",
            graduationCompletionYear: "",
            graduationPercentage: "",
            graduationPercentage: "",
            resume: "",
          });

          setIsSubmitted(true);
        } else {
          console.error('Failed to submit student education details');
        }
      } catch (error) {
        console.error('Error submitting student education details', error);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      class10PassingYear: "",
     class10Percentage: "",
      class12PassingYear: "",
      class12Percentage: "",
      graduationCompletionYear: "",
      graduationPercentage: "",
      graduationPercentage: "",
      resume: "",
    });

    setFormErrors({
      name: "",
      class10PassingYear: "",
     class10Percentage: "",
    class12PassingYear: "",
      class12Percentage: "",
      graduationCompletionYear: "",
      graduationPercentage: "",
      graduationPercentage: "",
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
                      name="class10PassingYear"
                      value={formData.class10PassingYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.class10PassingYear && (
                      <div className="text-danger">
                        {formErrors.class10PassingYear}
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
                      name="class10Percentage"
                      value={formData.class10Percentage}
                      onChange={handleInputChange}
                    />
                    {formErrors.tenthPercentage && (
                      <div className="text-danger">
                        {formErrors.class10Percentage}
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
                      name="class12PassingYear"
                      value={formData.class12PassingYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.class12PassingYear && (
                      <div className="text-danger">
                        {formErrors.class12PassingYear}
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
                      name="class12Percentage"
                      value={formData.class12Percentage}
                      onChange={handleInputChange}
                    />
                    {formErrors.class12Percentage && (
                      <div className="text-danger">
                        {formErrors.class12Percentage}
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
                      name="graduationCompletionYear"
                      value={formData.graduationCompletionYear}
                      onChange={handleInputChange}
                    />
                    {formErrors.graduationCompletionYear && (
                      <div className="text-danger">
                        {formErrors.graduationCompletionYear}
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
                      name="graduationPercentage"
                      value={formData.graduationPercentage}
                      onChange={handleInputChange}
                    />
                    {formErrors.graduationPercentage && (
                      <div className="text-danger">
                        {formErrors.graduationPercentage}
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