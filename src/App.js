import "./App.css";
import { Navbar } from "./Components/Navbar";
import {Box } from "@chakra-ui/react"
import Sidebar from "./Components/Sidebar";
import Home from "./Majid/Home";
import { Routes, Route } from "react-router-dom";
import Explainers from "./Majid/Explainers";
import FiveG from "./Majid/FiveG";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Box display="flex">
        <Box>
        <Sidebar />
        </Box>
        {/* width 650px */}
        <Box>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Explainers" element={<Explainers/>}/>
            <Route path="/FiveG" element={<FiveG/>}/>
          </Routes>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
