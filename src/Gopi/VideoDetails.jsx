import React from 'react'
import {Link} from "react-router-dom"

const home={
    display:"flex",
    marginLeft:"30%",
    cursor:"pointer"
}
const logos={
    display:"flex",
    gap:"20px",
    marginLeft:"30%",

}
const container={
    width:"650px",
    marginLeft:"30%",
    backgroundColor:"#16171a",
     color:"white",
}

const VideoDetails = () => {
  return (
     <div>
         <div style={home}>
        <Link to="/"> <h5 >Home</h5></Link>
            <p>/</p>
           <Link to ="/"><h5>Videos</h5></Link> 
        </div>
        <div style={container}>
            <div>
              <iframe src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2342803-1655368804-thumbnail1800023.jpg" frameborder="0" style={{height:"500px",width:"500px"}}/>
               <h3>“Official Competition” in New York at the Tribeca Film Festival. The duo star alongside Oscar Martinez in the dark comedy that puts vanity and ego on display in a humorous way.</h3>
          </div>
       
          <div style={logos}>
              <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" alt="" />
              <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" alt="" />
              <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-mail.svg" alt="" />
              <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-linkedin.svg" alt="" />
              <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-whatsapp.svg" alt="" />
         </div>
    </div>
</div> 
  )
}

export default VideoDetails