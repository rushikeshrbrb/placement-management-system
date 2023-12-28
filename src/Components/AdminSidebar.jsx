

import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { StudentRegister } from './studentRegister';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { CompanyRegister } from './companyRegister';
import { useNavigate } from 'react-router';

export function AdminSidebar() {
  useEffect(() => {

    function SidebarCollapse() {

    }
  }, []);
  const sidebarWidth = 250; // Set your desired sidebar width
  const sidebarWidth2 = 1470; 

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
        <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px` }}>
          <div > <br /><br /><hr /><center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active" >Admin: admin</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Profile</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Student Register</a>
            <a onClick={() => handleButtonClick('companyRegister')} >Company Register</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Manage student</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Manage company</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Placed Student</a>
            <a onClick={() => handleButtonClick('studentRegister')} >Reports</a>
            <a onClick={() => handleButtonClick('studentRegister')} >change password</a>
            <a onClick={handleLogout}>Logout</a>

          </center>

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${sidebarWidth2}px` }}>
          {currentPage === 'studentRegister' && <StudentRegister />}
          {currentPage === 'companyRegister' && <CompanyRegister />}
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
