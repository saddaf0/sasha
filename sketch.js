
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shrimpButton , shrimpButtonImg;

var ocean , oceanImg;
var score = 0

function preload(){

  oceanImg = loadImage("ocean.jpg");
  s = loadImage("shrimpbutton.png");

}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;
//  shrimp = new Shrimp(200,200, 200, 100);
button = createSprite(100,100)
button.addImage("s",s)
button.scale=0.1


 }

function draw() 
{
  background(51);
  image(oceanImg,0,0,width,height);
  Engine.update(engine);

  /*for (var i = 0; i < shrimp; i++) {
    showShrimp(shrimp[i], i);
  }
  
 shrimp.display()*/

 if(mousePressedOver(button)){
  shrimps()
 }

 drawSprites()
 
}

/*function drop(){
  Matter.Body.applyForce(shrimp,{x:0,y:0},{x:0,y:+0.05})
  shrimp.display()
}*/

/*function showShrimp(shrimp, index) {
  if (shrimp) {
    shrimp.display();
    Matter.Body.applyForce(shrimp,{x:0,y:0},{x:0,y:+0.05})
  shrimp.visible = true
  
  }
}*/
function shrimps(){
  
 shrimp =createSprite(100,100,10,10);
 shrimp.addImage(s)
 shrimp.velocityY=2
 shrimp.lifetime=300
 shrimp.scale=0.1

  

}

