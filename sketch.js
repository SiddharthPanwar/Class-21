var fixedRect , movingRect, gamingObject1, gamingObject2, gamingObject3;
function setup() 
{ createCanvas(800,400); 
  fixedRect = createSprite(300,200,50,100); 
  movingRect = createSprite(400,200,100,50); 
  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green"; 
  gamingObject1 = createSprite(100,200,50,100); 
  gamingObject1.velocityX = 5;
  gamingObject1.shapeColor = "yellow";
  gamingObject2 = createSprite(500,200,50,100);
  gamingObject2.velocityX = -5; 
  gamingObject2.shapeColor = "orange";
  gamingObject3 = createSprite(700,200,50,100); 
  fixedRect.debug = true; 
  movingRect.debug = true; 
}
function draw() 
{ background(255,255,255); 
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY; 
  if ( isTouching(movingRect, gamingObject3) )
  { gamingObject3.shapeColor = "black";
   movingRect.shapeColor = "black"; 
  } 
   else{ 
     gamingObject3.shapeColor = "red"; 
     movingRect.shapeColor = "red";
     } 
     
     bounceOff(gamingObject1 , gamingObject2);

     drawSprites(); 
    }

