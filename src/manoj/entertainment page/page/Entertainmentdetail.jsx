import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_indivisual_data } from '../store/action'
import styles from "./entertainmentdetail.module.css"
const Entertainmentdetail = () => {
    
    let {id}=useParams()
    console.log(typeof(id))
    console.log(id)
    let {entertainment,entertainmentitems}=useSelector((state)=>state.entertainment)
    console.log(entertainment.data)
    let dispatch=useDispatch()
    

useEffect(() => {
 dispatch(get_indivisual_data(id))
},[dispatch,id])

  return (
    <div className={styles.parent}>
<h1 className={styles.h1}>{entertainmentitems.headline}</h1>
<p className={styles.p}>{entertainmentitems.description}</p>
<div className={styles.span}>
<span >Reported By:</span><img className={styles.dnaimg} src="https://cdn.dnaindia.com/sites/default/files/styles/thumbnail/public/509082-dna-yellow.jpg" alt="" /><span>|</span><span>Edited By:DNA Web Team</span><span>|</span><span>Source:DNA Web Desk</span><span>|</span><span>updated :{entertainmentitems.posted_date}</span>
</div>
<img className={styles.img} src={entertainmentitems.image_url} alt="" />

    </div>
  )
}

export default Entertainmentdetail