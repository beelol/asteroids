// const Ship = require('./ship');
// const Bullet = require('./bullet');
// const Input = require('./input');

function GameView(canvas) {
  this.findCanvas();
}

GameView.prototype.findCanvas = function() {
  this.canvas = document.getElementById('canvas');
  this.ctx = canvas.getContext("2d");
}

GameView.prototype.render = function() {
  this.draw();
  requestAnimationFrame(this.render.bind(this));
}

GameView.prototype.start = function () {
  requestAnimationFrame(this.render.bind(this));
  Game.start();
};

GameView.prototype.draw = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);


  Game.actors.forEach((actor) => { actor.draw(this.ctx); });
};
