// import {Login} from "./Components/Login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentInfo from './Components/StudentInfo';

function App() {
  return (
    <BrowserRouter>
     
    <Routes>
      {/* <Route path='/' element={<Login></Login>}></Route>   */}
      <Route path='/' element={<StudentInfo></StudentInfo>}></Route>

    </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>Your Application</h1>
    //   <StudentInfo />
    // </div>
  );
}

export default App;
