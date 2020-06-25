let scenario;
let sceneImage;

let character;
let characterImage;
const characterMatriz = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

let enemy
let enemyCharacter
const enemyMatriz = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

let songGame;
let jumpingSound;

function preload() {
  sceneImage = loadImage('images/scene/forest.png')
  characterImage = loadImage('images/character/running.png')
  enemyImage = loadImage('images/enemies/drop.png')
  songGame = loadSound('songs/soundTrack.mp3')
  jumpingSound = loadSound('songs/jumpingSound.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneImage, 2.5)
  character = new Character(characterMatriz, characterImage, 0, 110, 135, 220, 270)
  enemy = new Enemy(enemyMatriz, enemyImage, width - 53, 52, 52, 104, 104)
  frameRate(40)
  songGame.loop()
}

function keyPressed() {
  if(key == 'ArrowUp') {
    character.jump()
    jumpingSound.play()
  }
}

function draw() {
  scenario.show()
  scenario.move()

  character.show()
  character.applyGravity()

  enemy.show()
  enemy.move()
  // noFill()
  // rect(enemy.x,
  //   enemy.y,
  //   enemy.widthSprite,
  //   enemy.heightSprite)

  if(character.isColliding(enemy)) {
    console.log('colidiu')
    noLoop()
  }
}




