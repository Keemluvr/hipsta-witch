function preload() {
  sceneImage = loadImage("images/scene/forest.png");
  characterImage = loadImage("images/character/running.png");
  enemyImage = loadImage("images/enemies/drop.png");
  bigEnemyImage = loadImage("images/enemies/troll.png");
  flyingEnemyImage = loadImage("images/enemies/flyingDrop.png");

  soundFormats("ogg", "mp3");
  songGame = loadSound("songs/soundtrack.mp3");
  jumpingSound = loadSound("songs/jumpsound.mp3");

  initialScreenImage = loadImage("images/assets/initialScreen.png");
  initialScreenFont = loadFont("images/assets/initialScreenFont.otf");
  gameOverImage = loadImage("images/assets/gameOver.png");
}
