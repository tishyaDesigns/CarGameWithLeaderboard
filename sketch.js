var ball,database;
var position;

var gameState=0;
var form,game;
var playerCount;
var player;
var allPlayers;

var car1,car2,car3,car4;
var cars=[];
var y=0;
var car1Img,car2Img,car3Img,car4Img,trackImg,obsImg,goldImg,silverImg,bronzeImg;
var x;
var slidingSound;
var obstacle,obstacleGroup;
var passedFinished=false;
var finishedPlayers;



function preload(){
   car1Img=loadImage('images/car1.png');
   car2Img=loadImage('images/car2.png');
   car3Img=loadImage('images/car3.png');
   car4Img=loadImage('images/car4.png');
   trackImg=loadImage('images/track.jpg');  
   obsImg=loadImage('images/f1.png');
   slidingSound=loadSound('sound/sliding.mp3');
   goldImg=loadImage('images/gold.png');//Changes
   silverImg=loadImage('images/silver.png');
   bronzeImg=loadImage('images/bronze.png');
}

function setup(){
    createCanvas(displayWidth,displayHeight);
   console.log(displayHeight);
    
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();
    

}

function draw(){

  if(playerCount==4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
      
  }
  if(finishedPlayers===4){
      game.update(2);
  }

  if(gameState===2){
     game.displayRanks();
  }
    

}



