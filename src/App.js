// import {Login} from "./Components/Login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/login';
import Contact from './Components/Contact';
import UpdateP from './Components/UpdateP';
import StudentRegister from './Components/StudentRegister';



function App() {
  return (
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>  
      <Route path='/contact' element={<Contact></Contact>}></Route>  
      <Route path='/update' element={<UpdateP></UpdateP>}></Route> 
      <Route path='/register' element={<StudentRegister></StudentRegister>}></Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
