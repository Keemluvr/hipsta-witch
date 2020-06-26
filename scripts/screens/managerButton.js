class ManagerButton {
  constructor(text, positionX, positionY) {
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;
    this.button = createButton(this.text);
  }

  draw() {
    this.button.position(this.positionX, this.positionY);
    this.button.center("horizontal");
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass("initial-screen-button");
  }

  _changeScene() {
    this.button.remove();
    currentScreen = 'game';
  }
}
