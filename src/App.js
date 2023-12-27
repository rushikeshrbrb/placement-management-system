// import {Login} from "./Components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/login";
import { StudentRegister } from "./Components/studentRegister";
import { CompanyRegister } from "./Components/companyDetails";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
