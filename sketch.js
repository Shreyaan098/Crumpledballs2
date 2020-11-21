const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
 var ground1,ball,dustbin1,dustbin2,dustbin3;
var binImage
 function preload(){
	binImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground1=new ground(700,680,1400,20);

	dustbin1=new bin(1100,630,20,100,PI/2);
	dustbin2=new bin(1170,660,120,20,PI/2);
	dustbin3=new bin(1240,630,20,100,PI/2);
	
	ball=new paper(180,450,40);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER)
  background("white");
 
  image (binImage,dustbin2.body.position.x-95,dustbin2.body.position.y-190,190,200);

  dustbin1.display();
  //dustbin2.display();
  dustbin3.display();

  ball.display();
  ground1.display();

 
  drawSprites();
 
}

function keyPressed (){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}