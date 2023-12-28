import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../Styles/login.css';
import '@mdi/font/css/materialdesignicons.min.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setUserType(value);
  };

  const isEmailValid = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isEmailValid()) {
      alert('Invalid email address');
      return;
    }

    if (!isPasswordValid()) {
      alert('Invalid password. It must be at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    if (!userType) {
      alert('Please select a user type');
      return;
    }

    // Continue with your form submission logic
    console.log('Form submitted:', { email, password, userType });
    setEmail('');
    setPassword('');
    setUserType('');

    if (userType === 'ADMIN') {
      navigate('/AddNewJob');
    } else if (userType === 'STUDENT') {
      navigate('/UpdateCompanyDetail');
    } else if (userType === 'COMPANY') {
      navigate('/company-dashboard');
    }
  

  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Welcome To CDAC Mumbai Placement Cell </h4>
            </div>
            <p>Please login to your account</p>

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              <label htmlFor="userType" className="form-label mb-2">
                User Type
              </label>
              <select
                className="form-select mb-4"
                id="userType"
                value={userType}
                onChange={handleUserTypeChange}
                required
              >
                <option value="" disabled>Select User Type</option>
                <option value="ADMIN">Admin</option>
                <option value="STUDENT">Student</option>
                <option value="COMPANY">Company</option>
              </select>

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className="mx-2" color="danger">
                Danger
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
