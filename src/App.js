// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './styles/indexCss.css';
import cloud from './images/cloud.jpg';
import big_water from './images/big_water.jpg';
import snow from './images/snow.jpg';
import white_mountain from './images/white_mountain.jpg';

function App() {
  const [testplus,settestplus] = useState(5);

  return (
    <>
    <div className='indexContainer'>
      <div className="headerLine"></div>
      <div className="upperContent">
          <div className='upperContentUnit'>
            <img className='upperContentUnitPic' src = {cloud} alt=""></img>
          </div>
          <div className='upperContentUnit'>
            <img className='upperContentUnitPic' src = {big_water} alt=""></img>
          </div>
          <div className='upperContentUnit'>
            <img className='upperContentUnitPic' src = {snow} alt=""></img>
          </div>
          <div className='upperContentUnit'>
            <img className='upperContentUnitPic' src = {white_mountain} alt=""></img>
          </div>
      </div>
      <div className="middleTitle">
          <div className='middleTitleUnit'></div>
          <div className='middleTitleUnit'></div>
          <div className='middleTitleUnit'></div>
          <div className='middleTitleUnit'></div> 
      </div>
      <div className='bottomContent'>
          <div className='bottomTitleUnit'>
            <img className='upperContentUnitPic' src = {cloud} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img className='upperContentUnitPic' src = {big_water} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img className='upperContentUnitPic' src = {snow} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img className='upperContentUnitPic' src = {white_mountain} alt=""></img>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
