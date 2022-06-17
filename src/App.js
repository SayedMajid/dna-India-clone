import './App.css';
import Sportsmain from './manoj/sports page/components/Sportsmain';
import { Route, Routes } from 'react-router-dom';
import Sportdetail from './manoj/sports page/page/Sportdetail';
import Entertainmentmain from './manoj/entertainment page/components/Entertainmentmain';
import Entertainmentdetail from './manoj/entertainment page/page/Entertainmentdetail';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entertainmentmain></Entertainmentmain>}></Route>
        <Route path="/:id" element={<Entertainmentdetail></Entertainmentdetail>}></Route>
      </Routes>


    </div>
  );
}

export default App;
