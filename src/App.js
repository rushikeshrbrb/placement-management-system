// import {Login} from "./Components/Login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/login';

import { StudentRegister } from './Components/studentRegister';
import StudentInfo from './Components/StudentInfo';
import { UpdateCompanyProfile } from './Components/UpdateCompanyProfile';
import { CompanyRegister } from './Components/companyDetails';
import { AddNewJob } from './Components/AddNewJob';



function App() {
  return (
    <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route
          path="/student-register"
          element={<StudentRegister></StudentRegister>}
        />
        <Route
          path="/company-register"
          element={<CompanyRegister></CompanyRegister>}
        ></Route>
        <Route
          path="/student-update"
          element={<StudentInfo></StudentInfo>}
        ></Route>
        <Route path="/AddNewJob" element={<AddNewJob></AddNewJob>}></Route>
        <Route
          path="/UpdateCompanyDetail"
          element={<UpdateCompanyProfile></UpdateCompanyProfile>}
        ></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
