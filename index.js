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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(random(50, 256), random(50, 256), random(50, 256));
  strokeWeight(lineWeight);
  for (y = 0; y <= height; y += gap) {
    for (x = random([0, 1]) * gap; x <= width; x += gap) {
      line(x, y, x + gap, y);
      x += gap;
    }
  }
  for (x = 0; x <= width; x += gap) {
    for (y = random([0, 1]) * gap; y <= height; y += gap) {
      line(x, y, x, y + gap);
      y += gap;
    }
  }
  noLoop();
}
