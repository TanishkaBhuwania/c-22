//step1 = inculde matter.js in index.html
//step2 = namespacing= give short forms to the long names for the object in mattter.js
//they will be perfferd with the same name always,so we write const
const Engine = Matter.Engine;//creates physics engine 
const World= Matter.World;//creates physics world where we can add objects 
const Bodies = Matter.Bodies;//creats objects to be added to the world 

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    //step3 = create the engine and the world 
    engine = Engine.create();
    world = engine.world;
    //create the properties of the ground 

    var ground_options ={
        isStatic: true
    }
//step4 = ceate the body with the properties
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    //step5 = add the bodies to the world 
    World.add(world,ground);

    var ball_options = {
        restitution:1.0
    }

    ball = Bodies.circle(200,100,20,ball_options
    );
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //step6 = display the bodies 
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}