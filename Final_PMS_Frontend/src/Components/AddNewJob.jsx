import React, { useState,useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { saveJob } from '../Services/services';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useParams } from 'react-router-dom';
import { findcompany } from '../Services/services';

export function AddNewJob() {
    // const [companyID,setCompanyID]=useState(null)
  const [formData, setFormData] = useState({

    designation: "",
    experience: "",
    specialization: "",
    marks12: "",
    marks10: "",
    graduation_percent: "",
    CTC: "",
    status:"Open",
    description: "",
    companyId: ""
    
    
    
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userId } = useParams();
  //const {companyID,setCompanyID}=useState({

  
  console.log(userId)

  const [validationErrors, setValidationErrors] = useState({
    marks12: "",
    marks10: "",
    graduation_percent: "",
    CTC: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });

  };


  const validateMarks = (value, fieldName) => {
    if (!/^\d+(\.\d{1,2})?$/.test(value) || value < 0 || value > 100) {
      return `Invalid ${fieldName}. Please enter a number between 0 and 100.`;
    }
    return "";
  };


  const validateCTC = (value) => {
    if (isNaN(value) || value < 0 || value > 9999999.99) {
      return "Invalid CTC. Please enter a number between 0 and 999.99.";
    }
    return "";
  };

  
  useEffect(() => {  async function populateUserState() {
    try {
      const data =  await findcompany(userId);
       console.log(data);

      console.log(data.companyId);
      //  setCompanyID(data?.companyId);
      // console.log(companyID);
      
    setFormData({
      ...formData,
      companyId:data?.companyId,
      
    });
      // console.log(companyID);

      // if (data.company && data.company.companyId) {
       
      //   console.log(data.company.companyId);
      //   console.log('Data fetched from the database successfully');
      //   // ... other code
      // } else {
      //   console.error('Company data or companyId is undefined.');
      // }

      // console.log('Data fetched from the database successfully');

      // setUserDetails(data);

      // console.log(userDetails);

      console.log('Data fetched from the database successfully');
    } catch (error) {
      console.log(error);
    }
  }
  populateUserState();
}, [userId]);



  const handleSubmit = (e) => {
    e.preventDefault();


    //updatee===================================================

    const {
      designation,
      experience,
      specialization,
      marks12,
      marks10,
      graduation_percent,
      CTC,
      description,
    } = formData;

    if (
      !designation ||
      !experience ||
      !specialization ||
      !marks12 ||
      !marks10 ||
      !graduation_percent ||
      !CTC ||
      !description
    ) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
      return;
    }

   
    const marks12Error = validateMarks(formData.marks12, "12th Percentage");
    const marks10Error = validateMarks(formData.marks10, "10th Percentage");
    const graduationError = validateMarks(
      formData.graduation_percent,
      "Graduation Percentage"
    );
    const ctcError = validateCTC(formData.CTC);

    if (marks12Error || marks10Error || graduationError || ctcError) {
      
      setValidationErrors({
        marks12: marks12Error,
        marks10: marks10Error,
        graduation_percent: graduationError,
        CTC: ctcError,
      });
      setErrorMessage("Validation failed. Please check your input values.");
      setSuccessMessage("");
      return;
    }

    // If all validations pass
   
    // setSuccessMessage("Job created successfully!");
    // setErrorMessage("");

      
     
    
   
    console.log(formData);

    // setFormData({
    //   ...formData,
    //   companyId: companyID,
      
    // });
    // console.log("Formdata",formData);
    saveJob(formData);
    console.log("Formdata",formData);
  

  setSuccessMessage("Job created successfully!");
  setErrorMessage("");

// console.log(userDetails); 
setFormData({
  designation: "",
  experience: "",
  specialization: "",
  marks12: "",
  marks10: "",
  graduation_percent: "",
  CTC: "",
  description: "",
});
};

  

  return (
    // <MDBContainer fluid className="ADcontainer" style={{ backgroundColor: "white" }}>
    <MDBContainer fluid className="ADcontainer" style={{ backgroundColor: "white" }}>
      <form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 class="text-black mb-4">Create A New Job</h1>

            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Designation</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Designation"
                      size="lg"
                      id="form1"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Experience</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Experience"
                    size="lg"
                    id="form2"
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                   
                  />
                </MDBCol>
              </MDBRow>


              
              <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Experience</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Experience"
                    size="lg"
                    // id="form2"
                    type="text"
                    name="companyId"
                    value={formData.companyId}
                    onChange={handleChange}
                    disabled
                   
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea
                    label="Job Description"
                    id="textAreaExample"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Speciallization</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="Enter specialization needed"
                    size="lg"
                    id="form2"
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">12th Percentage(Lower criteria)</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="12 marks"
                    size="lg"
                    id="form2"
                    type="number"
                    name="marks12"
                    value={formData.marks12}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">10th Percentage(Lower criteria)</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label=" 10th marks"
                    size="lg"
                    id="form2"
                    type="number"
                    name="marks10"
                    value={formData.marks10}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">
                    Graduation Percentage(Lower criteria)
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label=" Graduation Percentage "
                    size="lg"
                    id="form2"
                    type="number"
                    name="graduation_percent"
                    value={formData.graduation_percent}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Salary Package ( CTC )</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label=" Enter CTC"
                    size="lg"
                    id="form2"
                    type="number"
                    name="CTC"
                    value={formData.CTC}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

                

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3"></MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <p className="text-danger">{validationErrors.marks12}</p>
                    <p className="text-danger">{validationErrors.marks10}</p>
                    <p className="text-danger">
                      {validationErrors.graduation_percent}
                    </p>
                    <p className="text-danger">{validationErrors.CTC}</p>
                  </MDBCol>
                </MDBRow>

                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}

                <MDBBtn className="my-4" size="lg" type="submit">
                  Submit
                </MDBBtn>
                <MDBBtn className="my-4" size="lg" type="reset">
                  Reset
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}
