// import React, { useState ,useEffect} from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '../Styles/login.css';
// import '@mdi/font/css/materialdesignicons.min.css';
// import cdaclogo from '../Images/C-DAC.jpg'
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from 'mdb-react-ui-kit';
// import ForgetPassword from './ForgetPassword';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const navigate = useNavigate();


//   const handleEmailChange = (event) => {
//     const value = event.target.value;
//     setEmail(value);
//   };

//   const handlePasswordChange = (event) => {
//     const value = event.target.value;
//     setPassword(value);
//   };

//   const handleUserTypeChange = (event) => {
//     const value = event.target.value;
//     setUserType(value);
//   };

//   const isEmailValid = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isPasswordValid = () => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!isEmailValid()) {
//       alert('Invalid email address');
//       return;
//     }

//     if (!isPasswordValid()) {
//       alert('Invalid password. It must be at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit.');
//       return;
//     }

   

//     try {
//       const response = await axios.post('http://localhost:8080/user/login', {
//         email,
//         password,
//       });
//         console.log(response.data);
//       // role base login condition
//       if (response.data.status === true) {
//         // Redirect based on user type
//         if (response.data.role === 'ADMIN') {
//           navigate(`/a_sidebar/${response.data.userId}`);
//         } else if (response.data.role === 'STUDENT') {
//           navigate(`/s_sidebar/${response.data.userId}`);
//         } else if (response.data.role === 'COMPANY') 

//         {
//           navigate(`/c_sidebar/${response.data.userId}`);
//         } else {
//           alert('Unknown user type');
//         }

//         // Optionally, you can store user data in the state or context for further use
//       } else {
//         // Handle login error, e.g., incorrect credentials
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred during login.');
//     }
//   };
//   const navigateto=()=> {
//     navigate('/contact');

//   };

//   const ForgetPwd=()=> {
//     navigate('/forgetpassword');

//   };
//   const [backgroundImage, setBackgroundImage] = useState(
//     'https://tie.usprogramming8.com/articles/3241.jpg'
//   );

//   useEffect(() => {
   
//     const changeBackgroundImage = () => {
     
//       const images = [
//         'https://img.freepik.com/free-photo/human-resources-concept-with-hand_23-2150389097.jpg?w=826&t=st=1703885301~exp=1703885901~hmac=3da47624c3a6954051e3beeff43d1884db6867bc6bea44e999882bf8a018c30b',
//         'https://www.industryglobalnews24.com/images/the-deal-between-telecom-and-corporate-finance.jpeg',
//         'https://schorlarboard.com/wp-content/uploads/2022/07/ge.jpg',
//         'https://d25ecq9zgd9hts.cloudfront.net/img/2018/01/graduation.jpg',
//         'https://techcrunch.com/wp-content/uploads/2019/11/gettyimages-610949074-1.jpg',
//         'https://png.pngtree.com/thumb_back/fh260/background/20221214/pngtree-high-school-graduates-students-diploma-gown-happy-photo-image_42806370.jpg',
//         'https://img.etimg.com/thumb/width-640,height-480,imgsize-87324,resizemode-75,msid-103720911/jobs/fresher/engineering-students-brace-for-a-tough-placement-season/2.jpg',
//       ];

//       const randomImage = images[Math.floor(Math.random() * images.length)];

//       setBackgroundImage(randomImage);
//     };

//     const intervalId = setInterval(changeBackgroundImage, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <MDBContainer className="gradient-form custom-col-margin">
//       <MDBRow>
//         <MDBCol col="6" >
//           <div className="d-flex flex-column mb-4">
//             <div className="text-center"><br />
//               <img
//                 src="https://www.exemplar.co.in/images/temp-staffing.jpg"
//                 style={{ width: '280px', height: '215px' }}
//                 alt="logo"
//               />
             
//             </div>
//             <form onSubmit={handleSubmit} className="digital-form">
//               <center><b style={{color:"violet"}}>Please login to your account</b></center><hr />
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Email address"
//                 id="form1"
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Password"
//                 id="form2"
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />

