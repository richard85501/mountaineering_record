import React,{useEffect,useRef} from 'react'

import Matter from 'matter-js';

function Ballfall(props) {

    const boxRef = useRef(null)
    const canvasRef = useRef(null)      

    const ballArray = ['品田山','池有山','跨年','雪山北峰','速密達山','品田斷崖','步秀蘭山','雲海','夕陽','武陵四秀','小o聖']
    let ballIdx = 0
    var engine;
    var render;
    // var Engine, Render ,Runner ,Bodies ,BodyM ,Composite;
    
    var Bodies = Matter.Bodies, //創建物體
        Composite = Matter.Composite,
        BodyM = Matter.Body, //操控物體
        Events = Matter.Events

    // const aboutIndexStyle = document.getElementsByClassName('aboutIndex')[0]
    // console.log(aboutIndexStyle.offsetWidth,aboutIndexStyle.offsetHeight)
    // const widthC = aboutIndexStyle.offsetWidth
    // const heightC = aboutIndexStyle.offsetHeight
    // console.log(aboutIndexStyle)

    const init = () =>{
        // module aliases
      var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Constraint = Matter.Constraint,
          Mouse = Matter.Mouse,
          Vertices = Matter.Vertices,
          Common = Matter.Common,
          MouseConstraint = Matter.MouseConstraint;
          
      // create an engine
        engine = Engine.create();

      // create a renderer
        render = Render.create({
        element: boxRef.current,
        engine: engine, 
        options: {
            width:1000,
            height:800,
            pixelRatio: 1,
            background: 'transparent', //"#bfe9f5"
            wireframeBackground: '#14151f',
            enabled: true,
            wireframes: false,
            // showVelocity: true,
            showCollisions: false,
          }        
      });

      const groundOption = {
        render: {
          fillStyle: 'transparent',
          strokeStyle: '#FBFBFB',
        },
        isStatic: true,
      };

      const walloption = {
          render :{
            fillStyle: 'transparent',
          },
          isStatic: true,
        };
      
      const wordContainerOption = {
        render :{
          fillStyle : 'transparent',
        },
        isStatic : true,
      }

      const ceilingOption = {
        render:{
          fillStyle : 'transparent',
        },
        isStatic :true,
      }

      var ball0 = Bodies.circle(400, 50, 40, {
        opacity:0,
        friction: 1,//阻力
        frictionStatic: 1,//Multiple with friction, if 0 means always no stop
        restitution: 0.8,//
        render:{
            fillStyle:"transparent",
            strokeStyle: 'black',
            lineWidth: 2
        },
        lineWidth:2,
      });
      ball0.render.text = ballArray[ballIdx];
      if(ballIdx < ballArray.length-1){
        ballIdx++
      }else{
        ballIdx = 0
      }

      var ground = Bodies.rectangle(200, 800, 1900, 20,groundOption);
      var rightwall = Bodies.rectangle(1000, 0, 20, 1700,walloption)
      var leftwall = Bodies.rectangle(0, 0, 20, 1700,walloption)
      var wordContainer =Bodies.rectangle(render.options.width/2,render.options.height/2,400,150,wordContainerOption)
      var ceiling = Bodies.rectangle(200, 0, 1900, 20,ceilingOption)

    //   BodyM.setVelocity(circleA, {x: 3, y: -10})
      BodyM.set(ball0, { frictionAir:0 });

      var mouseObject = Mouse.create(render.canvas);

      var mouseConstraintOptions = {
        type: 'mouseConstraint',
        mouse: mouseObject,
        element: null,
        body: null,
        constraint: Constraint.create({
                    label: 'Mouse Constraint',
                    pointA: mouseObject.position,
                    pointB: { x: 0, y: 0 },
                    length: 0.01, 
                    stiffness: 0.5,
                    angularStiffness: 1,
                    render: {
                        strokeStyle: '#FFFFFF',
                        lineWidth: 3
                    }}),
        collisionFilter: {
            category: 0x0001,
            mask: 0xFFFFFFFF,
            group: 0
        },
        damping:0.5,
    }

    var mouseConstraint = MouseConstraint.create(engine,mouseConstraintOptions);
    Composite.add(engine.world, [mouseConstraint]);
    Composite.add(engine.world, [ground, ball0, rightwall, leftwall,wordContainer,ceiling]);

      // / run the renderer
      Render.run(render);

      Events.on(engine, "beforeUpdate", renderText);

      // create runner
      var runner = Runner.create();

      // run the engine
      Runner.run(runner, engine);

      var canvas = document.querySelector('canvas');
      canvas.setAttribute('class','ballcanvas');
      
    }

    const renderText = () =>{
      var ctx = document.getElementsByClassName("ballcanvas")[0].getContext("2d");
      console.log(ctx)
      for(var element in engine.world.bodies){
        var targetBody = engine.world.bodies[element];
        if(targetBody.render.text){
          var fontsize = 3;
          var fontfamily = "Arial"; 
          var color = "black";
          fontsize = 20;
              
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          ctx.fillStyle=color;
          ctx.font = fontsize + 'px '+fontfamily;
          // console.log(targetBody,Math.round(targetBody.position.x),Math.round(targetBody.position.y))
          // console.log(targetBody.render.text)
          ctx.fillText(targetBody.render.text,targetBody.position.x,targetBody.position.y);
        }
      }
      // console.log(targetBody)
    }

    const getMousePos = (event) => {
      var e = event || window.event;
      var x = e.offsetX;
      var y = e.offsetY;
      //alert('x: ' + x + '\ny: ' + y);
      // console.log(x,y)
      return [x,y]
    }
    
    const createBall = () =>{
      const mousePostion = getMousePos()
      console.log(mousePostion)
      
      var ball = Bodies.circle(mousePostion[0],40, 40, {
        opacity:0,
        friction: 1,//阻力
        frictionStatic: 1,//Multiple with friction, if 0 means always no stop
        restitution: 1,//
        // circleRadius:50,//有物體碰撞,界線穿過問題
        render:{
            fillStyle:"transparent",
            strokeStyle: 'black',
            lineWidth: 2,
            // color:"red",
        },
        lineWidth:2,
      });
      ball.render.text = ballArray[ballIdx];
      if(ballIdx < ballArray.length-1){
        ballIdx++
      }else{
        ballIdx = 0
      }
      renderText()
      //球剛出現 , 會有一個奇怪的停頓 , 推斷是因為沒有初速度 , 所以這邊給他一個初速度
      BodyM.setVelocity(ball, {x:0,y:5});
      Composite.add(engine.world, [ball]);
    }

    useEffect(() => {
        init();
    }, [])

    return (
    <>
    <div className='aboutIndex' onClick={createBall}>
      <div
          ref={boxRef}
          style={{
          position:'absolute',
          
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
      }}
      >
        {/* <canvas ref={canvasRef} /> */}
      </div>
      <div className='titleBlock'>
        <div className='aboutwordContainer'>聖稜線</div>
      </div>
    </div>
    </>
    )
}

export default Ballfall