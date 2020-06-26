class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(sceneImage, 2.5);
    score = new Score();
    character = new Character(
      characterMatriz,
      characterImage,
      0,
      30,
      110,
      135,
      220,
      270
    );
    const enemy = new Enemy(
      enemyMatriz,
      enemyImage,
      width - 52,
      30,
      52,
      52,
      109,
      93,
      10,
      100
    );
    const bigEnemy = new Enemy(
      bigEnemyMatriz,
      bigEnemyImage,
      width,
      0,
      200,
      200,
      400,
      400,
      10,
      100
    );
    const flyingEnemy = new Enemy(
      flyingEnemyMatriz,
      flyingEnemyImage,
      width - 52,
      200,
      100,
      75,
      200,
      160,
      10,
      100
    );

    enemies.push(enemy);
    enemies.push(bigEnemy);
    enemies.push(flyingEnemy);
  }

  keyPressed(key) {
    if (key == "ArrowUp") {
      character.jump();
      jumpingSound.play();
    }
  }

  draw() {
    scenario.show();
    scenario.move();

    score.show();
    score.addPoint();
    character.show();
    character.applyGravity();

    const enemy = enemies[this.currentEnemy];
    const visibleEnemy = enemy.x < -enemy.widthSprite;

    if (visibleEnemy) {
      this.currentEnemy++;
      if (this.currentEnemy > enemies.length - 1) {
        this.currentEnemy = 0;
      }
      enemy.speedSprite = parseInt(random(10, 30));
    }

    enemy.show();
    enemy.move();

    if (character.isColliding(enemy)) {
      image(gameOverImage, width / 2 - 200, height / 3);
      noLoop();
    }
  }
}
