
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var ground1, launcher;
var stone1, rope1;
var boy1;

function preload()
{
	BoyImage = loadImage("boy.png");
}

function setup() 
{
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);

	tree1 = new tree(900, 340);

  ground1 = new ground(600, 680, 1200, 50);
  
  launcher = new ground(180, 500, 10, 10);

  mango1 = new mango(800, 340, 50, 50);
	mango2 = new mango(950, 250, 50, 50);
	mango3 = new mango(950, 50, 50, 50);
	mango4 = new mango(700, 190, 50, 50);
	mango5 = new mango(800, 200, 50, 50);
	mango6 = new mango(900, 150, 50, 50);
	mango7 = new mango(800, 300, 50, 50);
	mango8 = new mango(1100, 150, 50, 50);

	stone1 = new stone(180, 500, 50, 50);

	rope1 = new rope(stone1.body, launcher.body);

	boy1 = createSprite(250, 580, 50, 10);
	boy1.addImage(BoyImage);
	boy1.scale = 0.15;

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(255);
  
  tree1.display();
  ground1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();
  
  rope1.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);

  launcher.display();
  
  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}
function mouseReleased()
{
	rope1.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        rope1.attach(stone1.body);
    }
}

function detectCollision(Lstone, Lmango)
{
  var distance = dist(Lstone.body.position.x, Lstone.body.position.y, Lmango.body.position.x, Lmango.body.position.y)
  
  if(distance <=  Lmango.r + Lstone.r)
  {
    Matter.Body.setStatic(Lmango.body, false);
  }
}
