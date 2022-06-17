import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_indivisual_data } from '../store/action'
import styles from "./sportsdetail.module.css"
const Sportdetail = () => {
    
    let {id}=useParams()
    console.log(typeof(id))
    console.log(id)
    let {sports,sportsitems}=useSelector((state)=>state.sports)
    console.log(sports.data)
    let dispatch=useDispatch()
    

useEffect(() => {
 dispatch(get_indivisual_data(id))
},[dispatch,id])

  return (
    <div className={styles.parent}>
<h1 className={styles.h1}>{sportsitems.headline}</h1>
<p className={styles.p}>{sportsitems.description}</p>
<div className={styles.span}>
<span >Reported By:</span><img className={styles.dnaimg} src="https://cdn.dnaindia.com/sites/default/files/styles/thumbnail/public/509082-dna-yellow.jpg" alt="" /><span>|</span><span>Edited By:DNA Web Team</span><span>|</span><span>Source:DNA Web Desk</span><span>|</span><span>updated :{sportsitems.posted_date}</span>
</div>
<img className={styles.img} src={sportsitems.image_url} alt="" />

    </div>
  )
}

export default Sportdetail