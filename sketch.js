
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1;
var rooof;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rooof = new Roof(400,200,400,10);
    ball1 = new Bob(400,350);
    chain= new Chain(rooof.body,ball1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rooof.display();
  chain.display();
  //drawSprites();
 
}



