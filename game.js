var ocean;
var hill;
var house;
var waves;

function preload() {
  waves = loadImage("pics/waves2.png");
}

function setup() {
  var canvas = createCanvas(539, 480);
  background(198, 227, 239);
  ocean = new Water(0, 400, width, 480);
  setupHouse();
  canvas.parent("game_canvas");


}

function draw() {
  hill.show();
  house.show();
  ocean.show();
  ocean.changeWaterLevel(0.1);
}



function setupHouse(){
  x = width - 150;
  y = 250;

  house = new House(x, y, 50, 50);
  hill = new Hill(x + 25, 575, 400, 600);
/*
  fill(0, 255, 0);
  stroke(0, 255, 0);
  ellipse(r_x + 25 , 575, 400, 600);

  fill(45);
  stroke(0);

  rect(r_x, r_y, 50, 50);
  triangle(r_x, r_y, r_x + 50, r_y, r_x + 25, r_y - 25);*/
}









function House(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;


  this.show = function() {
    fill(45);
    stroke(0);
    rect(this.x, this.y, this.w, this.h);
    triangle(this.x, this.y, this.x + 50, this.y, this.x + 25, this.y - 25);
  }
}


function Hill(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = function() {
    fill(0, 255, 0);
    stroke(0, 255, 0);
    ellipse(this.x, this.y, this.w, this.h);
  }
}



function Water(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.show = function() {
    stroke(27, 116, 153);
    fill(27, 116, 153);
    //rect(this.x, this.y, this.w, this.h);
    image(waves, this.x, this.y - 150, this.w, this.h);
  }

  this.changeWaterLevel = function(level) {
    this.y -= level;

    if (this.y < 250) {
      noLoop();
    }
  }
}
