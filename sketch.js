let scenario;
let sceneImage;

// Score
let score;

// Character
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
];

// Enemies
let enemy;
let bigEnemy;
let flyingEnemy;

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
];
const bigEnemyMatriz = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const flyingEnemyMatriz = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const enemies = []

// Songs
let songGame;
let jumpingSound;

// Screen
let gameOverImage

function preload() {
  sceneImage = loadImage("images/scene/forest.png");
  characterImage = loadImage("images/character/running.png");

  enemyImage = loadImage("images/enemies/drop.png");
  bigEnemyImage = loadImage("images/enemies/troll.png");
  flyingEnemyImage = loadImage("images/enemies/flyingDrop.png");

  songGame = loadSound("songs/soundTrack.mp3");
  jumpingSound = loadSound("songs/jumpingSound.mp3");

  gameOverImage = loadImage("images/assets/gameOver.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneImage, 2.5);
  score = new Score()
  character = new Character(
    characterMatriz,
    characterImage,
    0,
    30,
    110,
    135,
    220,
    270
  );
  const enemy = new Enemy(
    enemyMatriz,
    enemyImage,
    width - 52,
    30,
    52,
    52,
    109,
    93,
    10,
    100
  );
  const bigEnemy = new Enemy(
    bigEnemyMatriz,
    bigEnemyImage,
    width,
    0,
    200,
    200,
    400,
    400,
    10,
    2500
  );
  const flyingEnemy = new Enemy(
    flyingEnemyMatriz,
    flyingEnemyImage,
    width - 52,
    200,
    100,
    75,
    200,
    160,
    10,
    4500
  );

  enemies.push(enemy)
  enemies.push(bigEnemy)
  enemies.push(flyingEnemy)
  
  frameRate(40);
  songGame.loop();
}

function keyPressed() {
  if (key == "ArrowUp") {
    character.jump();
    jumpingSound.play();
  }
}

function draw() {
  scenario.show();
  scenario.move();

  score.show()
  score.addPoint()
  character.show();
  character.applyGravity();
  // noFill()
  // rect(enemy.x,
  //   enemy.y,
  //   enemy.widthSprite,
  //   enemy.heightSprite)

  enemies.forEach( enemy => {
    enemy.show()
    enemy.move()

    if (character.isColliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/3)
      console.log("colidiu");
      noLoop();
    }
  })
}
