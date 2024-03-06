import React, { useEffect, useState } from "react";
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
  MDBRadio,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import { fetchStudentByid, updateStudent } from "../Services/services";
import { useParams } from "react-router-dom";

export default function StudentRegister() {
  const { userId } = useParams();
  console.log("yee ree: ", userId);
  const [formData, setFormData] = useState({
    name: "",
    // address: "",
    gender: "",
    dob: "",
    phone: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    // address: "",
    gender: "",
    dob: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    // if (!formData.address) {
    //   newErrors.address = "Address is required";
    // }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.dob) {
      newErrors.dob = "Birth Date is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      updateStudent(formData, userId);
      setFormData({
        name: "",
        // address: "",
        gender: "",
        dob: "",
        phone: "",
      });
      setSuccessMessage("");
    }
    
  };

  const handleReset = () => {
    setFormData({
      name: "",
      // address: "",
      gender: "",
      dob: "",
      phone: "",
    });

    // You can also reset the formErrors if needed
    setFormErrors({
      name: "",
      // address: "",
      gender: "",
      dob: "",
      phone: "",
    });
  };

  const populateuserState = async () => {
    try {
      const result = await fetchStudentByid(userId);
      console.log(result);

      setFormData({
        name: result.name || "",
        // address: result.address || "",
        gender: result.gender || "",
        dob: result.dob || "",
        phone: result.phone || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateuserState();
  }, [userId]); // Include userId in the dependency array

  return (
    <MDBContainer fluid className="StudentRegister">
      <Form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-black mb-4 text-center fw-bolder">
              Student Update Profile
            </h1>

            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Student Name</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Enter Your Name"
                      size="lg"
                      id="form1"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <div className="text-danger">{formErrors.name}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                {/* <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Address</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Your Address"
                      size="lg"
                      id="form2"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {formErrors.address && (
                      <div className="text-danger">{formErrors.address}</div>
                    )}
                  </MDBCol>
                </MDBRow> */}
                <hr className="mx-n3" />

                {/* <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Gender</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBRadio
                      btn
                      btnColor="secondary"
                      id="btn-radio"
                      name="gender"
                      wrapperTag="span"
                      label="Male"
                      onChange={handleInputChange}
                    />
                    <MDBRadio
                      btn
                      btnColor="secondary"
                      id="btn-radio2"
                      name="gender"
                      wrapperClass="mx-2"
                      wrapperTag="span"
                      label="Female"
                      defaultChecked
                      onChange={handleInputChange}
                    />
                    {formErrors.gender && (
                      <div className="text-danger">{formErrors.gender}</div>
                    )}
                  </MDBCol>
                </MDBRow> */}

<MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Gender</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="maleRadio"
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="maleRadio">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="femaleRadio"
                        name="gender"
                        value="Female"
                        defaultChecked
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="femaleRadio">
                        Female
                      </label>
                    </div>
                    {formErrors.gender && (
                      <div className="text-danger">{formErrors.gender}</div>
                    )}
                  </MDBCol>
                  </MDBRow>


                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Birth Date</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <Form.Control
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                    {formErrors.birthDate && (
                      <div className="text-danger">{formErrors.dob}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Phone</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Phone"
                      size="lg"
                      id="form2"
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && (
                      <div className="text-danger">{formErrors.phone}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />
                {successMessage && <p className="text-success">{successMessage}</p>}


                <MDBBtn className="my-4" size="lg" onClick={handleSubmit}>
                  Submit
                </MDBBtn>
                <MDBBtn className="my-4 mx-4" size="lg" onClick={handleReset}>
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