let actors = [];

Game.prototype.step = function () {
  actors.forEach(actor => this.move(actor))
};
