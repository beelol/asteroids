Game.actors = [];
let asteroids = [];

const DIM_X = 720;
const DIM_Y = 480;
const ASTEROID_NUM_RANGE = new Vector(10, 30);

function Game() {
}

Game.start = function () {
  this.addStroids();
  Game.spawnPlayer();

  setInterval(() => this.step.call(this), 10)
  setInterval(Game.checkCollisons, 50)
};


Game.step = function () {
  Game.actors.forEach(actor => this.move(actor));
};

Game.addStroids = function () {
  let numAsteroids = Math.random() * ASTEROID_NUM_RANGE.y + ASTEROID_NUM_RANGE.x

  for (let i = 0; i < numAsteroids; i++) {
    Game.actors.push(Asteroid.spawn({pos: Game.randomPosition(), vel: Vector.randomVelocity() }));
  }
};

Game.randomPosition = function () {
  let vec = Vector.random(1)

  vec.x *= DIM_X;
  vec.y *= DIM_Y;

  return vec;
};

Game.move = function (actor) {
  actor.move.call(actor);
};

Game.draw = function (ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Game.actors.forEach(function(actor) {
    actor.draw(ctx);
  });
};

Game.spawnPlayer = function () {
  Game.actors.push(Ship.spawn({pos: Game.randomPosition(), vel: new Vector(0, 0), color: "red", radius: 10 }));
}

Game.checkCollisons = function () {
  Game.actors.forEach(function(actor, i) {
    Game.actors.forEach(function(actor2, j) {
      if (i !== j) {
        if (actor.isCollidedWith(actor2)) {
          actor.onCollisionEnter(actor2);
        }
      }
    });
  });
}
