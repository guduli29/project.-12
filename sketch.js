var path,path_1,invisiblepath
var surfer,surfer_1

function preload(){
  //pre-load images
  path_1=loadImage("path.png")
  surfer_1=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage("path",path_1)
   path.velocityY=2
  path.scale=1.2
  path.y= path.height/2
  
  surfer=createSprite(190,160,20,50)
  surfer.addAnimation("surfer",surfer_1)
  surfer.velocityY=2
  surfer.scale= 0.1
  invisiblepath=createSprite(200,200)
  
  invisiblepath.visible= false

}

function draw() {
  background(220);
  if(keyDown("space")&& surfer.y>100){
surfer.velocityY= -4

  }

if(path.y<400){
path.y= height/2

}

surfer.collide(invisiblepath)
 drawSprites();
}
