
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,ground1,paper1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1 = new ground(width/2,670,width,20);
	dustbin1 = new dustbin(1200,650);
	paper1 = new paper(50, 600, 50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground1.display();
  dustbin1.display();
  paper1.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x: .85, y: -.85})
	}
}