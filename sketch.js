let scenario;
let sceneImage;

let character;
let characterImage;

let songGame;

function preload() {
  sceneImage = loadImage('images/scene/forest.png')
  characterImage = loadImage('images/character/running.png')
  songGame = loadSound('songs/soundtrack.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneImage, 2.5)
  character = new Character(characterImage)
  songGame.loop()
}

function draw() {
  scenario.show()
  scenario.move()

  character.show()
}




