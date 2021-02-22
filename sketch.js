
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
	

  	roof = new Ground(400,100,300,30);
    Bob1 = new bob(300,300,25);
    Bob2 = new bob(350,300,25);
    Bob3 = new bob(400,300,25);
    Bob4 = new bob(450,300,25);
    Bob5 = new bob(500,300,25);
    chain1 = new chain(Bob1.body,{x:300,y:100});
    chain2 = new chain(Bob2.body,{x:350,y:100});
    chain3 = new chain(Bob3.body,{x:400,y:100});
    chain4 = new chain(Bob4.body,{x:450,y:100});
    chain5 = new chain(Bob5.body,{x:500,y:100});

	
	  
  
	 


}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
    keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-5,y:-5})
	}
}