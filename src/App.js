import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Sidebar from "./Pradeep/Sidebar";
import Lifestyle from "./Pradeep/Lifestyle";
import LifestylePage from "./Pradeep/LifestylePage";
import Worldnews from "./Pradeep/Worldnews";
import WorldPage from "./Pradeep/WorldPage";

function App() {
  return (
    <>
      <Navbar />
      <div className=" d-flex border border-danger">
        <div className="w-25 p-3">
          <Sidebar />
        </div>
        <div className="w-75 p-5 border">
          <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/lifestyle/:id" element={<LifestylePage />} />
            <Route path="/world" element={<Worldnews />} />
            <Route path="/world/:id" element={<WorldPage />} />
          </Routes>
        </div>
      </div>
      {/* <div className=" App bg-light d-flex justify:space-evenly ">
        <div className=" border border-danger ">
          <Sidebar />
        </div>
        <div className=" border border-success  ">
        
        </div>
      </div> */}
    </>
  );
}

export default App;
