import "./App.css";
import { Navbar } from "./Components/Navbar";
import {Box } from "@chakra-ui/react"
import Sidebar from "./Components/Sidebar";
import Home from "./Majid/Home";
import { Routes, Route } from "react-router-dom";
import Explainers from "./Majid/Explainers";

function App() {
  return (
    <>
      <Navbar />
      <Box display="flex">
        <Box>
        <Sidebar />
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Explainers" element={<Explainers/>}/>
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
