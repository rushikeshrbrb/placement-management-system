
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css'
import { LinkContainer } from 'react-router-bootstrap';
export default function NavigationBar() {
    const linkStyle = { color: 'white' }; // Custom style for the navigation links
    const brandNameStyle = { color: 'white', fontFamily: 'YourFunkyFont', fontSize: '2rem' }; // Add your funky font family

    return (

        <Navbar expand="lg" bg="primary" variant='primary' className="sticky-top bg-primary fixed-top custom-navbar-padding">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center" style={brandNameStyle}>
          <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" width="60" height="45" class="d-inline-block align-top" alt=""/>
            {' '}
            PMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
         <button type="button" class="btn btn-light btn-rounded">
          Placement Updates</button>
         </div> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
// <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
//     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <a class="navbar-brand md-3" href="#" id="navbardp">
//         <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" width="50" height="30" class="d-inline-block align-top" alt=""/>
//         <span class="menu-collapsed">PMS</span>
//     </a>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul class="navbar-nav">
//             <li class="nav-item active">
//                 <a class="nav-link" href="/">Home </a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" to="/aboutus">About us</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="/contact">Carreer</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="/contact">Preparation</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="/contact">Contact us</a>
//             </li>
//         </ul>

//     </div>
  
        // <div class="d-flex align-items-right me-3" >
        // <button type="button" class="btn btn-light btn-rounded">
        //   Placement Updates</button>
        // </div> 

//         <Dropdown>
//       <Dropdown.Toggle variant="info" id="dropdown-basic">
//       <img height={32} width={40} src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png" value="Profile"/>Profile
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
// </nav>

    );
  }

