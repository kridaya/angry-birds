const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1;
var ground;
function setup() {
 
 
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world= engine.world;
 box=new Box(200,300,50,50);
 box1=new Box(210,100,50,140);
 ground=new Ground(200,390,400,20);
}

function draw() {
  background(0); 
  Engine.update(engine);
 box.display();
 box1.display();
 ground.display();
}