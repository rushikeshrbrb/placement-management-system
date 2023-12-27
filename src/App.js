// import {Login} from "./Components/Login";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/login";
import { StudentRegister } from "./Components/studentRegister";
import { CompanyRegister } from "./Components/companyDetails";
import { AddNewJob } from './Components/AddNewJob';
import { UpdateCompanyProfile } from './Components/UpdateCompanyProfile';



function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route
          path="/student-register"
          element={<StudentRegister></StudentRegister>}
        ></Route>
        <Route
          path="/company-register"
          element={<CompanyRegister></CompanyRegister>}
        ></Route>
     <Route path='/AddNewJob' element={<AddNewJob></AddNewJob>}></Route>
      <Route path='/UpdateCompanyDetail' element={<UpdateCompanyProfile></UpdateCompanyProfile>}></Route>
      </Routes>

   
    </BrowserRouter>
  );
}

export default App;
