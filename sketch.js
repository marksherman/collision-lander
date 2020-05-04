var surface;
var lander;

var x;
var y;

var landed = false;

function preload() {
  surface = loadImage('LunarSurface400.png');
  lander = loadImage('Lander.png');
}

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = 0;
}


// It detects if we hit the landing spot.
// Returns true if in the landing zone, false if not.
// I chose my landing spot to be at 30, 300, give or take 10 in each direction.
function checkForLanding(){
  return collidePointRect(mouseX, mouseY, x, y, 80, 63);
}


function draw() {
  print("x: " + x + " y: " + y);
  landed = checkForLanding();

  // gravity, always on until we've landed
  y += 1;
  // look for arrow key presses and drive the lander around

  // wrap around the moon:
  //  if the lander goes beyond the bottom of the canvas, bring it to the top
  //  also if the lander goes beyond the top, bring it around to the bottom
  if (y > height){
    y = 0;
  }

  image(surface, 0, 0);
  image(lander, x, y);

  if(landed){
    fill("white");
    textSize(35);
    text("You've Landed!", 60, 60);
  }
}
