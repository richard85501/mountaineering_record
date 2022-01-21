import React, { useState,useEffect } from 'react'
import '../styles/about.scss'
import navMenuColor from '../svg/navMenuColor.svg'

import NavBar from '../components/NavBar';

function About() {

    const [currentContent,SetCurrentContent] = useState(['0','1','2','3','landscape'])
    
    return (
        <>
          <div className='aboutcontainer'>
            <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='aboutContentContainer'>
            <div className='aboutIndex'>
                <div className='aboutIndex_A'> aliquam veritatis perferendis quibusdam? Magnam, totam.</div>
                <div className='aboutIndex_B'> aliquam veritatis perferendis quibusdam? Magnam, totam.</div>
            </div>
            </div>
          </div>
        </>
    )
}

export default About
