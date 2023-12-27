// import {Login} from "./Components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/login";
import Contact from "./Components/Contact";
import Prac from "./Components/Prac";
import UpdateP from "./Components/UpdateP";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/contact1" element={<Contact></Contact>}></Route>
        <Route path="/contact" element={<Prac></Prac>}></Route>
        <Route
          path="/update"
          element={<UpdateP></UpdateP>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
