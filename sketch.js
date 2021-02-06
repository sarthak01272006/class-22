const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var op={
  isStatic:true
}
object=Bodies.rectangle(200,390,50,50,op);
var opp={
  restitution:1
}
World.add(world,object);
ball=Bodies.circle(200,200,10,opp);
World.add(world,ball);

console.log(object);
console.log(object.mass);
console.log(object.position.x);
}


function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(object.position.x,object.position.y,400,10);
 ellipseMode(RADIUS); 
ellipse(ball.position.x,ball.position.y,10,10);
}