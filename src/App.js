// import {Login} from "./Components/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddNewJob } from './Components/AddNewJob';
import { UpdateCompanyProfile } from './Components/UpdateCompanyProfile';
import Contact from './Components/Contact';
import UpdateP from './Components/UpdateP';
import StudentInfo from './Components/StudentInfo';
import CompanyRegister from './Components/companyRegister';
import StudentRegister from './Components/studentRegister';
import CompanySidebar from './Components/CompanySidebar';
import AdminSidebar from './Components/AdminSidebar';
import StudentSidebar from './Components/StudentSidebar';
import Dashboard from './Components/Dashboard';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';


function App() {
  return (

    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>

        <Route path="/dashboard/:userType" element={<Dashboard></Dashboard>}></Route>

        <Route path='/s_sidebar' element={<StudentSidebar></StudentSidebar>}></Route>

        <Route path='/a_sidebar' element={<AdminSidebar></AdminSidebar>}></Route>

        <Route path='/c_sidebar' element={<CompanySidebar></CompanySidebar>}></Route>

        <Route path="/student-register" element={<StudentRegister></StudentRegister>}></Route>

        <Route path="/company-register" element={<CompanyRegister></CompanyRegister>}></Route>
        
        <Route path="/student-update" element={<StudentInfo></StudentInfo>}></Route>

        <Route path="/AddNewJob" element={<AddNewJob></AddNewJob>}></Route>

        <Route path="/UpdateCompanyDetail" element={<UpdateCompanyProfile></UpdateCompanyProfile>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/AddNewJob" element={<UpdateP></UpdateP>}></Route>

        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>

      </Routes>
  <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
