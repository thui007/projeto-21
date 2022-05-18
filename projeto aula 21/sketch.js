
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var engine;
var world;
var leftSight
var rightSight
var ground

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bola_options={
		restituition: 0.3,
		isStatic: false,
		friction: 0,
		density: 1.2
	}
    
	bola = Bodies.circle(260,100,20,bola_options);
    World.add(world,bola);

	ground = new Ground(width/2,670,width,20);

	leftSight = new Ground(1100,600,20,120);

	rightSight = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x,bola.position.y,20);

  ground.coloquendo();
  leftSight.coloquendo();
  rightSight.coloquendo();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bola,bola.position,{x:85,y:-85});
	}
}


