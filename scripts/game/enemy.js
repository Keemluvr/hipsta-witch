class Enemy extends Animation {
  constructor(
    matriz,
    image,
    x,
    yVariation,
    widthSprite,
    heightSprite,
    widthCutSprite,
    heightCutSprite,
    speedSprite,
    delaySprite
  ) {
    super(
      matriz,
      image,
      x,
      yVariation,
      widthSprite,
      heightSprite,
      widthCutSprite,
      heightCutSprite
    );

    this.speedSprite = speedSprite;
    this.delaySprite = delaySprite
    this.x = width + this.delaySprite
  }

  move() {
    this.x -= this.speedSprite;
    if (this.x < -this.widthSprite - this.delaySprite) {
      this.x = width;
    }
  }
}
