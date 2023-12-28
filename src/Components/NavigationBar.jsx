
import './NavigationBar.css'
export function NavigationBar() {

    return (

      
<nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand md-3" href="#" id="navbardp">
        <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" width="45" height="40" class="d-inline-block align-top" alt=""/>
        <span class="menu-collapsed">PMS</span>
    </a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Carreer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Preparation</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact us</a>
            </li>

            <li class="nav-item dropdown d-sm-block d-md-none">
                <a class="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Menu
                </a>
                <div class="dropdown-menu" aria-labelledby="smallerscreenmenu">
                    <a class="dropdown-item" href="#">Dashboard</a>
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Tasks</a>
                    <a class="dropdown-item" href="#">Etc ...</a>
                </div>
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

