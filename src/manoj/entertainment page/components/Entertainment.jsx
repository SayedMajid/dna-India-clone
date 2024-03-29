import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getapidata } from "../store/action";
import Entertainmentitem from "./Entertainmentitem";
import styles from "./entertainmentitesm.module.css";
const Entertainment = (props) => {
  let dispatch = useDispatch();
  let { entertainment } = useSelector((state) => state.entertainment);
  console.log(entertainment);

  useEffect(() => {
    dispatch(getapidata());
  }, [dispatch]);

  return (
    <div className={props.value ? styles.show : styles.hide}>
      {entertainment.data.map((entertainmentdata, index) => {
        
          return (
            <Link key={index} className={styles.link} to={`/Entertainment/${index}`}> <Entertainmentitem  entertainmentdata={entertainmentdata}></Entertainmentitem></Link>

          );
        
        
        // if(index>2 && index<=4){
        //   return <Sportsitem sportsdata={sportsdata}></Sportsitem>
        // }
      })}
    </div>
  );
};

export default Entertainment;
