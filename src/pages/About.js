import React, { useState,useEffect } from 'react'
import '../styles/about.scss'
import navMenuColor from '../svg/navMenuColor.svg'

import NavBar from '../components/NavBar';

import Matter from 'matter-js';

function About() {

    const [currentContent,SetCurrentContent] = useState(['0','1','2','3','landscape'])
    const ballIdx = ['品田山','池有山','雪山北峰','速密達山']
    // var engine;
    // var render;
    // var Engine, Render ,Runner ,Bodies ,BodyM ,Composite;

    // const init = () =>{
    //     // module aliases
    //   var Engine = Matter.Engine,
    //       Render = Matter.Render,
    //       Runner = Matter.Runner,
    //       Bodies = Matter.Bodies, //創建物體
    //       BodyM = Matter.Body, //操控物體
    //       Composite = Matter.Composite;
      
    //   // create an engine
    //     engine = Engine.create();

    //   // create a renderer
    //     render = Render.create({
    //     element: document.body,
    //     engine: engine, 
    //     options: {
    //         width: 1500,
    //         height: 600,
    //         pixelRatio: 1,
    //         background: '#bfe9f5', //"#bfe9f5"
    //         wireframeBackground: '#14151f',
    //         enabled: true,
    //         wireframes: false,
    //       }        
    //   });
    // }
    // useEffect(()=>{
    //     init();
    // },[])


    // var boxA = Bodies.rectangle(800, 200, 80, 80);
    // var boxB = Bodies.rectangle(650, 50, 80, 80);

    // Composite.add(engine.world, [boxA, boxB]);

    // // / run the renderer
    // Render.run(render);

    // // create runner
    // var runner = Runner.create();

    // // run the engine
    // Runner.run(runner, engine);
    
    

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
            <div className='aboutNavBorder'></div>
            <div className='aboutContentContainer'>
            <div className='aboutIndex'>
                <div className='aboutIndex_A'> 聖稜線</div>
                {/* <button onclick={RunTheRunner()}>Run the runner</button>
                <button onclick={StopTheRunner()}>Stop the runner</button> */}
                <div className='aboutIndex_B'> aliquam veritatis perferendis quibusdam? Magnam, totam.</div>
            </div>
            </div>
          </div>
        </>
    )
}

export default About
