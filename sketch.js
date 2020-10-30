const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,395,400,10,options);
  World.add(world,ground)
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
}

function draw() {
  background(0,0,0);  

  Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}