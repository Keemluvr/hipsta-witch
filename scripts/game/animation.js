class Animation {
  constructor(matriz, image, x, yVariation, widthSprite, heightSprite, widthCutSprite, heightCutSprite) {
    // animation matriz
    this.matriz = matriz;
    // sprites
    this.image = image;
    // character width in screen
    this.widthSprite = widthSprite;
    // character height in screen
    this.heightSprite = heightSprite;
    // chosen sprite ( > )
    this.x = x;
    //
    this.yVariation = yVariation
    // chosen sprite ( v )
    this.y = height - this.heightSprite - this.yVariation;
    // sprite cut size (width)
    this.widthCutSprite = widthCutSprite;
    // sprite cut size (height)
    this.heightCutSprite = heightCutSprite;

    // animation matriz
    this.currentFrame = 0;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.widthSprite,
      this.heightSprite,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      this.widthCutSprite,
      this.heightCutSprite
    );
    this.animation();
  }

  animation() {
    this.currentFrame++;
    if (this.currentFrame >= this.matriz.length - 1){ 
      this.currentFrame = 0;
    }
  }

}

