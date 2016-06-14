function Ship(options) {
  MovingObject.call(this, options);
};

Ship.inherits(MovingObject);

Ship.spawn = function (options) {
  return new Ship(options);
}

Ship.prototype.move = function () {
  this.vel = this.receiveMoveInput();

  this.pos.x += this.vel.x * 2
  this.pos.y += this.vel.y * 2
}

Ship.prototype.receiveMoveInput = function() {
  return Input.receiveMoveInput();
}
