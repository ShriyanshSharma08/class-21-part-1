//to declare all variables globally
var rect1, rect2;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  
  //sprite of rect1
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = 'green';
  
  //sprite of rect2
  rect2 = createSprite(400,100,30,50);
  rect2.shapeColor = 'green';

  //sprite of object1
  object1 = createSprite(800,100,20,20);
  object1.shapeColor='green';

  //sprite of object2
  object2 = createSprite(100,100,40,40);
  object2.shapeColor='green';

  //sprite of object3
  object3 = createSprite(200,200,50,50);
  object3.shapeColor='green';

  //sprite of object4
  object4 = createSprite(500,500,60,70);
  object4.shapeColor='green';
}

function draw() {
  background(0);  

  //to make object1 and object2 move with mouse pointer
  object1.x = World.mouseX;
  object1.y = World.mouseY;
  
  //to make the color blue if is touching condition is true
  //to write the parameters for the objects which we want to make touch
  if (isTouching(object1, object2)) {
    object1.shapeColor='blue';
    object2.shapeColor='blue';
  }

  //if is touching condition is not working then make the color remain green
  else {
    object1.shapeColor='green';
    object2.shapeColor='green';
  }

  drawSprites();
}

