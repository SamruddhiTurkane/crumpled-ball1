
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

function setup() {
	var canvas = createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper = new Paper(100,60,40,10);

	ground = new Ground(400,680,1600,20);

	dustbin = new Dustbin(1200,650);

	paper = new Paper(200, 450, 40);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

 dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Mattar.Body.applyForce(paper.body,paper.body.position, {x:85,y:-85})
	}
}


