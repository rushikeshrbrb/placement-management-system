// import {Login} from "./Components/Login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/login';
import { NavigationBar } from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import Dashboard from './Components/Dashboard';
import { StudentSidebar } from './Components/StudentSidebar';
import { AdminSidebar } from './Components/AdminSidebar';
import { CompanySidebar } from './Components/CompanySidebar';




function App() {
  return (

    <BrowserRouter>
     <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Login><Footer></Footer></Login>}></Route> 
      <Route path="/dashboard/:userType" element={<Dashboard/>}></Route>
      <Route path='/s_sidebar' element={<StudentSidebar></StudentSidebar>}></Route> 
      <Route path='/a_sidebar' element={<AdminSidebar></AdminSidebar>}></Route> 
      <Route path='/c_sidebar' element={<CompanySidebar></CompanySidebar>}></Route> 
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
