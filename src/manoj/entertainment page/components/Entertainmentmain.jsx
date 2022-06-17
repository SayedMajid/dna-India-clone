import React, { useState } from 'react'
import Entertainment from './Entertainment';
import styles from "./entertainmentitesm.module.css"
const Entertainmentmain = () => {
    let [value,setvalue]=useState(false)
    let toggle=()=>{
      setvalue(!value)
    }
  return (
    <div style={{width:"60%"}}>
      <p className={styles.headline} >ENTERTAINMENT</p>
      
      <hr className={styles.line} style={{align:"left"}}></hr>
        <Entertainment value={value}></Entertainment>
      <button className={styles.morenews} onClick={toggle}>MORE NEWS</button>
    </div>
  )
}

export default Entertainmentmain