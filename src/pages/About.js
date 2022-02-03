import React, { useState,useEffect } from 'react'
import '../styles/about.scss'
import navMenuColor from '../svg/navMenuColor.svg'

import NavBar from '../components/NavBar';

import Ballfall from '../components/Ballfall'

function About() {

    const [currentContent,SetCurrentContent] = useState(['0','1','2','3','landscape'])
    const ballIdx = ['品田山','池有山','雪山北峰','速密達山']
    var engine;
    var render;
    var Engine, Render ,Runner ,Bodies ,BodyM ,Composite;

    let simDivObj = React.createRef();
    // useEffect(()=>{
    //     init();
    // },[])

    // function RunTheRunner()
    // {
    //     Runner.run(runner, engine);
    // }
    
    // //停止render
    // function StopTheRunner()
    // {
    //     Runner.stop(runner, engine);
    // }

    return (
        <>
          <div className='aboutcontainer'>
            <NavBar/>
            {/* <div className='aboutNavBorder'></div> */}
            <div className='aboutContentContainer'>
            <div className='aboutIndex'>
                {/* <div className='aboutIndex_A'> 聖稜線</div> */}
                {/* <button onclick={RunTheRunner()}>Run the runner</button>
                <button onclick={StopTheRunner()}>Stop the runner</button> */}
                {/* <div className='aboutIndex_B'> aliquam veritatis perferendis quibusdam? Magnam, totam.</div> */}
                <Ballfall/>
            </div>
            </div>
          </div>
        </>
    )
}

export default About
