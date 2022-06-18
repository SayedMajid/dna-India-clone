import React from 'react'
import {Link} from "react-router-dom"
 import { useNavigate } from 'react-router'
 import { Navigate } from 'react-router-dom'
 import {VideoDetails} from "./VideoDetails"


const home={
    display:"flex",
    // marginLeft:"30%",
    cursor:"pointer",
    // border:"1px solid black"
}

const mainBox = {
    // border:"1px solid black",
    marginTop:"80px"
}
const box={
    // height:"450px",
    width:"650px",
    marginLeft:"0px",
    marginBottom:"20px",
    cursor:"pointer",
    borderRadius:"5px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
    backgroundColor:"#16171a",
    color:"white",
  }

const Video = () => {
    const navigate=useNavigate()
    const handleRoute=()=>{
      navigate("/VideoDetails")
    }
  return (
    <div style={mainBox}>

        <div style={home}>
        <Link to="/"> <h5 >Home</h5></Link>
            <p>/</p>
           <Link to ="/"><h5>Videos</h5></Link> 
        </div>


        <div>
        
            <div style={box}  onClick={handleRoute }> 
               
                <h3  style={{width:"650px",marginTop:"5px"}}>Stranger Things 4': Here's How Jamie Compbell Bower Transformed Into Villain Vecna</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2342803-1655368804-thumbnail1800023.jpg" alt="" />
            </div>
            <div style={box}  onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>Sports Wrap, June 16</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2342560-1655367610-00000003.jpg" alt="" />
            </div>
            <div style={box}  onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>Puri gears up for famous ‘Rath Yatra’, construction of chariots in full swing</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341861-1655364036-00000003.jpg" alt="" />
            </div>
            <div style={box}  onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>National Herald case: NSUI workers climb atop water tank to protest against ED</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341813-1655363758-00000015.jpg" alt="" />
            </div>
            <div style={box}>
                <h3  style={{width:"650px",marginTop:"5px"}}>Gujarat: Drugs worth Rs 8 lakhs seized in Vadodara, 4 arrested</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341810-1655363739-00000003.jpg" alt="" />
            </div>
            <div style={box}  onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>Unrelenting rain causes severe waterlogging in Guwahati</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341804-1655363707-00000003.jpg" alt="" />
            </div>
            <div style={box}  onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>Delhi witnesses waterlogging in many areas following heavy rain
</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341748-1655363407-00000003.jpg" alt="" />
            </div>
            <div style={box} onClick={handleRoute }>
                <h3  style={{width:"650px",marginTop:"5px"}}>Penelope Cruz hits Red carpet of Tribeca Film Festival to promote her film 'Official Competition'</h3>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2341459-whatsapp-image-2022-06-16-at-12.12.38-pm.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Video