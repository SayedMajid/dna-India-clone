import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { lifestyleApi } from "./Bussiness/action";
// import { lifestyleApi } from "./Bussiness/action";

const Lifestyle = () => {
  const { data, loading, error } = useSelector((state) => state.buss);
  const dispatch = useDispatch();
  let { id } = useParams();

  const [art, setArt] = useState([]);
  const [page, setPage] = useState(3);
  const [result, setResult] = useState(1);

  const moreData = () => {
    // console.log("hello");
    // console.log(page);
    setPage(page + 1)
    axios
      .get(`http://localhost:8080/lifestyle?_page=${page}&_limit=10`)
      .then((r) => setArt([...art, ...r.data]));
      
  };
  useEffect(() => {
    console.log(data);
    setArt(data);
  }, [data]);
  useEffect(() => {
    dispatch(lifestyleApi());
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div className=" my-5 p-4">
      <div className=" w-50">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none text-black" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link className="text-decoration-none text-black" to="/lifestyle">
                Lifestyle
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="border-bottom border-2 border-warning d-inline-block">Lifestyle</h1>
      </div>
      
      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={art.length}
          next={moreData}
          hasMore={art.length!==100}
         
          loader={<Spinner />}
        >
          <div className="container">
            {art.map((el) => {
              // console.log(el.title);
              return (
                <div key={el.url}>
                  <Link
                    className="text-decoration-none text-black"
                    to={`/lifestyle/${el.title}`}
                  >
                    <div className="border border-2  h-50 p-3 bg-white d-flex mt-4">
                      <div className="w-25 ">
                        <img src={el.urlToImage} className="w-100" />
                      </div>
                      <div className=" ms-4 p-2 w-75">
                        <p className="ms-2  fs-5 font-monospace text-reset fw-bold">
                          {" "}
                          {el.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Lifestyle;
