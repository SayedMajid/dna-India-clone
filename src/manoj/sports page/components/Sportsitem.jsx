import React from 'react'
import styles from "./sportsitesm.module.css"
const Sportsitem = (props) => {
  
  return (
    <div className={styles.flex}>
        <div className={styles.parent}>
        <img className={styles.img} src={props.sportsdata.image_url} alt="" />
        </div>
        <p className={styles.h1}>{props.sportsdata.headline}</p>
    </div>
  )
}

export default Sportsitem