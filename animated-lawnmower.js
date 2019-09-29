function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
var y = 0;
var v = 0;
var z = 0;

function draw() {
  if (h<100){
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();
   
if (h>20){
   fill(random(0,20), random(120,150), 240);
ellipse(x,height-20-random(h),10,10); 
}
  }  
  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if(h>100){
fill(255);
    rect(0, 0, y, height-100+v);
    y = y + 5; 
    if (y>400){
    y=0;
      v = v + 5 ;
    }
  }
  
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
