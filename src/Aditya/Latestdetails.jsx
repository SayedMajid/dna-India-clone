import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './mystyle.module.css'; 

const Latestdetails = () => {
    let details= JSON.parse(localStorage.getItem("latestdetails"))
    let {id}=useParams()
 //    console.log(details);
    let showdata=details.filter((el,index)=>{
     return index===Number(id)
    })
    console.log(showdata[0])
  return (
    <div className={styles.indiadetailsadi}>
    <h1 className={styles.h1details}>{showdata[0].title}</h1>
    <h3 className={styles.descdetails}>{showdata[0].description}</h3>
    <img className={styles.imgdetails} src={showdata[0].urlToImage} alt="" />
    <p className={styles.paradetails}>{showdata[0].content}</p>
</div>
  )
}

export default Latestdetails