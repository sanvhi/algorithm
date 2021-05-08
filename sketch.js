var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300,200,40,40);
  car.shapeColor = "red";
  car.velocityX=4;
  wall = createSprite(800,200,30,100);
  wall.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(car,wall)){
   car.shapeColor = "pink";
 }
  bounce(car,wall);
  collide(car,wall);
  drawSprites();
}

