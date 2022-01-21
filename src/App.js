// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styles/indexCss.scss';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Route ,
  Routes,
  Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Home from './pages/Home'
import About from './pages/About';

import Landscape from './pages/Landscape';
import Altitude from './pages/Altitude';
import Equipment from './pages/Equipment';
import Itinerary from './pages/Itinerary ';
import Ingredients from './pages/Ingredients';

import { FiAlignRight } from "react-icons/fi";
import { FaDragon} from "react-icons/fa";

function App(){
  return(
  <BrowserRouter>
  <div className='indexContainer'>
    <div className="headerLine">
        <div className='websiteTitle'>
          <Link to="/" className='websiteTitleWord'>mountaineering journal</Link>
        </div>
        <div className='hikingIcon'>
          <FaDragon/>
        </div>
        <div className='hambergerMenu'>
          <FiAlignRight/>
        </div>
    </div>
      <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/landscape/" element={<Landscape />} />
          <Route path="/Altitude/" element={<Altitude />} />
          <Route path="/Equipment/" element={<Equipment />} />
          <Route path="/Itinerary/" element={<Itinerary  />} />
          <Route path="/Ingredients/" element={<Ingredients  />} />
          <Route path="/" element={<Home />} />
      </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App;
