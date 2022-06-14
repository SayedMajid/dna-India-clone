import './App.css';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Routes>
          {/* <Route path={"/"} element={<div>Home</div>}/> */}
      </Routes>
    </div>
  );
}

export default App;
