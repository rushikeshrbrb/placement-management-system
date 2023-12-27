
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentInfo from './Components/StudentInfo';
// import Login from './Components/login'
function App() {
  return (
    <BrowserRouter>
     
    <Routes>
      {/* <Route path='/' element={<Login></Login>}></Route>   */}
      <Route path='/student-info' element={<StudentInfo></StudentInfo>}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
