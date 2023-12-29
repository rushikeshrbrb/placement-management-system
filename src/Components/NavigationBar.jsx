
import './NavigationBar.css'
export default function NavigationBar() {

    return (

      
<nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand md-3" href="#" id="navbardp">
        <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" width="50" height="45" class="d-inline-block align-top" alt=""/>
        <span class="menu-collapsed">PMS</span>
    </a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/aboutus">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Carreer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Preparation</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact us</a>
            </li>
        </ul>

    </div>
 
        <div class="d-flex align-items-right me-3" >
        <button type="button" class="btn btn-light">
          <img height={32} width={40} src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png" value="Profile"/>Profile</button>
        </div>
</nav>

    );
  }

