class Character extends Animation {
  constructor(
    matriz,
    image,
    x,
    widthSprite,
    heightSprite,
    widthCutSprite,
    heightCutSprite
  ) {
    super(
      matriz,
      image,
      x,
      widthSprite,
      heightSprite,
      widthCutSprite,
      heightCutSprite
    );

    this.yInitial = height - this.heightSprite;
    this.y = this.yInitial;
    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpSpeed = -30;
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;
    if (this.y > this.yInitial) {
      this.y = this.yInitial;
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
