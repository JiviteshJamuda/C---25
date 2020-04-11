const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var raindrop = [],ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ball = new Rain(random(10,100),10);
}

function draw() { 
  Engine.update(engine);
  ball.display();
  
}