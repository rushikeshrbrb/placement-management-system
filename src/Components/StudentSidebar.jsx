

import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { CompanyRegister } from './companyRegister';
import { useNavigate } from 'react-router';
import { StudentRegister } from './studentRegister';
import StudentInfo from './StudentInfo';

export function StudentSidebar() {

  useEffect(() => {

    function SidebarCollapse() {

    }
  }, []);
  const sidebarWidth = 250; // Set your desired sidebar width
  const ContentWidth = 1700; 

  const [currentPage, setCurrentPage] = useState(null);

  const navigate = useNavigate();
  const handleLogout = () => {
    //logout(); -->  utils
    navigate('/');
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid >
      <Row>
        <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px` , padding:`5px`, margin:`75px 0px`  }}>
          <div ><center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active" >Stduent: Name</a>
            <a onClick={() => handleButtonClick('Profile')} >Profile</a>
            <a onClick={() => handleButtonClick('StudentInfo')} >Edit Profile</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Apply job</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Applied job</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Change password</a>
            <a onClick={handleLogout}>Logout</a>

          </center>

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${ContentWidth}px`, padding:`20px`}}>
          {currentPage === 'Profile' && <StudentRegister />}  
          {/* profile component to be write here */}

          {currentPage === 'StudentInfo' && <StudentInfo/>}
          {currentPage === 'companyRegister' && <CompanyRegister />}
          {currentPage === 'companyRegister' && <CompanyRegister />}
          {currentPage === 'companyRegister' && <CompanyRegister />}
          {currentPage === 'companyRegister' && <CompanyRegister />}
          {currentPage === 'companyRegister' && <CompanyRegister />}

        </Col>
      </Row>
    </Container>

  );
}
