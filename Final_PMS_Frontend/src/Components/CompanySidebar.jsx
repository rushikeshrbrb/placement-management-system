
import './Sidebar.css';

import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router';
import StudentRegister from './studentRegister';
import CompanyRegister from './companyRegister';
import { AddNewJob } from './AddNewJob';
import UpdateP from './UpdateP';
import { UpdateCompanyProfile } from './UpdateCompanyProfile';
import { CompanyProfile } from './CompanyProfile';
import { ShowSpecificCompanyJobs } from './Jobs/ShowSpecificCompanyJobs';
import { logout } from '../Services/TokenUtils';


export default function CompanySidebar() {
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
        <Col xs={3} className="sidebar sticky-top   " style={{ width: `${sidebarWidth}px`, padding:`5px`, margin:`70px 0px` }}>
          <div > <center>
            <Image height={100} width={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" roundedCircle fluid />
            <a class="active">Company</a>
            </center>
            <div style={{margin:`0px 15px `}}>
            <a onClick={() => handleButtonClick('profile')} >Profile</a>
            <a onClick={() => handleButtonClick('updatecompanydetail')} >Update Details</a>
            <a onClick={() => handleButtonClick('addnewjobpost')} >Add New Job Post</a>
            <a onClick={() => handleButtonClick('ShowSpecificCompanyJobs')} >MyJobs & Check Application</a>
            {/* <a onClick={() => handleButtonClick('checkapplication')} >Check Application</a> */}
            <a onClick={() => handleButtonClick('updatepassword')} >change password</a>
            
            <a onClick={handleLogout}>Logout</a>
            </div>
          </div>
        </Col>
        <Col xs={9} className="content overflow-auto" style={{ width: `${ContentWidth}px`, padding:`20px`, margin:`30px 250px`}}>
          {currentPage === 'profile' && <CompanyProfile/>}
            
             
          {currentPage === 'updatecompanydetail' && <UpdateCompanyProfile/>}
          

          {currentPage === 'ShowSpecificCompanyJobs' && <ShowSpecificCompanyJobs></ShowSpecificCompanyJobs>}

          {currentPage === 'addnewjobpost' && <AddNewJob/>}

         
          {/* {currentPage === 'checkapplication' && <AddNewJob />} */}

          {currentPage === 'updatepassword' && <UpdateP/>}
        </Col>
      </Row>
    </Container>

  );
}


