
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Box1,Box2,Box3,Ground1,Ball1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground1 = new Ground(400,680,800,20)
Box1 = new Box(400,620,100,10)
Box2 = new Box(500,620,100,10)
Box3 = new Box(450,670,10,100)
Ball1 = new Ball(100,650,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Ground1.display()
Box1.display()
Box2.display()
Box3.display()
Ball1.display()
  drawSprites();
 
}



