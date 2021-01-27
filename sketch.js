
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;

function preload()
{
  

}

function setup() {
	var canvas = createCanvas(1400, 700);
    engine = Engine.create();
     world = engine.world;
     ball1 = new Ball(200,400,40);
  ground = new Ground(800,670,1600,20);

  
//Log
log1 = new Log(1310,610,20,100)
  
log2 = new Log(1200,650,200,20)
log3 = new Log(1090,610,20,100)

    
  
          
  
}



function draw() {
  background(0);
  Engine.update(engine);

  ball1.display();  
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  
  
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});

  }
}




