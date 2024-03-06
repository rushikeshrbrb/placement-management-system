

import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CompanyRegister from './companyRegister';
import { useNavigate } from 'react-router';
// import StudentRegister from './StudentRegister';
import UpdateP from './UpdateP';
import Registration from './Registration';
import StudentEducationDetails from './StudentEducationDetails';
import AdminDetailsTable from './AdminProfile';
import { UpdateAdmin } from './UpdateAdmin';
import ContactDetails from './ContactDetails';
import UserListByRole from './AllUser';
import CompanyDetails from './CompanyDetails';
import { PlacedStudentStatus } from './PlacedSatus/PlacedStudentStatus';
import ShowSpecficUsers from './ShowSpecificUsers';
import StudentTable from './Student/StudentInfoSpecific';
import CompanyTable from './Company/CompanyList';
import HODDetails from './HOD/HodProfile';
import { UpdateHod } from './HOD/UpdateHodProfile';

export default function HodSidebar() {
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
            <a class="active" >Head</a>
            <a onClick={() => handleButtonClick('hodprofile')} >Profile</a>

            <a onClick={() => handleButtonClick('updateHod')} >update Profile</a>

            <a onClick={() => handleButtonClick('selectedStudent')} >Place Students</a>

            {/* <a onClick={() => handleButtonClick('managestudent')} >Manage student</a> */}

            {/* <a onClick={() => handleButtonClick('managecompany')} >Manage company</a> */}

            <a onClick={() => handleButtonClick('placedstudent')} >Rejected Students</a>

            <a onClick={() => handleButtonClick('users')} >Show Student</a>

            {/* <a onClick={() => handleButtonClick('contactusdetail')} >Contact us Details</a> */}

            <a onClick={() => handleButtonClick('allCompany')} >Show Company</a>

            <a onClick={handleLogout}>Logout</a>

            <a onClick={handleLogout}>Logout</a>


          </center>

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${ContentWidth}px` , padding:`20px`,margin:`30px 250px`}}>
          {currentPage === 'hodprofile' && <HODDetails/>}

          {currentPage === 'updateHod' && <UpdateHod/>}

          {currentPage === 'selectedStudent' && <PlacedStudentStatus></PlacedStudentStatus>}   
          {/* to register for student admin company */}

          {currentPage === 'managestudent' && <StudentEducationDetails/>}

          
          {currentPage === 'allCompany' && <CompanyTable/>}

          {currentPage === 'users' &&  <StudentTable></StudentTable>}

          {/* Reports component to be write here */}
          {currentPage === 'contactusdetail' && <ContactDetails />}

          {currentPage === 'changepassword' && <UpdateP/>}

        </Col>
      </Row>
    </Container>
  );
}
