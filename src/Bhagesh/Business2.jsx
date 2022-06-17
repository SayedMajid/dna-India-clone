import React from 'react'
import { useParams } from 'react-router-dom'
import './business.css'

const Business2 = () => {
   let details1= JSON.parse(localStorage.getItem("dnadata"))
   let {id}=useParams()
   console.log(details1);
   let showdata=details1.filter((el,index)=>{
    return index===Number(id)
   })
   console.log(showdata[0])
//    console.log(id)
  return (
    <div className='business2'>
        <h1>{showdata[0].title}</h1>
        <img src={showdata[0].urlToImage} alt="" />
        <p>{showdata[0].description}</p>
    </div>
  )
}

export default Business2