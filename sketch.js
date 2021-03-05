
var engine, world;
var dustbin1,dustbin2,dustbin3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
  
    dustbin1=new Dustbin(900,300,50,150);
    dustbin2=new  Dustbin(1000,300,150,50);
    dustbin3=new  Dustbin(1100,300,50,150);



	ground = new Ground(600,height,1200,20)
	

	
	

	
	

	//Create a Ground
	
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

 
  strokeWeight(7);
  stroke("red");
  fill("white");
 ellipse(156,360,50,50);


  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 ground.display();
 function Keypressed(){
if(KeyCode===UP_ARROW){

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  

}

 }
  drawSprites();
 
}




