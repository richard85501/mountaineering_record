// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './styles/indexCss.css';

import cloud from './images/cloud.jpg';
import big_water from './images/big_water.jpg';
import snow from './images/snow.jpg';
import white_mountain from './images/white_mountain.jpg';

function App() {
  const [heighforUpperPicture,setHeighforUpperPicture] = useState(0);
  const [heighforBottomPicture,setHeighforBottomPicture] = useState(0);
  const [squareCss,setSquareCss] = useState('middleTitleUnitOne')

  const [toggle,setToggle] = useState(false);
  const togglechange = () => {setToggle(!toggle)}


  const upperPicStyle = {
    width:"100%",
    height:"100%",
    position:'absolute',
    top:`${heighforUpperPicture}px`,
    transition:'1s',
  }

  const bottomPicStyle = {
    width:"100%",
    height:"100%",
    position:'absolute',
    bottom:`${heighforBottomPicture}px`,
    transition:'1s',
  }

  const csstest ={
    width:"25%",
    height:"100%",
    transiton:"5s",
    backgroundColor:"orange",
    "csstest:hover":{
      height:"80%",
    }
  }

  const pictueMoveShow = () =>{
    for(let i=heighforUpperPicture;i>0;i--){
      setHeighforUpperPicture(i);
    }
    for(let i=heighforBottomPicture;i>0;i--){
      setHeighforBottomPicture(i);
    }
  }
  const pictueHidden = () =>{
    for(let i=heighforUpperPicture;i<500;i++){
      setHeighforUpperPicture(i);
    }
    for(let i=heighforBottomPicture;i<500;i++){
      setHeighforBottomPicture(i);
    }
  }

  // const pictueMoveShow=()=>{
  //   togglechange();
  //   picureMoveDown();
  //   // toggle?setSquareCss('middleTitleUnitOneChange'):setSquareCss('middleTitleUnitOne');
  //   // toggle?setUpperSquare(picStyle):setUpperSquare(picStylePositionMove);
  // }

  return (
    <>
    <div className='indexContainer'>
      <div className="headerLine"></div>
      <div className="upperContent">

          <div className="upperContentUnit upperContentUnitOne">
            <img style={upperPicStyle} src = {cloud} alt=""></img>
          </div>

          <div className='upperContentUnit upperContentUnitTwo'>
            <img style={upperPicStyle} src = {big_water} alt=""></img>
          </div>
          <div className='upperContentUnit  upperContentUnitThree'>
            <img className='upperContentUnitPic upperContentUnitPicThree' src = {snow} alt=""></img>
          </div>
          <div className='upperContentUnit upperContentUnitFour'>
            <img className='upperContentUnitPic upperContentUnitPicFour' src = {white_mountain} alt=""></img>
          </div>
      </div>
      <div className="middleTitle">
          <div className='middlebackgroundOne'>
            <div onMouseOver={pictueHidden} onMouseLeave={pictueMoveShow} className={squareCss}>1</div>
          </div>
          <div className='middlebackgroundOne'>
            <div onMouseOver={pictueHidden} onMouseLeave={pictueMoveShow} className={squareCss}>1</div>
          </div>
          <div className='middlebackgroundOne'>
            <div onMouseOver={pictueHidden} onMouseLeave={pictueMoveShow} className={squareCss}>1</div>
          </div>
          <div className='middlebackgroundOne'>
            <div onMouseOver={pictueHidden} onMouseLeave={pictueMoveShow} className={squareCss}>1</div>
          </div>
      </div>
      <div className='bottomContent'>
          <div className='bottomTitleUnit'>
            <img style={bottomPicStyle} src = {cloud} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img style={bottomPicStyle} src = {big_water} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img className='bottumContentUnitPic' src = {snow} alt=""></img>
          </div>
          <div className='bottomTitleUnit'>
            <img className='bottumContentUnitPic' src = {white_mountain} alt=""></img>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
