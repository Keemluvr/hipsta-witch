class Character extends Animation {
  constructor(
    matriz,
    image,
    x,
    yVariation, 
    widthSprite,
    heightSprite,
    widthCutSprite,
    heightCutSprite
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

    this.yVariation = yVariation
    this.yInitial = height - this.heightSprite - this.yVariation;
    this.y = this.yInitial;
    this.jumpSpeed = 0;
    this.gravity = 5;
    this.heightJump = -50
    this.jumps = 0
  }

  jump() {
    if(this.jumps < 2) {
      this.jumpSpeed = this.heightJump;
      this.jumps++
    }
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;
    if (this.y > this.yInitial) {
      this.y = this.yInitial;
      this.jumps = 0
    }
  }

  isColliding(enemy) {
    const precision =.7
    const collision = collideRectRect(
      this.x,
      this.y,
      this.widthSprite * precision,
      this.heightSprite * precision,
      enemy.x,
      enemy.y,
      enemy.widthSprite * precision,
      enemy.heightSprite * precision
    );

    return collision
  }
}
