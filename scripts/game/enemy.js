class Enemy extends Animation {
  constructor(matriz, image, x, widthSprite, heightSprite, widthCutSprite, heightCutSprite) {
    super(matriz, image, x, widthSprite, heightSprite, widthCutSprite  , heightCutSprite)

    this.speed = 5
  }

  move() {
    this.x -= this.speed
    if (this.x < -this.widthSprite) {
       this.x = width
    }
  }
}