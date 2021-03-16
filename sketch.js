
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(964,177,30);
	mango3 = new mango(905,180,30);
	mango4 = new mango(1123,51,30);
	mango5 = new mango(1000,81,30);
	mango6 = new mango(1075,222,30);
	mango7 = new mango(1215,189,30);
	mango8 = new mango(1058,116,30);
	mango9 = new mango(952,263,30);
	mango10 = new mango(1208,138,30);
	mango11 = new mango(1046,180,30);
	mango12 = new mango(1150,205,30);
	mango13 = new mango(1023,251,30);

	stoneObj = new Stone(235,420,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new Launcher(stoneObj.body,{
		x:235,
		y:420
	})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",2,20);
  image(boy ,200,340,200,300);
  //text(mouseX + ',' + mouseY,2,40);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  stoneObj.display();

  groundObject.display();
  launcherObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);
  detectCollision(stoneObj,mango13);
}

function mouseDragged(){
	Body.setPosition(stoneObj.body,{
		x:mouseX,
		y:mouseY
	})
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stoneObj.body,{
			x:235,
			y:420
		})
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
		Body.setStatic(lmango.body,false);
	}
}