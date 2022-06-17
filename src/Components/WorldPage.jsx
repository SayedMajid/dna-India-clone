import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { worldPageApi } from "../worldpage/action";
import Spinner from "./Spinner";
const WorldPage = () => {
  const { id } = useParams();
  const { data,loading,error } = useSelector((state) => state.wpg);
  // console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(worldPageApi(id));
  }, []);

  return (
    <div>
      <div className=" p-2 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none text-black" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link className="text-decoration-none text-black" to="/world">
                World
              </Link>
            </li>
          </ol>
        </nav>

        <li className="fs-4 fw-bold">World</li>
      </div>
    {loading ? (<Spinner/>):(  <div>
        <h1 className="p-2">{data.headline}</h1>
        <div className="container w-75  m-3">
          <img className="w-100" src={data.image_url} alt="image" />
        </div>

        <h5 className="font-monospace">{data.description}</h5>

        <div>
          <h6>
            <a href={data.url} className="text-reset">
              Read more....
            </a>
          </h6>
        </div>
      </div>)}
    {error?(<div>Something went wrong</div>):('')}
    </div>
  );
};

export default WorldPage;
