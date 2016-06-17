// const Ship = require('./ship');
// const Bullet = require('./bullet');
// const Input = require('./input');

function GameView(canvas){
  this.game = new Game();
  this.canvas = canvas;
}

GameView.prototype.start = function () {
  this.game.start.call(this.game);
};

GameView.draw = function (ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  this.game .actors.forEach(function(actor) {
    actor.draw(ctx);
  });
};

// let gv = new GameView(canvas);
// gv.start()
