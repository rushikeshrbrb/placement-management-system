

import React, { useEffect } from 'react';
import './Sidebar.css';
import { Col, Container, Row } from 'react-bootstrap';

export function StudentSidebar() {
  useEffect(() => {

    function SidebarCollapse() {

    }
  }, []);
  const sidebarWidth = 200; // Set your desired sidebar width
  // const [currentPage, setCurrentPage] = useState(null);
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');

  // };

  // const handleButtonClick = (page) => {
  //   setCurrentPage(page);
  // };


  return (


    <Container fluid >
    <Row>
    <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px` }}>
       
    <a class="active" href="#home"></a><br />
       <a class="active" href="#home">Student: fname lname</a>
        <a href="#profile">Profile</a>
      <a href="#edit">Edit</a>
        <a href="#job">Jobs</a>
         <a href="#apply">Apply for job</a>
         <a href="#logout">Logout</a>

      </Col>
     
    </Row>
  </Container>

  
    // <div>
    //   <div class="sidebar sticky-top" style={{ width: `${sidebarWidth}px` }}><br />


    //     <a class="active" href="#home"></a>
    //     <a class="active" href="#home">Student: fname lname</a>
    //     <a href="#profile">Profile</a>
    //     <a href="#edit">Edit</a>
    //     <a href="#job">Jobs</a>
    //     <a href="#apply">Apply for job</a>
    //     <a href="#logout">Logout</a>
    //   </div>
    // </div>

  );
}

      {/* <div class="content sticky-top"><br />
  <h2 >Welcome to student sidebar Dashboard</h2>
  <hr />
</div> */}
