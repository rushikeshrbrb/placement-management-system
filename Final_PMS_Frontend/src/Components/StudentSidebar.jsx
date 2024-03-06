import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import StudentInfo from './StudentInfo';
import StudentRegister from './studentRegister';
import CompanyRegister from './companyRegister';
import UpdateP from './UpdateP';
import JobList from './ShowJob';
import { StudentProfileDisplay } from './StudentProfileDisplay';
import Preparation from './Preparation';
import { logout } from '../Services/TokenUtils';
import StudentEducationDetails from './StudentEducationDetails';
import StudentEduDetailbyid from './StudentEduDetailbyid';

export default function StudentSidebar() {

  useEffect(() => {

    function SidebarCollapse() {

    }
  }, []);
  const sidebarWidth = 250; // Set your desired sidebar width
  const ContentWidth = 1450; 

  const [currentPage, setCurrentPage] = useState(null);

  const navigate = useNavigate();
  const handleLogout = () => {
    //logout(); -->  utils
    logout();
    navigate('/');
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid >
      <Row>
        <Col xs={3} className="sidebar sticky-top  " style={{ width: `${sidebarWidth}px` , padding:`5px`, margin:`70px 0px ` }}>
          <div ><center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active" >Stduent</a>
            </center>
            <div style={{margin:`0px 15px `}}>
            <a onClick={() => handleButtonClick('Profile')} >Profile</a>
            <a onClick={() => handleButtonClick('updateprofile')} >Update Profile</a>
            <a onClick={() => handleButtonClick('updatemarks')} >Update Marks</a>
            {/* <a onClick={() => handleButtonClick('edudetails')} >Education Details</a> */}
            <a onClick={() => handleButtonClick('Preparation')} >Preparation</a>
            <a onClick={() => handleButtonClick('Applyforjob')} >Apply for job</a>
            {/* <a onClick={() => handleButtonClick('Appliedjob')} >Applied job</a> */}
            <a onClick={() => handleButtonClick('Changepassword')} >Change password</a>
            <a onClick={handleLogout}>Logout</a>
            </div>

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${ContentWidth}px`, padding:`20px`, margin:`30px 250px`}}>

          {currentPage === 'Profile' && <StudentProfileDisplay/>}  

          {currentPage === 'updateprofile' && <StudentRegister/>}

          {currentPage === 'Preparation' && <Preparation></Preparation>}

          {currentPage === 'updatemarks' && <StudentInfo/>}
{/* 
          {currentPage === 'edudetails' && <StudentEduDetailbyid/>} */}

          {currentPage === 'Applyforjob' && <JobList/>}

          {/* {currentPage === 'Appliedjob' && <JobList/>} */}

          {currentPage === 'Changepassword' && <UpdateP/>}

        </Col>
      </Row>
    </Container>

  );
}