var rect
function setup() {
  createCanvas(400,400);
  rect = createSprite(200,200,60,40)
}

function draw() 
{
  background(30);

  if(keyDown("a")){
    rect.x = rect.x + 4
   }
   
   if(keyDown("d")){
    rect.x = rect.x - 4
   }
 
 if(keyDown("w")){
   rect.y = rect.y + 4
 }
 
 if(keyDown("s")){
   rect.y = rect.y - 4
 }

drawSprites()
}


