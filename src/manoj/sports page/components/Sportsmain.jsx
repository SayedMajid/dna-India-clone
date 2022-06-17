import React, { useState } from 'react'
import Sports from './Sports';
import styles from "./sportsitesm.module.css"
const Sportsmain = () => {
    let [value,setvalue]=useState(false)
    let toggle=()=>{
      setvalue(!value)
    }
  return (
    <div style={{width:"60%"}}>
      <p className={styles.headline} >SPORTS</p>
      
      <hr className={styles.line} style={{align:"left"}}></hr>
        <Sports value={value}></Sports>
      <button className={styles.morenews} onClick={toggle}>MORE NEWS</button>
    </div>
  )
}

export default Sportsmain