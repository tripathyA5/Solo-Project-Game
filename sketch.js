
var player;
var plasticBottle;
var darkCloud;
var pbIMG;
var playerIMG;
var dcIMG;
var darkCloudGroup;
var plasticBottleGroup;
var score=0;
var gameState=0;
var start;
var grass;
var bgIMG;
var paperGroup
var paper;
var procceed;
var garbage;
var garbageGroup
function preload(){
pbIMG=loadImage("bottle.png");
playerIMG=loadImage("boy.png");
dcIMG=loadImage("darkcloud.png");
bgIMG=loadImage("grass.png")
}


function setup() {
  createCanvas(800,displayHeight);
  grass=createSprite(400,displayHeight/2,800,displayHeight);
  grass.addImage(bgIMG);
  
  
player=createSprite(400,400,50,50);
player.visible=false;
player.addImage(playerIMG);
player.scale=0.2;

plasticBottleGroup=new Group();
darkCloudGroup=new Group();
paper=new Group();
garbageGroup=new Group();
start=createSprite(400,225);
start.visible=false;

procceed=createSprite(400,400,50,50);
procceed.visible= true;
 

grass.scale=6;
  
  
}

function draw() {
  background(180);
drawSprites();

grass.x=player.x;
grass.y=player.y;
 

  if(gameState===0){
   start.visible=true;
    text("This game is to show the importance of Environmental Safety. A simple act of picking up a water bottle can make a big difference in our world.",25,100);

   
  }
  if(mousePressedOver(start)){
    gameState=1;

  }
  if(gameState===1){
    player.visible=true;
    start.visible=false;
    text("Environment Health:"+score,player.x-200,player.y);
    start.destroy();
    spawnBottles();
    spawnClouds();
    if(keyDown("UP_ARROW")){
      player.velocityY=-3;
    }
    if(keyDown("DOWN_ARROW")){
      player.velocityY=3;
    }if(keyDown("RIGHT_ARROW")){
      player.velocityX=3;
    }if(keyDown("LEFT_ARROW")){
      player.velocityX=-3;
    
    }
   for(var i=0;i<plasticBottleGroup.length;i++){

   if( plasticBottleGroup.get(i).isTouching(player)){
      plasticBottleGroup.get(i).destroy();

      score=score+1;
      }
    }
    for(var i=0;i<darkCloudGroup.length;i++){
      if(darkCloudGroup.get(i).isTouching(player)){
       darkCloudGroup.get(i).destroy();
        score=score-1;
        }
      }
    }
      if(gameState===2){
        //text("Congrats, You have Made Ito To The Next Level!!!",25,100);
        //procceed=createSprite(400,400,50,50);
      //  if(mousePressedOver(procceed)){
        procceed.visible = false;
       spawnGarbage();
       spawnPaper();
       if(keyDown("UP_ARROW")){
        player.velocityY=-3;
      }
      if(keyDown("DOWN_ARROW")){
        player.velocityY=3;
      }if(keyDown("RIGHT_ARROW")){
        player.velocityX=3;
      }if(keyDown("LEFT_ARROW")){
        player.velocityX=-3;
      
      }
         // player.visible=true;
          //darkCloud.visible=true;
          //plasticBottle.visible=true;
          text("Welcome to second level", 200,400);
          for(var i=0;i<garbageGroup.length;i++){
            if(garbageGroup.get(i).isTouching(player)){
             garbageGroup.get(i).destroy();
              score=score-2;
      }
    }
    for(var i=0;i<paperGroup.length;i++){

      if( paperGroup.get(i).isTouching(player)){
         paperGroup.get(i).destroy();
   
         score=score+2;
         }
       }
  }
  
  

timer();
}


function timer(){
setTimeout(bottlesHeld,10000);
}

function bottlesHeld(){
if(score>0){
  text('Good job!!!!',25,100);
  text("Congrats, You have Made It To The Next Level!!!",25,100);
 
  if(mousePressedOver(procceed)){
  gameState = 2;
  console.log("state :2");
  }
}
else{ 
  text("Better luck next time", 25,100);
  console.log("lost");
}
}


function spawnBottles(){
  if(World.frameCount%90===0){
    plasticBottle=createSprite(random(0,800),random(0,800),15,15);
    plasticBottle.shapeColor="blue";
    plasticBottle.addImage(pbIMG);
    plasticBottle.scale=0.2;
    plasticBottleGroup.add(plasticBottle);
  }
}
function spawnPaper(){
  if(World.frameCount%90===0){
    console.log("paper");
   paper=createSprite(random(0,800),random(0,800),15,15);
   paper.shapeColor = "blue"
  //paper.addImage(pbIMG);
    paper.scale=0.2;
   paperGroup.add(paper);
  }
}

function spawnClouds(){
  if(World.frameCount%300===0){
   darkCloud=createSprite(random(0,800),random(0,800),20,20);
   darkCloud.shapeColor="black";
   camera.position.x=player.x;
   camera.position.y=player.y;
  darkCloud.addImage(dcIMG);
  darkCloud.scale=0.2;
darkCloudGroup.add(darkCloud);
  }
}
function spawnGarbage(){
  if(World.frameCount%100===0){
    console.log("garbage");
   garbage=createSprite(random(0,800),random(0,800),20,20);
   camera.position.x=player.x;
   camera.position.y=player.y;
  //garbage.addImage(dcIMG);
  garbage.scale=0.2;
garbageGroup.add(garbage);
  }
}



