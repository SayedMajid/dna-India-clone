import './App.css';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          {/* <Route path={"/"} element={<div>Home</div>}/> */}
      </Routes>
    </div>
  );
}

export default App;
