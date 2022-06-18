import React, { useState } from 'react'
import {Navigate } from "react-router-dom"
import { useNavigate } from 'react-router'
import PhotoDetails from './PhotoDetails'
import {Link} from "react-router-dom"
import Video from "./Video"
// import  {useState} from "react"
const home={
    display:"flex",
    marginLeft:"30%",
    cursor:"pointer"
}
// const images={
//     Width:"100px",
//     height:"100px",
// }
const box={
  // height:"450px",
  width:"650px",
  marginLeft:"85px",
  marginTop:"80px",
  cursor:"pointer",
  borderRadius:"5px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",

}
const butt={
  height:"40px",
  width:"600px",
  marginTop:"30px",
  borderRadius:"10px",
  cursor:"pointer",
  marginLeft:"20px",
  
}
const frame={
  height:"500px",
  width:"800px",
  marginTop:"30px",
}

const Photos = () => {
  const navigate=useNavigate()
  const handleRoute=()=>{
    navigate("/PhotoDetails")
  }
 return (
    <div>
        <div style={home}>
           <Link to="/"> <h5 >Home</h5></Link>
            <p>/</p>
           <Link to ="/"><h5>Photos</h5></Link> 
            <Link to ="/Video"><h5>Videos</h5></Link>  
        </div>


        <div >
            <div style={box} onClick={handleRoute }>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2302303-fotojet-3.jpg" ></img>
                <h3 style={{width:"650px",marginTop:"-5px"}}>IND vs SA: Check out the hottest wives and girlfriends of South African players</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2302199-thumbnail.jpg" alt="" style={{marginTop:"30px",}}/>
            <h3 style={{width:"650px",marginTop:"-5px"}}>Anushka Sharma, Alia Bhatt, Priyanka Chopra: Know whopping fees B-town divas charge per Instagram post</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300433-fotojet-2.jpg" alt="" style={{marginTop:"30px",}}/>
            <h3 style={{width:"650px",marginTop:"-5px"}}>M. Muralitharan, James Anderson to Anil Kumble: Top 5 bowlers with most wickets in Test cricket</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300587-strawberry-supermoon8-nasa.jpg" alt="" style={{marginTop:"30px",}}/>
            <h3 style={{width:"650px",marginTop:"-5px"}}>Strawberry Supermoon 2022: What is special about the celestial event, when and how to watch</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300071-shooting-dna.png" alt="" style={{marginTop:"30px",}} />
            <h3 style={{width:"650px",marginTop:"-5px"}}>After Texas school shooting, what steps are being taken by US to reduce gun violence?</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2299559-mahindra-scorpio-n.jpg" alt="" style={{marginTop:"30px",}} />
            <h3 style={{width:"650px",marginTop:"-5px"}}>2022 Mahindra Scorpio-N interior revealed: Check what’s new in the upcoming SUV</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2298677-pritam-final.jpg" alt="" style={{marginTop:"30px",}} />
            <h3 style={{width:"650px",marginTop:"-5px"}}>Pritam birthday: Brahmastra, Laal Singh Chaddha, Tiger 3, most awaited albums of the composer</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2297977-sushant-final.jpg" alt="" style={{marginTop:"30px",}}/>
            <h3 style={{width:"650px",marginTop:"-5px"}}>Sushant Singh Rajput death anniversary: Chaar Kadam, Qaafirana, famous songs of late actor</h3>
           </div>
           <div style={box}  onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2290758-blood.jpg" alt="" style={{marginTop:"30px",}} />
            <h3 style={{width:"650px",marginTop:"-5px"}}>World Blood Donor Day 2022: 5 health benefits of donating blood</h3>
           </div>
           <div style={box} onClick={handleRoute }>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2289915-fotojet-67-1.jpg" alt="" style={{marginTop:"30px",}}/>
            <h3 style={{width:"650px",marginTop:"-5px"}}>Viral Photos of the Day: Kiara Advani, Shamita Shetty, Aditya Roy Kapoor pose for paps</h3>
           </div>
           <button style={butt}  onClick={handleRoute }>More photos</button>
           
        </div>
</div>
  )
}

export default Photos
