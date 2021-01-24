//matter.js --> Engine, World, Bodies
//name Spacing --> reducing the name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

var ground;

function setup() {
  createCanvas(400,400);
  //create the Engine --> Matter.Engine.create() => Engine.create()
  engine = Engine.create();

  //create the world for the physics Engine
  world = engine.world;

  //static & dynamic 
  //static = cannot move; rest 
  var objectOptions = {
      isStatic:true
  }

  //create the Bodies (rectangular/ circular) --> Bodies.rectangle(x,y,w,h) / Bodies.circle(x,y,r)
  object = Bodies.rectangle(200,100,50,50)

  ground = Bodies.rectangle(200,380,400,20, objectOptions)


  //add the bodies inside the world --> World.add(where?, what?)
  World.add(world,object);
  World.add(world,ground);

  console.log(object.position.y);
}

function draw() {
  background("black");  
  //update the phy eng --> Engine.update(engine);
  Engine.update(engine);
  rectMode(CENTER);
  fill ("red")
  rect(object.position.x,object.position.y,50,50);
fill("blue");
  rect(ground.position.x,ground.position.y,400,20)



  drawSprites();
}

//sprite (ball) --> ball.x = 100;
//object from phy eng (box)--> box.(body.)position.x