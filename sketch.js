let sceneImage;

function preload() {
  sceneImage = loadImage('images/scene/forest.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(sceneImage);
}