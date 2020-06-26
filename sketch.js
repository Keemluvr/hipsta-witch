function setup() {
  createCanvas(windowWidth, windowHeight);

  initialScreen = new InitialScreen()
  game = new Game();
  
  screens = { 
    initialScreen,
    game
  }
  game.setup();
  managerButton = new ManagerButton('Go', width/2, height/2 + 30)

  frameRate(40);
  songGame.loop();
}

function keyPressed() {
  game.keyPressed(key)
}

function draw() {
  screens[currentScreen].draw()
}
