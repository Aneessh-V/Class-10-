var sea;
var ship;


function preload(){
seaImg = loadImage("sea.png");
shipAnimation = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
   sea = createSprite(100,100,100,100);
   ship = createSprite(200,100,50,50);
  sea.addImage(seaImg);
  sea.scale = 0.5
  ship.addAnimation("moving",shipAnimation);
  ship.scale = 0.5
}

function draw() {
  background("white");

  sea.velocityX = -2

 if(sea.x < 0){
 sea.x = sea.width/2;
 }

  drawSprites();
}