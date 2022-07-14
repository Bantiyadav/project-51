var Canvas
var   trackImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score 

var hero_running
var hero
var track,trackImage;

var obstaclesGroup,obstacle1,obstacle2;

function preload(){
  trackImage = loadImage("track.jpg");
hero_running=loadAnimation("sprite1.png","sprite2.png","sprite3.png")
obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
}

function setup() {
  createCanvas(1500,700);

  track=createSprite(300,300);
track.addImage(trackImage);
  track.velocityX= -8;
  track.scale=1.2;
  

  hero=createSprite(40, 200, 100, 50);
  hero.addAnimation("running",hero_running)
  hero.scale=0.3;
  obstaclesGroup = createGroup();
  score=0;

}

function draw() {
  background(0);
  track.velocityX= -8;
  hero.y= World.mouseY;
    
  text("Score: "+ score, 500,50);
  if(gameState === PLAY){
       
    track.velocityX = -4;
   
    score = score + Math.round(frameCount/60);
    
    if (track.x < 0){
      track.x = track.width/2;
    }}
  
    if(obstaclesGroup.isTouching(hero)){
      gameState = END;}
      else if (gameState === END) {
       
        track.velocityX = 0;
       
       obstaclesGroup.setVelocityXEach(0);
      }
  drawSprites();
  }
  function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(200,165,10,40);
      obstacle.velocityX = -6;
      
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
       }
       obstacle.scale = 0.9;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }}