
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css'
import { LinkContainer } from 'react-router-bootstrap';

export default function NavigationBar() {
    const linkStyle = { color: 'white' }; // Custom style for the navigation links
    const brandNameStyle = { color: 'white', fontFamily: 'YourFunkyFont', fontSize: '2rem' }; // Add your funky font family

    const handleAlert = () => {
      alert("For Placement Updates, Please contact Davindar Singh sir, Placement Co-Ordinator, C-DAC Mumbai.");
    };
    

    return (

        <Navbar expand="lg" bg="primary" variant='primary' className="sticky-top bg-primary fixed-top custom-navbar-padding">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center" style={brandNameStyle}>
          <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" width="60" height="45" class="d-inline-block align-top" alt=""/>
            {' '}
            C-DAC PMS  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto center">
              <LinkContainer to="/">
                <Nav.Link style={linkStyle}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link style={linkStyle}>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/programs">
                <Nav.Link style={linkStyle}>Programs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/preparation">
                <Nav.Link style={linkStyle}>Preparations</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link style={linkStyle}>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
            <div class="d-flex align-items-right me-3" >
            <button type="button" class="btn btn-light btn-rounded digital-btn1" onClick={handleAlert}>
                Placement Updates
              </button> 
             
              <div>
              ..<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ringing-phone.png" alt="ringing-phone"/> .<b>|</b>.  
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/secured-letter--v1.png" alt="secured-letter--v1"/> .<b>|</b>. 
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/fax.png" alt="fax"/>
                </div>  
            
         </div> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 

    );
  }

