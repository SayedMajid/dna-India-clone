import React, { useEffect, useState } from "react";
import { worldApi } from "./world/action";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Worldnews = () => {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const { data } = useSelector((state) => state.world);
  console.log(data);

  const moreData = () => {
    setPage(page + 1);
    console.log(page);
    axios
      .get(`http://localhost:8080/articles?_page=${page}&_limit=10`)
      .then((r) => setArticles([...articles, ...r.data]));
  };

  useEffect(() => {
    setArticles(data);
  }, [data]);
  useEffect(() => {
    dispatch(worldApi());
  }, []);
  return (
    <div className="">
      <div className=" p-2 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none text-black" to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link className="text-decoration-none text-black " to="/world">World</Link>
            </li>
          </ol>
        </nav>
        <h1 className="border-bottom border-2 border-warning d-inline-block">World</h1>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={moreData}
        hasMore={true}
        loader={<Spinner />}
      >
        <div className="container">
          {articles.map((el) => {
            // console.log(el.title);
            return (
              <div key={el.url}>
                <Link className="text-decoration-none text-black" to={`/world/${el.headline}`}>
                  <div className="border border-2 h-50  p-3 bg-white d-flex  mt-4">
                    <div className="w-25">
                      <img src={el.image_url} alt="image" className="w-100" />
                    </div>
                    <div className=" ms-4 p-2 w-75">
                      <p className="ms-2 fs-5 font-monospace text-reset fw-bold"> {el.headline}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Worldnews;
