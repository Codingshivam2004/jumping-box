var redStage,yellowStage;
var greenStage,blueStage
var purpleStage,pinkSatge;
var orangeStage,greyStage;
var skyblueStage,indigoStage;
var box;

function preload(){

}

function setup() {
  createCanvas(415,400);
 var redStage = createSprite(5,390,60,10);
  redStage.shapeColor = "red";
  
  var yellowStage = createSprite(62,390,40,10);
  yellowStage.shapeColor = "yellow";
  
  var greenStage = createSprite(108,390,40,10);
  greenStage.shapeColor = "green";
  
  var blueStage = createSprite(156,390,40,10);
  blueStage.shapeColor = "blue";
  
  var purpleStage = createSprite(204,390,40,10);
  purpleStage.shapeColor = "purple";
  
  var pinkStage = createSprite(252,390,40,10);
  pinkStage.shapeColor = "pink";
  
  var orangeStage = createSprite(300,390,40,10);
  orangeStage.shapeColor = "orange";
  
  var greyStage = createSprite(348,390,40,10);
  greyStage.shapeColor = "grey";
  
  var skyblueStage = createSprite(396,390,40,10);
  skyblueStage.shapeColor = "skyblue";
  
  var box = createSprite(200,200,7,7);
 
}

function draw() {
  //moving box
   box.y = World.mouseY;
   box.x = World.mouseX;
 drawSprites();
}