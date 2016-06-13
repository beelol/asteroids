Game.actors = [];
let asteroids = [];

const DIM_X = 720;
const DIM_Y = 480;
const ASTEROID_NUM_RANGE = new Vector(10, 30);

function Game() {
  this.addStroids();

  setInterval(Game.draw.call(Game, ctx), 10)
  setInterval(this.step.call(this), 10)
}

Game.prototype.step = function () {
  let that = this;
  Game.actors.forEach(actor => this.move(actor));
};

Game.prototype.addStroids = function () {
  let numAsteroids = Math.random() * ASTEROID_NUM_RANGE.y + ASTEROID_NUM_RANGE.x

  for (let i = 0; i < numAsteroids; i++) {
    Game.actors.push(Asteroid.spawn({pos: Game.randomPosition()}));
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
