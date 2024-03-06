// import React from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";

// export default function UpdateP() {
//   return (
//     <MDBContainer fluid className="p-3 my-5 h-custom">
//       <MDBRow>
//         <MDBCol col="10" md="6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//             class="img-fluid"
//             alt="Sample image"
//           />
//         </MDBCol>

//         <MDBCol col="4" md="6">
//           <div className="divider d-flex align-items-center my-4">
//             <h1 className="text-center fw-bold mx-3 mb-0">Update Password</h1>
//           </div>

          
//           <MDBInput
//             wrapperClass="mb-4"
//             label="Email address"
//             id="formControlLg"
//             type="email"
//             size="lg"
//           />
//            <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />
//            <MDBInput className='mb-4' type='password' id='form2Example2' label='Re-enter Password' />

//           <div className="text-center text-md-start mt-4 pt-2">
//             <MDBBtn className="mb-0 px-5" size="lg">
//               Submit
//             </MDBBtn>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export default function UpdateP() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State for tracking password matching

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });

    // Check if passwords match
    if (name === "confirmPassword" && formData.password !== value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setFormErrors({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!formData.email || !formData.email.includes("@")) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
      isValid = false;
    }
    if (!formData.password || formData.password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long.",
      }));
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
      setPasswordsMatch(false); // Update passwords matching status
      isValid = false;
    }
    return isValid;
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
            <h1 className="text-center fw-bold mx-3 mb-0">Update Password</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="email"
              type="email"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
            />

            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              size="lg"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={formErrors.password}
            />

            <MDBInput
              wrapperClass="mb-4"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              size="lg"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={formErrors.confirmPassword}
            />

            {/* Display message if passwords do not match */}
            {!passwordsMatch && (
              <div className="text-danger mb-3">Passwords do not match.</div>
            )}

            {/* Success message */}
            {submitted && (
              <div className="alert alert-success" role="alert">
                Form submitted successfully!
              </div>
            )}

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



