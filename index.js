const gap = 20;
// TO RANDOMIZE THE GAP (DENSITY) A LITTLE BIT USE THE LINES BELOW:
//
// const gap = randomGap();
// function randomGap() {
//   return Math.floor(Math.random() * 10 + 15);
// }
//
const lineWeight = 4;
//
// TO RANDOMIZE THE LINE WEIGHT A LITTLE BIT USE THE LINES BELOW:
//
// const lineWeight = randomWeight();
// function randomWeight() {
//   return Math.floor(Math.random() * 3 + 3);
// }
//
const backgroundColor = "#161a1d";

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function zeroOrOne() {
  return Math.floor(Math.random() * 2);
}

function setup() {
  createCanvas(windowWidth * 0.999, windowHeight * 0.999);
}

function draw() {
  background(backgroundColor);
  stroke(randomColor(), randomColor(), randomColor());
  strokeWeight(lineWeight);
  for (y = 0; y <= windowHeight; y += gap) {
    for (x = zeroOrOne() * gap; x <= windowWidth; x += gap) {
      line(x, y, x + gap, y);
      x += gap;
    }
  }
  for (x = 0; x <= windowWidth; x += gap) {
    for (y = zeroOrOne() * gap; y <= windowHeight; y += gap) {
      line(x, y, x, y + gap);
      y += gap;
    }
  }
  noLoop();
}
