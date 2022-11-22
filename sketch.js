// x and y for my character
var characterX = 90;
var characterY = 90;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(420,425,78);
    stroke(144);
    fill(20,220,300);
    
  
    createBorders(21);

    createText();
  

    
    drawCharacter();
    characterMovement();

squareCharacter();
squareMovement();
    
    fill(23,45,314);
    square(shapeX, shapeY, 100);
    fill(523,45,614);
    circle(shapeX, shapeY, 40);

    
    if(characterX > width && characterY > width-50)
    {
        fill(155,34,27);
        stroke(2);
        textSize(70);
        text("You Win!", width/3-20, height/3-60);
    }

   
   
}
function squareMovement()
{
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


shapeX += shapeXSpeed;
shapeY += shapeYSpeed;

if(shapeX > width)
{
   shapeX = 0;
}
if(shapeX < 0)
{
   shapeX = width;
}
if(shapeY > height)
{
   shapeY = 0;
}
if(shapeY < 0)
{
   shapeY = height;
}

}

function squareCharacter()
{
    fill(520,120,230);
    square(mouseShapeX, mouseShapeY, 55);

}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
       
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;

}
function createText()
{
    textSize(15);
    fill(22,33,22);
    text("EXIT!", width-50,height-50)
}

function drawCharacter()
{
    fill(53,20,333);
    circle(characterX,characterY,25);
    fill(123,45,314);
    square(shapeX, shapeY, 100);
    fill(523,45,614);
    circle(shapeX, shapeY, 40);
}
function createBorders(thickness)
{
    
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);  
    rect(0, height-10,width, thickness);
    rect(width-10,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
