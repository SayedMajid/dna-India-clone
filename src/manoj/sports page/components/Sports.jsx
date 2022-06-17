import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getapidata } from '../store/action'
import Sportsitem from './Sportsitem'
import styles from "./sportsitesm.module.css"
const Sports = (props) => {
 
let dispatch=useDispatch()
let {sports}=useSelector((state)=>state.sports)
console.log(sports)

  useEffect(() => {
    dispatch(getapidata())
  }, [dispatch])
  
  
  return (
    <div className={props.value? styles.show :styles.hide}>
      {
        sports.data.map((sportsdata,index)=>{
          // if(index>=0 && index<=1){
return <Link className={styles.link} to={`/${index}`}> <Sportsitem sportsdata={sportsdata}></Sportsitem></Link>
//           }
//           if(index>1 && index<=2){
// return <div>lSports news</div>
//           }
// if(index>2 && index<=4){
//   return <Sportsitem sportsdata={sportsdata}></Sportsitem>
// }
        })
      }
      
    </div>
  )
}

export default Sports