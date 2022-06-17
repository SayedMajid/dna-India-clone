import logo from './logo.svg';
import './App.css';
import { Business } from './Bhagesh/Business';
import Business2 from './Bhagesh/Business2';
import { World } from './Bhagesh/World';
import World2 from './Bhagesh/World2';
import { Navbar } from './Bhagesh/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
        {/* <Navbar/> */}
        {/* <Routes>
          <Route path="/" element={<Business/>} />
          <Route path="/:id" element={<Business2/>}/>
          <Route path="/" element={<World/>} />
          <Route path="/:id" element={<World2/>}/>
          <Route path='/*'  />
        </Routes> */}
    </div>
  );
}

export default App;
