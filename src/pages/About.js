import React from 'react'
import '../styles/about.scss'

import NavBar from '../components/NavBar';

import Ballfall from '../components/Ballfall'

function About() {

    return (
        <>
          <div className='aboutcontainer'>
            <NavBar/>
            <div className='aboutContentContainer'>
                <Ballfall/>
            </div>
          </div>
        </>
    )
}

export default About
