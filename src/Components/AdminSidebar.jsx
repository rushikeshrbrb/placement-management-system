

import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CompanyRegister from './companyRegister';
import { useNavigate } from 'react-router';
import StudentRegister from './studentRegister';
import UpdateP from './UpdateP';

export default function AdminSidebar() {
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
    navigate('/');
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };


  return (
    <Container fluid >
      <Row>
        <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px`, padding:`5px`, margin:`70px 0px` }}>
          <div > <center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active" >Admin: admin</a>
            <a onClick={() => handleButtonClick('adminprofile')} >Profile</a>
            <a onClick={() => handleButtonClick('Registerstudent')} >Register Student</a>
            <a onClick={() => handleButtonClick('RegisterCompany')} >Register Company</a>
            <a onClick={() => handleButtonClick('managestudent')} >Manage student</a>
            <a onClick={() => handleButtonClick('managecompany')} >Manage company</a>
            <a onClick={() => handleButtonClick('placedstudent')} >Placed Student</a>
            <a onClick={() => handleButtonClick('Reports')} >Reports</a>
            <a onClick={() => handleButtonClick('changepassword')} >change password</a>
            <a onClick={handleLogout}>Logout</a>
            <a onClick={handleLogout}>Logout</a>

          </center>

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${ContentWidth}px` , padding:`20px`}}>
          {currentPage === 'studentRegister' && <StudentRegister/>}
           {/* profile component to be write here */}

          {currentPage === 'Registerstudent' && <StudentRegister/>}

          {currentPage === 'RegisterCompany' && <CompanyRegister />}

          {/* managestudent component to be write here */}
          {currentPage === 'managestudent' && <CompanyRegister />}

          {/* managecompany component to be write here */}
          {currentPage === 'managecompany' && <CompanyRegister />}

          {/* Reports component to be write here */}
          {currentPage === 'Reports' && <CompanyRegister />}

          {currentPage === 'changepassword' && <UpdateP/>}

        </Col>
      </Row>
    </Container>
  );
}
