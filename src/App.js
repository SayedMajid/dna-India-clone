import logo from './logo.svg';
import './App.css';
import Photos from "./Photos"
import PhotoDetails from './photos/PhotoDetails';
import  { greaterthan } from "react-icons";
import{Routes,Route,Navigate} from "react-router-dom"
import Video from "./video/Video"
import VideoDetails from "./video/VideoDetails"

function App() {
  return (
    
    <div className="App">
     
      <Routes>
    
     <Route path="/" element={<Photos/>}/>  
   <Route path="PhotoDetails" element={<PhotoDetails/>}/>
   <Route path="/Video" element={<Video/>}/>
   <Route path="/VideoDetails" element={<VideoDetails/>}/>
   
    </Routes>
    
    </div>
  );
}

export default App;
