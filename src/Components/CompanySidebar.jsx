
import React, { useEffect } from 'react';
import './Sidebar.css';

export function CompanySidebar() {
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
   <div>
<div class="sidebar sticky-top" style={{ width: `${sidebarWidth}px` }}><br />
  <a class="active" href="#home"></a>
  <a class="active" href="#home">Company: cname</a>
  <a  href="#profile">Profile</a>
  <a  href="#edit">Edit</a>
  <a  href="#job">Post job</a>
  <a href="#apply">Applicant List</a>
  <a  href="#logout">Logout</a>
</div>

{/* <div class="content sticky-top"><br />
  <h2 >Welcome to student sidebar Dashboard</h2>
  <hr />
</div> */}
</div> 

  );
}


