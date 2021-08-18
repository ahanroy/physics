
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball
var leftSide
var rightSide



function setup() {
	createCanvas(2000, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  groundobj=new Ground(width/2,670,width,20)
    leftSide=new Ground(1100,600,20,120)
    rightSide=new Ground(1000,500,10,100)

	Engine.run(engine);
  
  var ball_options={
   isStatic:false,
   restitution:0.75,
   density:1.2,
   friction:0
  }

ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
rectMode(CENTER);
ellipseMode(RADIUS)
}


function draw() {
 
  background(0);
 
  groundobj.show()
  leftSide.show()

 ellipse(ball.position.x,ball.position.y,20,20)
  
}




 function keyPressed(){
  if(keyCode===LEFT_ARROW){
  Body.applyForce(ball,ball.position,{x:0,y:0})
  }
  }

  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
    Body.applyForce(ball,ball.position,{x:105,y:105})
    }
    }
  