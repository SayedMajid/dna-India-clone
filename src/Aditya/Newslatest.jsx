import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./mystyle.module.css";

const Newslatest = () => {
  const [user, setuser] = useState([]);

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&apiKey=a618d35eb9f944ecafc40a79ad27d57d"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        let aditya = data.articles;
        localStorage.setItem("latestdetails", JSON.stringify(aditya));
        // console.log(aditya)
        setuser(aditya);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainadi1}>
      <h1 className={styles.adiheader}>Latest News</h1>

      {user.map((data, index) => (
        <div className={styles.mainadi}>
          <div className={styles.Containeradi} key={data.url}>
            <img
              className={styles.adiimg}
              src={
                data.urlToImage
                  ? data.urlToImage
                  : "https://cdn08.allafrica.com/download/pic/main/main/csiid/00600909:b897e377024831d64b7ceca0a4c1b775:arc614x376:w1200.jpg"
              }
              alt="..."
            />

            <div>
              <Link className={styles.adilink} to={`/Latestdetails/${index}`}>
                {" "}
                <p className={styles.adititle}>{data.title}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Newslatest;
