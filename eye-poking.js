var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("ouch.wav");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB,400, 400, 100);
}

function draw() {
  background(45, 280, 100);
  
  // Left eye blink
  if (dist(50, 200, 150, 200)) {
    if (mouseIsPressed) {
      mySound.play();
      fill(45, 280, 100);
      bezier(50, 200, 80, 200, 120, 200, 150, 200);
      bezier(50, 200, 80, 200, 120, 200, 150, 200);
      }
    }
  
  // Right eye blink
  if (dist(250, 200, 350, 200)) {
    if (mouseIsPressed) {
      mySound.play();
      fill(45, 280, 100);
      bezier(250, 200, 280, 200, 320, 200, 350, 200);
      bezier(250, 200, 280, 200, 320, 200, 350, 200);
      }
    }
  
  // Left eye
  fill(400, 0, 100);
  bezier(50, 200, 80, 170, 120, 170, 150, 200);
  bezier(50, 200, 80, 220, 120, 220, 150, 200);
  fill(300, 200, 80);
  circle(100, 197, 36);
  fill(400, 0, 0);
  circle(100, 197, 12);
  
  // Right eye
  fill(400, 0, 100);
  bezier(250, 200, 280, 170, 320, 170, 350, 200);
  bezier(250, 200, 280, 220, 320, 220, 350, 200);
  fill(300, 200, 80);
  circle(300, 197, 36);
  fill(400, 0, 0);
  circle(300, 197, 12);
  
}
