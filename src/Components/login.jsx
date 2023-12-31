import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../Styles/login.css';
import '@mdi/font/css/materialdesignicons.min.css';
import cdaclogo from '../Images/C-DAC.jpg'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

export default function Login() {
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

  const handleSubmit = async (event) => {
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

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password,
      });
        console.log(response.data);
      // role base login condition
      if (response.data.status === true) {
        // Redirect based on user type
        if (response.data.role === 'ADMIN') {
          navigate('/a_sidebar');
        } else if (response.data.role === 'STUDENT') {
          navigate('/s_sidebar');
        } else if (response.data.role === 'COMPANY') {
          navigate('/c_sidebar');
        } else {
          alert('Unknown user type');
        }

        // Optionally, you can store user data in the state or context for further use
      } else {
        // Handle login error, e.g., incorrect credentials
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-3 ">
          <div className="d-flex flex-column mb-5">
            <div className="text-center"><br />
              <img
                src="https://www.exemplar.co.in/images/temp-staffing.jpg"
                style={{ width: '200px', height: '150px' }}
                alt="logo"
              />
              <h3 className="mt-1 mb-5 pb-1">Welcome To Traning & Placement Cell <br /> CDAC Mumbai  </h3>

            </div>
            <form onSubmit={handleSubmit} className="digital-form">
              <center><b style={{color:"violet"}}>Please login to your account</b></center><hr />
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
                <MDBBtn type="submit" className="mb-2 w-100 digital-btn">
                  Sign in
                </MDBBtn><br />
<hr />
                <a className="text-muted" href="/forgetpassword" >
                  <p style={{color:'red'}}>Forgot password?</p>
                </a>
                <p className="mb-0" style={{color:'blue'}}>Don't have an account?
                <a href="/contact"> <MDBBtn outline className="mx-2" color="danger">
                  Contact Admin
                </MDBBtn></a></p>
              </div>
            </form>
          </div>
        </MDBCol>

        <MDBCol
  col="6"
  className="mb-5 mx-4 digital-col"
  style={{
    backgroundImage: 'url("https://d25ecq9zgd9hts.cloudfront.net/img/2018/01/graduation.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }}
>
  <div className="d-flex flex-column justify-content-center gradient-custom-1 h-50 mb-4">
    <div className="text-white px-3 py-4 p-md-3 mx-md-4">
    <br /><br /><br /><br /><br /><br />
    <center> <img src={cdaclogo} alt="" height='100px' width='115px' id="no-background"/></center>
   
      <marquee behavior="scroll" direction="left"><center>
        <b style={{ color: 'yellow', fontSize: 'larger' }}>
         
            Commom Campus Placement Program March-2024 <br /> Sep-2023 Batch
        </b></center>
      </marquee>
      <br /><br /><br /> <br /><h4 className="mb-4">We are more than just a company</h4>
      <hr />
      <p>A Campus Recruitment Training Program is designed to prepare students for the recruitment process conducted by 
        various companies during campus placements. Providing clear and concise information will help potential participants understand the value of the Campus Recruitment Training Program. </p>
<p><b>Opportunities don't happen, you create them..!</b></p>
    </div>
  </div>
</MDBCol>

      </MDBRow>
      <div className="d-flex flex-column justify-content-center gradient-custom-3 h-100 mb-4">
        <div className="text-white px-3 py-4 p-md-5 mx-md-4"><h2><br /><br /><br /><br /><br /><br /><br /><br />
        “It's never too late to learn . . . and it's never too early either.” “If you study to remember, you will forget. If you study to understand, you will remember.” “People can take away a lot of things from you . . . but they can't take away what you've learned.”
Never stop fighting until you arrive at your destined place - that is, the unique you. ...!
 
        </h2>
       </div>
      </div>
    </MDBContainer>
  );
}
