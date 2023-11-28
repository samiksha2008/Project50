var bg,bgImg;
var player,playerImg
var obstacle,obstacleImg;
var ob,ob1,ob2,ob3,ob4,ob5;
var obstacle1,obstacle1Img;
var obstacle2,obstacle2Img;
var obstacle3,obstacle3Img;
var obstacle4,obstacle4Img;
var obstacle5,obstacle5Img;
var score;

function preload(){
  bgImg=loadImage("space1.png")
  playerImg=loadImage("alein.png")
  obstacleImg=loadImage("the.png")
  obstacle1Img=loadImage("ss.png")
  obstacle2Img=loadImage("y.png")
  obstacle3Img=loadImage("o.png")
  obstacle4Img=loadImage("uu.png")
  obstacle5Img=loadImage("pp.png")

}




function setup() {
  createCanvas(windowWidth,windowHeight);
 
  bg = createSprite(displayWidth/2-180,displayHeight/2-90,20,20)
  bg.addImage(bgImg)
  bg.scale = 0.5

  player = createSprite(displayWidth-1150, displayHeight-450, 50, 50);
 player.addImage(playerImg)
   player.scale = 0.05
   
  

   ob = new Group();
   ob1 = new Group();
   ob2 = new Group();
   ob3 = new Group();
   ob4 = new Group();
   ob5 = new Group();

}


function draw() {
  background(0);  



  if (keyDown("left")) {
    player.velocityX=-5;
    player.velocityY=0;
    }
    
    if (keyDown("right")) {
    player.velocityX=5;
    player.velocityY=0;
    }

    createEdgeSprites();


    Obstacles();
    Obstacless();
   Comp()
   stop()
   run()
   go()
    

   if(keyDown("space")){

   }



    ob.setVelocityXEach(0);
    ob1.setVelocityXEach(0);
    ob2.setVelocityXEach(0);
    ob3.setVelocityXEach(0);
    ob4.setVelocityXEach(0);
    ob5.setVelocityXEach(0);
   
    



  drawSprites();
}


function Obstacles(){
  if (World.frameCount % 200 == 0) {
  obstacle = createSprite(600,Math.round(random(50,250)));
  obstacle.scale=0.5;
  obstacle.addImage("ob",obstacleImg)
  obstacle.velocityY=3;
  obstacle.setLifetime=130;
 ob.add(obstacle);}
  }

  function Obstacless(){
    if (World.frameCount % 250 == 0) {
    obstacle1 = createSprite(800,Math.round(random(50,250)));
    obstacle1.scale=0.5;
    obstacle1.addImage("ob",obstacle1Img)
    obstacle1.velocityY=3;
    obstacle1.setLifetime=130;
   ob1.add(obstacle1);}
    }

    function Comp(){
      if (World.frameCount % 300 == 0) {
      obstacle2 = createSprite(400,Math.round(random(50,250)));
      obstacle2.scale=0.2;
      obstacle2.addImage("ob",obstacle2Img)
      obstacle2.velocityY=3;
      obstacle2.setLifetime=130;
     ob2.add(obstacle2);}
      }

      function run(){
        if (World.frameCount % 350 == 0) {
        obstacle3 = createSprite(100,Math.round(random(50,250)));
        obstacle3.scale=0.2;
        obstacle3.addImage("ob",obstacle3Img)
        obstacle3.velocityY=3;
        obstacle3.setLifetime=130;
       ob3.add(obstacle3);}
        }

        function stop(){
          if (World.frameCount % 350 == 0) {
          obstacle4 = createSprite(900,Math.round(random(50,250)));
          obstacle4.scale=0.5;
          obstacle4.addImage("ob",obstacle4Img)
          obstacle4.velocityY=3;
          obstacle4.setLifetime=130;
         ob4.add(obstacle4);}
          }

          function go(){
            if (World.frameCount % 300 == 0) {
            obstacle5 = createSprite(200,Math.round(random(50,250)));
            obstacle5.scale=0.3;
            obstacle5.addImage("ob",obstacle5Img)
            obstacle5.velocityY=3;
            obstacle5.setLifetime=130;
           ob5.add(obstacle5);}
          }