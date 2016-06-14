Game.actors = [];
let asteroids = [];

const DIM_X = 720;
const DIM_Y = 480;
const ASTEROID_NUM_RANGE = new Vector(10, 30);

function Game() {

}

Game.prototype.start = function () {
  this.addStroids();
  Game.spawnPlayer();

  setInterval(() => this.step.call(this), 10)
  setInterval(() => Game.draw(ctx), 10)
};


Game.prototype.step = function () {
  Game.actors.forEach(actor => this.move(actor));
};

Game.prototype.addStroids = function () {
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

Game.prototype.move = function (actor) {
  actor.move.call(actor);
};

Game.prototype.checkCollisons = function () {

};

Game.draw = function (ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Game.actors.forEach(function(actor) {
    actor.draw(ctx);
  });
};

Game.spawnPlayer = function() {
  Game.actors.push(Ship.spawn({pos: Game.randomPosition(), vel: new Vector(0, 0), color: "red", radius: 10 }));
}

let g = new Game();
g.start();
