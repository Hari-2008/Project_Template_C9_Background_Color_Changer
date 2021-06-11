var btn_red;
var btn_green;
var btn_blue;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  
btn_red = createButton("RED");
btn_red .position(100,50);
btn_red .mousePressed(red);

btn_green = createButton("GREEN");
btn_green.position(250,50);
btn_green.mousePressed(green);

btn_blue = createButton("BLUE");
btn_blue.position(250,50);
btn_blue.mousePressed(blue);  
 
}

function draw() {
  background(r,g,b);
}
functionred red_bg()
{
  r = 225;
  g = 0;
  b = 0;
}
functionred green_bg()
{
  r =  0;
  g = 225;
  b = 0;
} 

functionred green_bg()
{
  r =  0;
  g = 0;
  b = 225;
} 
