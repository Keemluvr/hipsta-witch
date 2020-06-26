class InitialScreen {
    constructor() {
        this.positionX = width / 2;
        this.positionY = height
    }

    draw() {
        this._backgroundImage()
        this._text()
        this._button()
    }

    _backgroundImage() {
        image(initialScreenImage, 0, 0, width, height)
    }

    _text() {
        textFont(initialScreenFont)
        textAlign(CENTER)
        textSize(50)
        text('The adventures of', width/2,  height/2 - 150)
        textSize(150)
        text('Hipsta', width/2, height/2)
    }

    _button() {
        managerButton.y = height/7 * 5
        managerButton.draw()
    }
}