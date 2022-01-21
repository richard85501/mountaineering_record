import React from 'react';

import cloud from '../images/cloud.jpg';
import big_water from '../images/big_water.jpg';
import snow from '../images/snow.jpg';
import white_mountain from '../images/white_mountain.jpg';
import chicken from '../images/chicken.jpg';
import cry from '../images/cry.jpg';
import snow_north_peak from '../images/snow_north_peak.jpg';
import sumida from '../images/sumida.jpg';

import JournalUnit from '../components/JournalUnit';

const indexTitle = ["雪山","羅馬縱走","大小霸","能高安東軍"]
const upperPicture = [cloud,big_water,snow,white_mountain]
const middlePicture = [chicken,cry,snow_north_peak,sumida]

function Home() {

    return (
        <>
          <div className='mainContent'>
              {indexTitle.map((indexTitleEl,i)=>(
              <JournalUnit
                key ={i}
                indexTitle={indexTitle[i]}
                upperPicture={upperPicture[i]}
                middlePicture={middlePicture[i]}
              />
              ))}
          </div>
        </>
      ); 
    }

export default Home;
