// import {Login} from "./Components/Login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/login';



function App() {
  return (
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>  
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
