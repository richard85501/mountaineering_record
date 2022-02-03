import React,{useEffect,useRef} from 'react'

import Matter from 'matter-js';

function Ballfall(props) {

    const boxRef = useRef(null)
    const canvasRef = useRef(null)      

    const ballIdx = ['品田山','池有山','雪山北峰','速密達山']
    var engine;
    var render;
    // var Engine, Render ,Runner ,Bodies ,BodyM ,Composite;

    const init = () =>{
        // module aliases
      var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies, //創建物體
          BodyM = Matter.Body, //操控物體
          Composite = Matter.Composite,
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
            width: 1500,
            height: 900,
            pixelRatio: 1,
            background: 'transparent', //"#bfe9f5"
            wireframeBackground: '#14151f',
            enabled: true,
            wireframes: false,
            // showVelocity: true,
            showCollisions: true,
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

      var boxA = Bodies.rectangle(800, 200, 80, 80,{isStatic:true});
      var boxB = Bodies.rectangle(650, 50, 80, 80,{
        friction: 1,//阻力
        frictionStatic: 1,//Multiple with friction, if 0 means always no stop
        restitution: 0.8,//
      });
    //   var customizeB = Bodies.fromVertices(670,700, [{x:0,y:0},{x:-150,y:150},{x:0,y:150}],{isStatic:true});

      var circleA = Bodies.circle(400, 50, 40, {
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

      var ground = Bodies.rectangle(200, 700, 1900, 20,groundOption);
      var rightwall = Bodies.rectangle(1100, 0, 10, 1500,walloption)
      var leftwall = Bodies.rectangle(0, 0, 10, 1500,walloption)

    //   BodyM.setVelocity(circleA, {x: 3, y: -10})
      BodyM.set(circleA, { frictionAir:0 });

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
    Composite.add(engine.world, [boxA, boxB, ground, circleA, rightwall, leftwall]);

      // / run the renderer
      Render.run(render);

      // create runner
      var runner = Runner.create();

      // run the engine
      Runner.run(runner, engine);
      
    }

    const renderText = () =>{
        console.log(document.getElementsByTagName("canvas")[0])
        var ctx= document.getElementsByTagName("canvas")[0].getContext("2d");
        console.log(ctx)
        var fontsize = 20;
        var fontfamily = "Arial"; 
        var color = "#EEEEEE";
            
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        ctx.fillStyle=color;
        ctx.font = fontsize + 'px '+fontfamily;
        ctx.fillText('targetBody.render.text',200,200);
    }

    useEffect(() => {
        init();
        renderText();
    }, [])

    return (
    <div
        ref={boxRef}
        style={{
        width: 300,
        height: 300,
    }}
    >
      {/* <canvas ref={canvasRef} /> */}
    </div>
    )
}

export default Ballfall