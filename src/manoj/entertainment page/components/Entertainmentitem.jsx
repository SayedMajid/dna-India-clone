import React from 'react'
import styles from "./entertainmentitesm.module.css"
const Entertainmentitem = (props) => {
  
  return (
    <div className={styles.flex} >
        <div className={styles.parent}>
        <img className={styles.img} src={props.entertainmentdata.image_url} alt="" />
        </div>
        <p className={styles.h1}>{props.entertainmentdata.headline}</p>
    </div>
  )
}

export default Entertainmentitem