//Create variables here
var dog,happyDog,database,foodS,foodstock,dogg;
function preload()
{
  //load images here
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dogg=createSprite(250,250,10,10);
  dogg.addImage(dog);
  dogg.scale=0.1;
  database=firebase.database();
  foodstock=database.ref("food");
  foodstock.on("value",readStock);

  
}


function draw() {  
background(46, 139, 87);
  if(foodS!==undefined){
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogg.addImage(happyDog);
dogg.scale=0.1;
}
  drawSprites();
  //add styles here
  textSize(30);
  fill("red");
  stroke("white");
  text("FOOD REMAINING:"+foodstock,200,200);
  textFont("algerian");
  textSize(20);
  fill("white");
  stroke("red");
  text("Note:Press UP_ARROW key to feed Drago Milk",210,300);

}
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("food").update({
    food:x
  })
}



