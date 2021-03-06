
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bodies;
var object, ground, platform, object2;

var backgroundImg;


function preload(){
  
backgroundImg = loadImage("assets/bg.png");



}
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

 
box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
pig = new Pig(810,350);
log = new Log(810,260,300,PI/2);

box3 = new Box(700, 240,70,70);
box4 = new Box(920,240,70,70);
pig2 = new Pig(810,220);
log2 = new Log(810,180,300,PI/2);

box5 = new Box(810,160,70,70);
log3 = new Log(760,120,200,PI/7);
log4 = new Log(870,120,200,-PI/7);

bird = new Bird(100,100);




ground = new Ground(600,height,1200,10);
platform = new Ground(150,305,300,170);

  
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);
  //circle(object.position.x,object.position.y,20);
  box2.display();
  box1.display();
  ground.display();
  pig.display();
  log.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  log3.display();
  log4.display();
  box5.display();

  bird.display();
  platform.display();

  drawSprites();
}