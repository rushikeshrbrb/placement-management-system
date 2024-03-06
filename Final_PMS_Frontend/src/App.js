import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddNewJob } from './Components/AddNewJob';
import { UpdateCompanyProfile } from './Components/UpdateCompanyProfile';
import Contact from './Components/Contact';
import UpdateP from './Components/UpdateP';
import StudentInfo from './Components/StudentInfo';
import CompanyRegister from './Components/companyRegister';
import StudentRegister from './Components/studentProfile';
import CompanySidebar from './Components/CompanySidebar';
import AdminSidebar from './Components/AdminSidebar';
import StudentSidebar from './Components/StudentSidebar';
import Dashboard from './Components/Dashboard';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import ForgetPassword from './Components/ForgetPassword';
import Registration from './Components/Registration';
import ContactDetails from './Components/ContactDetails';
import StudentEducationDetails from './Components/StudentEducationDetails';
import JobList from './Components/ShowJob';
import CompanyDetails from './Components/CompanyDetails';
import { ShowSpecificCompanyJobs } from './Components/Jobs/ShowSpecificCompanyJobs';
import Preparation from './Components/Preparation';
import CommunicationModule from './Components/CommunicationModule';
import QuizApp from './Components/QuizApp';
import AptitudeModule from './Components/AptitudeModule';
import PlacementOfficerSidebar from './Components/PlacementOfficerSidebar';
import HodSidebar from './Components/HodSidebar';
import { PlacedStudentStatus } from './Components/PlacedSatus/PlacedStudentStatus';
import QuizApti from './Components/QuizApti';
import ShowSpecficUsers from './Components/ShowSpecificUsers';
import StudentTable from './Components/Student/StudentInfoSpecific';
import CompanyTable from './Components/Company/CompanyList';
import HODDetails from './Components/HOD/HodProfile';
import { UpdateHod } from './Components/HOD/UpdateHodProfile';
import Pdetails from './Components/PlacementOfficer/Pofficerprofile';
import { UpdatePofficer } from './Components/PlacementOfficer/UpdatePprofile';
import { PrivateRoute } from './Components/PrivateRout';
import Privacy from './Components/Privacy';
import StudentList from './Components/Student/StudentList';



function App() {
  return (

    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>

        <Route path="/dashboard/:userType" element={<Dashboard></Dashboard>}></Route>

        <Route path='/s_sidebar/:userId' element={<PrivateRoute><StudentSidebar></StudentSidebar></PrivateRoute>}></Route>

        <Route path='/a_sidebar/:userId' element={<PrivateRoute><AdminSidebar></AdminSidebar></PrivateRoute>}></Route>

        <Route path='/c_sidebar/:userId' element={<PrivateRoute><CompanySidebar></CompanySidebar></PrivateRoute>}></Route>

        <Route path='/p_sidebar/:userId' element={<PrivateRoute><PlacementOfficerSidebar></PlacementOfficerSidebar></PrivateRoute>}></Route>

        <Route path='/h_sidebar/:userId' element={<PrivateRoute><HodSidebar></HodSidebar></PrivateRoute>}></Route>

        <Route path="/student-register" element={<StudentRegister></StudentRegister>}></Route>

        <Route path="/company-register" element={<CompanyRegister></CompanyRegister>}></Route>
        
        <Route path="/student-update" element={<StudentInfo></StudentInfo>}></Route>

        <Route path="/AddNewJob" element={<AddNewJob></AddNewJob>}></Route>
        <Route path="/showalljobs" element={<JobList></JobList>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/AddNewJob" element={<UpdateP></UpdateP>}></Route>

        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>

        <Route path="/updatepassword" element={<UpdateP></UpdateP>}></Route>

        <Route path="/forgetpassword" element={<ForgetPassword></ForgetPassword>}></Route>

        <Route path="admin/registration" element={<Registration></Registration>}></Route>

        <Route path="/contact-details" element={<ContactDetails></ContactDetails>}></Route>
       <Route path="/company-details" element={<CompanyDetails></CompanyDetails>}></Route>
       <Route path="/ShowSpecificCompanyJobs" element={<ShowSpecificCompanyJobs></ShowSpecificCompanyJobs>}></Route>
        <Route path="/student-education-details" element={<StudentEducationDetails></StudentEducationDetails>}></Route>
        <Route path="/aptitude" element={<AptitudeModule></AptitudeModule>}></Route>
        <Route path="/quizapp" element={<QuizApp></QuizApp>}></Route>
        <Route path="/privacy" element={<Privacy></Privacy>}></Route>

        <Route path="/communication" element={<PrivateRoute><CommunicationModule></CommunicationModule></PrivateRoute>}></Route>

        <Route path="/preparation" element={<PrivateRoute><Preparation></Preparation></PrivateRoute>}></Route>
        <Route path="/selectedStudent" element={<PrivateRoute><PlacedStudentStatus></PlacedStudentStatus></PrivateRoute>}></Route>
        <Route path="/apti" element={<QuizApti></QuizApti>}></Route>
        <Route path="/showspecificuser" element={<PrivateRoute><ShowSpecficUsers></ShowSpecficUsers></PrivateRoute>}></Route>
        <Route path="/users" element={<PrivateRoute><StudentTable></StudentTable></PrivateRoute>}></Route>


        <Route path="/allCompany" element={<PrivateRoute><CompanyTable></CompanyTable></PrivateRoute>}></Route>
        <Route path="/hodprofile" element={<PrivateRoute><HODDetails></HODDetails></PrivateRoute>}></Route>

        <Route path="/updateHod" element={<PrivateRoute><UpdateHod></UpdateHod></PrivateRoute>}></Route>

        <Route path="/pprofile" element={<PrivateRoute><Pdetails></Pdetails></PrivateRoute>}></Route>

        <Route path="/UpdatePofficer" element={<PrivateRoute><UpdatePofficer></UpdatePofficer></PrivateRoute>}></Route>

        <Route path="/studentlist" element={<PrivateRoute><StudentList></StudentList></PrivateRoute>}></Route>


      </Routes>

      
  <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;