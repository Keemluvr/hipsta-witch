class Scenario {
  constructor(image, velocity) {
    this.image = image;
    this.velocity = velocity;
  }

  show() {
    // Scene
    image(this.image, -this.velocity, 0, width, height);
    image(this.image, width - this.velocity, 0, width, height);
  }
}
