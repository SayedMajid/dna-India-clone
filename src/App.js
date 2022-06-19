import "./App.css";
import { Navbar } from "./Components/Navbar";
import {Box } from "@chakra-ui/react"
import Sidebar from "./Components/Sidebar";
import Home from "./Majid/Home";
import { Routes, Route } from "react-router-dom";
import Explainers from "./Majid/Explainers";
import FiveG from "./Majid/FiveG";
import MyNews from "./Majid/MyNews"
import Footer from "./Components/Footer";
import Newslatest from "../src/Aditya/Newslatest";
import Latestdetails from "../src/Aditya/Latestdetails"
import NewsIndia from "../src/Aditya/NewsIndia"
import Indiadetails from "./Aditya/Indiadetails"
import {World} from "./Bhagesh/World"
import Lifestyle from "./Pradeep/Lifestyle"
import LifestylePage from "./Pradeep/LifestylePage";
import World2 from "./Bhagesh/World2";
import {Business} from "./Bhagesh/Business"
import Business2 from "./Bhagesh/Business2";
import Entertainmentmain from "./manoj/entertainment page/components/Entertainmentmain";
import Entertainmentdetail from "./manoj/entertainment page/page/Entertainmentdetail";
import Sportsmain from "./manoj/sports page/components/Sportsmain"
import Sportsdetail from "./manoj/sports page/page/Sportdetail"
import Photos from "../src/Gopi/Photos"
import PhotoDetails from "./Gopi/PhotoDetails";
import Video from "./Gopi/Video";
import VideoDetials from "./Gopi/VideoDetails"
import { About } from "./Bhagesh/Footer/About";
import { Contact } from "./Bhagesh/Footer/Contact";
import { INVESTORS } from "./Bhagesh/Footer/INVESTORS";
import { PRIVACYPOLICY } from "./Bhagesh/Footer/PRIVACYPOLICY";
import { ADVERTISE } from "./Bhagesh/Footer/ADVERTISE";



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
            <Route path="/MyNews" element={<MyNews/>}/>
            <Route path="/Newslatest" element={<Newslatest/>}/>
            <Route path="/NewsIndia" element={<NewsIndia/>}/>
            <Route path="/Latestdetails/:id" element={<Latestdetails/>}/>
            <Route path="/Indiadetails/:id" element={<Indiadetails/>}/>
            <Route path="/World" element={<World/>}/>
            <Route path="/Lifestyle" element={<Lifestyle/>}/>
            <Route path="/Lifestyle/:id" element={<LifestylePage/>}/>
            <Route path="/World/:id" element={<World2/>}/>
            <Route path="/Business" element={<Business/>}/>
            <Route path="/Business2/:id" element={<Business2/>}/>
            <Route path="/Entertainment" element={<Entertainmentmain/>}/>
            <Route path="/Entertainment/:id" element={<Entertainmentdetail/>}/>
            <Route path="/Sports" element={<Sportsmain/>}/>
            <Route path="/Sports/:id" element={<Sportsdetail/>}/>
            <Route path="/Photos" element={<Photos/>}/>
            <Route path="/PhotoDetails" element={<PhotoDetails/>}/>
            <Route path="/Video" element={<Video/>}/>           
            <Route path="/VideoDetails" element={<VideoDetials/>}/>      

            <Route path="/About" element={<About/>}/> 
            <Route path="/Contact" element={<Contact/>}/> 
            <Route path="/INVESTORS" element={<INVESTORS/>}/> 
            <Route path="/ADVERTISE" element={<ADVERTISE/>}/> 
            <Route path="/PRIVACYPOLICY" element={<PRIVACYPOLICY/>}/>            
          
          </Routes>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;

//157 x  89
//MainRoutes