import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import NavBar from '../components/NavBar';
import '../styles/landscape.scss'

import carousal_4 from '../images/Holy_ridgeline_images/carousal_4.jpg'



function Landscape() {
  
    return (
        <>
          <div className='aboutcontainer'>
          <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='LandscapeContainer'>
                <div className='LandscapeTitle'>風景</div>
                <div className='LandscapeContentContainer'>
                  <div className='LandscapeCarousal'>
                    <img className='LandscapeCarousalImg' src={carousal_4}/>
                  </div>
                  <div className='LandscapeIntroduce'>
                      中央尖真是威武霸氣。
                  </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Landscape