//               {/* <label htmlFor="userType" className="form-label mb-2">
//                 User Type
//               </label> 
//               <select
//                 className="form-select mb-4"
//                 id="userType"
//                 value={userType}
//                 onChange={handleUserTypeChange}
//                 required
//               >
//                 <option value="" disabled>Select User Type</option>
//                 <option value="ADMIN">Admin</option>
//                 <option value="STUDENT">Student</option>
//                 <option value="COMPANY">Company</option>
//               </select>
// */}
//               <div className="text-center pt-1 mb-5 pb-1">
//                 <MDBBtn type="submit" className="mb-2 w-100 digital-btn">
//                   Sign in
//                 </MDBBtn>
//                   <p style={{color:'red', cursor:'pointer'}} onClick={ForgetPwd}>Forgot password?</p>

//                 <p className="mb-0" style={{color:'blue'}}>Don't have an account?
//                 <MDBBtn outline className="mx-2" color="danger" onClick={navigateto}>
//                   Contact Admin
//                 </MDBBtn></p>
//               </div>
//             </form>
//           </div>
//         </MDBCol>
//   <MDBCol  col="6" className="ms-4 p-2 mx-4 digital-col"
//       style={{
//         backgroundImage: `url("${backgroundImage}")`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top',
//         width: '100%', // Adjust the width if needed
//         height: '600px', // Adjust the height if needed
//       }}>
//          <h3 className="mt-1 mb-5 pb-1 " style={{textAlign:'center', fontWeight:'bolder', backgroundColor:'lightgoldenrodyellow', borderRadius:'10px'}}>Welcome To Traning & Placement Cell <br /> CDAC Mumbai  </h3>

//   <div className="d-flex flex-column justify-content-center gradient-custom-1 h-50 mb-2">

//     <div className="text-white px-2 py-4 p-md-3 mx-md-2">
//    <br /><br />
//     <center> <img src={cdaclogo} alt="" height='106px' width='115px' id="no-background"/></center>
   
//       <marquee behavior="scroll" direction="left"><center>
//         <b style={{ color: 'yellow', fontSize: 'larger' }}>
         
//             Commom Campus Placement Program March-2024 <br /> Sep-2023 Batch
//         </b></center>
//       </marquee>
//       <h4 className="mb-4">We are more than just a company</h4>
//       <hr />
//       <p>A Campus Recruitment Training Program is designed to prepare students for the recruitment process conducted by 
//         various companies during campus placements. Providing clear and concise information will help potential participants understand the value of the Campus Recruitment Training Program. </p>
// <p><b>Opportunities don't happen, you create them..!</b></p>
//     </div>
//   </div>
// </MDBCol>

//       </MDBRow>
//       <div className="d-flex flex-column justify-content-center gradient-custom-3 h-100 mb-4">
//         <div className="text-white px-3 py-4 p-md-5 mx-md-4"><h2><br /><br /><br /><br /><br /><br /><br /><br />
//         “It's never too late to learn . . . and it's never too early either.” “If you study to remember, you will forget. If you study to understand, you will remember.” “People can take away a lot of things from you . . . but they can't take away what you've learned.”
// Never stop fighting until you arrive at your destined place - that is, the unique you. ...!
 
//         </h2>
//        </div>
//       </div>
//     </MDBContainer>
//   );
// }

