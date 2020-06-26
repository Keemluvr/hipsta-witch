function preload() {
  sceneImage = loadImage("images/scene/background.png");
  sceneImageBack1 = loadImage("images/scene/background1.png");
  sceneImageBack2 = loadImage("images/scene/background2.png");
  sceneImageBack3 = loadImage("images/scene/background3.png");
  sceneImageBack4 = loadImage("images/scene/background4.png");
  sceneImageFront = loadImage("images/scene/backgroundFront.png");
  
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
