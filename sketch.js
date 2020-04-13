const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var raindrop = [],ball;

function setup() {
  createCanvas(1250,625);
  engine = Engine.create();
  world = engine.world;
  ball = new Rain(random(10,100),random(1,400),10,10);
}

function draw() { 
  Engine.update(engine);
  ball.display();

  if (frameCount % 10 === 0){
    raindrop.push(new Rain(random(10,1250),random(1,600),random(10,20),random(10,20)))
  };

  for (var i = 0; i < raindrop.length; i++){
    raindrop[i].display();
  };

}