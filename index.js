// const width = 500;
// const height = 500;
const gridGap = 20;
const colorBackground = "#161a1d";
// const colorLine = "#faae7b";

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 200);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function chance() {
  return Math.floor(Math.random() * 2);
}

function draw() {
  background(colorBackground);
  stroke(randomColor(), randomColor(), randomColor());
  strokeWeight(3);
  for (y = 0; y <= windowHeight; y += gridGap) {
    for (x = chance() * gridGap; x <= windowWidth; x += gridGap) {
      line(x, y, x + gridGap, y);
      x += gridGap;
    }
  }
  for (x = 0; x <= windowWidth; x += gridGap) {
    for (y = chance() * gridGap; y <= windowHeight; y += gridGap) {
      line(x, y, x, y + gridGap);
      y += gridGap;
    }
  }
  noLoop();
}
