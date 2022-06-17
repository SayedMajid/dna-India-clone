import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { lifestylePageApi } from "../Busspage/action";
import Spinner from "./Spinner";


const LifestylePage = () => {
  let { id } = useParams();

  const { data, loading , error} = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lifestylePageApi(id));
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
              <Link className="text-decoration-none text-black" to="/lifestyle">
                Lifestyle
              </Link>
            </li>
          </ol>
        </nav>

        <li className="fs-4 fw-bold">Lifestyle</li>
      </div>
    {loading ? (<Spinner/>):(  <div>
        <h1 className="p-2">{data.title}</h1>
        <div className="container w-100   m-3">
          <img className="w-100 my-3" src={data.urlToImage} alt="image" />
        </div>

        <h5 className="font-monospace my-5">{data.description}</h5>
        <h5 className="font-monospace my-5">{data.content}</h5>

        <div>
          <h6>
            <a href={data.url} className="text-reset">
              Read more....
            </a>
          </h6>
        </div>
      </div>)}
    {/* {error?(<div>Something went wrong</div>):('')} */}
    </div>
  );
};

export default LifestylePage;
