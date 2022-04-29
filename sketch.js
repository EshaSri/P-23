const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var ball_option = { restitution:0.5 }
var b1,b2

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(500,590,1000,20);
  right = new Ground(950,500,20,200);
  left = new Ground(750,500,20,200);
  ball=Bodies.circle(200,40,10,ball_option)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10,10)
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(ball,ball.position,{x:0.02,y:-0.0125})
}
