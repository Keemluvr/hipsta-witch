let sceneImage;
let characterImage;
let scenario;

function preload() {
  sceneImage = loadImage('images/scene/forest.png')
  characterImage = loadImage('images/character/running.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(sceneImage, 2.5)
}

function draw() {
  // Character
  scenario.show()
  scenario.move()
  image(characterImage, 0, height-135, 110, 135, 0, 0, 220, 270)
  
}



class Scenario {
  constructor(image, velocity) {
    this.image = image
    this.velocity = velocity
    this.x1 = 0
    this.x2 = width
  }
  
  show() {
    image(this.image, this.x1, 0, width, height)
    image(this.image, this.x2, 0, width, height)
  }

  move() {
    this.x1 -= this.velocity
    this.x2 -= this.velocity 
    if(this.x1 < -width) {
      this.x1  = width
    }
    if(this.x2 < -width) {
      this.x2  = width
    }
  }
}



