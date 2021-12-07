const gridGap = 20;
const colorBackground = "#161a1d";

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function zeroOrOne() {
  return Math.floor(Math.random() * 2);
}

function draw() {
  background(colorBackground);
  stroke(randomColor(), randomColor(), randomColor());
  strokeWeight(3);
  for (y = 0; y <= windowHeight; y += gridGap) {
    for (x = zeroOrOne() * gridGap; x <= windowWidth; x += gridGap) {
      line(x, y, x + gridGap, y);
      x += gridGap;
    }
  }
  for (x = 0; x <= windowWidth; x += gridGap) {
    for (y = zeroOrOne() * gridGap; y <= windowHeight; y += gridGap) {
      line(x, y, x, y + gridGap);
      y += gridGap;
    }
  }
  noLoop();
}
