import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CompanyRegister from './companyRegister';
import { useNavigate } from 'react-router';
import StudentRegister from './studentProfile';
import UpdateP from './UpdateP';
import Registration from './Registration';
import StudentEducationDetails from './StudentEducationDetails';
import AdminDetailsTable from './AdminProfile';
import { UpdateAdmin } from './UpdateAdmin';
import ContactDetails from './ContactDetails';
import UserListByRole from './AllUser';
import CompanyDetails from './CompanyDetails';
import { logout } from '../Services/TokenUtils';
import { PlacedStudentStatus } from './PlacedSatus/PlacedStudentStatus';
import StudentList from './Student/StudentList';

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
    logout();
    navigate('/');
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };


  return (
    <Container fluid >
      <Row>
        <Col xs={3} className="sidebar sticky-top  " style={{ width:`${sidebarWidth}px`, padding:`5px`, margin:`70px 0px `}}>
          <div > <center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active" >Admin</a>

            </center>
            <div style={{margin:`0px 15px `}}>
            <a onClick={() => handleButtonClick('adminprofile')} >Profile</a>

            <a onClick={() => handleButtonClick('updateadmin')} >update Profile</a>

            <a onClick={() => handleButtonClick('RegisterUser')} >Register User</a>

            <a onClick={() => handleButtonClick('studentlist')} >Manage student</a>

            <a onClick={() => handleButtonClick('studentedudetails')} >Student Edu. details</a>

            <a onClick={() => handleButtonClick('managecomany')} >Manage company</a>

            <a onClick={() => handleButtonClick('placedstudent')} >Placed Student</a>

            <a onClick={() => handleButtonClick('fetchAlluser')} >Fetch All Users</a>

            <a onClick={() => handleButtonClick('contactusdetail')} >Contact us Details</a>

            <a onClick={() => handleButtonClick('changepassword')} >Change password</a>

            <a onClick={handleLogout}>Logout</a>
           
            </div>
            <br /><br /><br />

          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width:` ${ContentWidth}px` , padding:`20px` ,margin:`30px 250px`}}>
          {currentPage === 'adminprofile' && <AdminDetailsTable/>}

          {currentPage === 'updateadmin' && <UpdateAdmin/>}

          {currentPage === 'RegisterUser' && <Registration/>}   
          {/* to register for student admin company */}

          {currentPage === 'studentlist' && <StudentList/>}

          {currentPage === 'studentedudetails' && <StudentEducationDetails/>}

          {currentPage === 'managecomany' && <CompanyDetails/>}

          {currentPage === 'placedstudent' && <PlacedStudentStatus></PlacedStudentStatus>}

          {currentPage === 'fetchAlluser' && <UserListByRole />}

          {/* Reports component to be write here */}
          {currentPage === 'contactusdetail' && <ContactDetails />}

          {currentPage === 'changepassword' && <UpdateP/>}

        </Col>
      </Row>
    </Container>
  );
}