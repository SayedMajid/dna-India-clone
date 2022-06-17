import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="border border-success p-2" >
        <h2> Sidebar</h2>
        <h4>
          <Link to="/lifestyle">LifeStyle</Link>
        </h4>
        <h4>
          <Link to="/world">World</Link>
        </h4>
      </div>
    </>
  );
};

export default Sidebar;