import React, { useState ,useEffect} from 'react';
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
import ForgetPassword from './ForgetPassword';
import { getToken } from '../Services/TokenUtils';

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

   
    //changed url /user/login
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });
        console.log(response.data);
        console.log(response.data.role);
        console.log(response.data.token);
       console.log(response.data.message)
     
      //  console.log(localStorage.getItem("token"));
      localStorage.setItem("token",(response.data.token));
      //  console.log(typeof(getToken()));
      //  console.log(getToken());
      //  console.log(localStorage.getItem("token"));

        
      // role base login condition
      if (response.data.message ==="successful") {
        // Redirect based on user type
        if (response.data.role === 'ADMIN') {
          navigate(`/a_sidebar/${response.data.userId}`);
        } else if (response.data.role === 'STUDENT') {
          navigate(`/s_sidebar/${response.data.userId}`);
        } else if (response.data.role === 'COMPANY') 

        {
          navigate(`/c_sidebar/${response.data.userId}`);
        } 
        else if (response.data.role === 'PLACEMENT OFFICER') 

        {
          navigate(`/p_sidebar/${response.data.userId}`);
        }

        else if (response.data.role === 'HOD') 

        {
          navigate(`/h_sidebar/${response.data.userId}`);
        }
        
        else {
          alert('Unknown user type');
        }

        // localStorage.setItem("token",(response.data.token));



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
  const navigateto=()=> {
    navigate('/contact');

  };

  const ForgetPwd=()=> {
    navigate('/forgetpassword');

  };
  const [backgroundImage, setBackgroundImage] = useState(
    'https://tie.usprogramming8.com/articles/3241.jpg'
    
  );

  useEffect(() => {
   
    const changeBackgroundImage = () => {
     
      const images = [
        'https://img.freepik.com/free-photo/human-resources-concept-with-hand_23-2150389097.jpg?w=826&t=st=1703885301~exp=1703885901~hmac=3da47624c3a6954051e3beeff43d1884db6867bc6bea44e999882bf8a018c30b',
        
        'https://schorlarboard.com/wp-content/uploads/2022/07/ge.jpg',
        'https://d25ecq9zgd9hts.cloudfront.net/img/2018/01/graduation.jpg',
        'https://techcrunch.com/wp-content/uploads/2019/11/gettyimages-610949074-1.jpg',
        'https://png.pngtree.com/thumb_back/fh260/background/20221214/pngtree-high-school-graduates-students-diploma-gown-happy-photo-image_42806370.jpg',
        'https://img.etimg.com/thumb/width-640,height-480,imgsize-87324,resizemode-75,msid-103720911/jobs/fresher/engineering-students-brace-for-a-tough-placement-season/2.jpg',
      ];

      const randomImage = images[Math.floor(Math.random() * images.length)];

      setBackgroundImage(randomImage);
    };

    const intervalId = setInterval(changeBackgroundImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MDBContainer className="gradient-form custom-col-margin">
      <MDBRow>
        <MDBCol col="6" >
          <div className="d-flex flex-column mb-4">
            <div className="text-center"><br />
              <img
                src="https://www.exemplar.co.in/images/temp-staffing.jpg"
                style={{ width: '280px', height: '215px' }}
                alt="logo"
              />
             
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

              {/* <label htmlFor="userType" className="form-label mb-2">
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
*/}
              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-2 w-100 digital-btn">
                  Sign in
                </MDBBtn>
                  <p style={{color:'red', cursor:'pointer'}} onClick={ForgetPwd}>Forgot password?</p>

                <p className="mb-0" style={{color:'blue'}}>Don't have an account?
                <MDBBtn outline className="mx-2" color="danger" onClick={navigateto}>
                  Contact Admin
                </MDBBtn></p>
              </div>
            </form>
          </div>
        </MDBCol>
        <MDBCol  col="6" className="ms-4 p-2 mx-4 digital-col"
          style={{
            position: 'relative',
            width: '100%', // Adjust the width if needed
            height: '600px', // Adjust the height if needed
          }}>
          <div
            className="background-image"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: 'cover',
              filter: 'blur(2px)',
              zIndex: '-1', // Make sure the background image is behind other content
            }}
          ></div>
           <h3 className="mt-1 mb-5 pb-1 " style={{textAlign:'center', fontWeight:'bolder', backgroundColor:'lightgoldenrodyellow', borderRadius:'10px'}}>Welcome To Traning & Placement Cell <br /> CDAC Mumbai  </h3>

    <div className="d-flex flex-column justify-content-center gradient-custom-1 h-50 mb-2">

      <div className="text-white px-2 py-4 p-md-3 mx-md-2">
     <br /><br />
      <center> <img src={cdaclogo} alt="" height='106px' width='115px' id="no-background"/></center>
     
        <marquee behavior="scroll" direction="left"><center>
          <b style={{ color: 'yellow', fontSize: 'larger'}}>
           
              Commom Campus Placement Program March-2024 <br /> Sep-2023 Batch
          </b></center>
        </marquee>
        <h4 className="mb-4">We are more than just a company</h4>
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

