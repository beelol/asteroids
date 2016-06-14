function Ship(options) {
  MovingObject.call(this, options);
};

Ship.inherits(MovingObject);

Ship.spawn = function (options) {
  return new Ship(options);
}

Ship.prototype.move = function () {
  let input = this.receiveMoveInput();

  if (input.length <= 0) return;

  let that = this;

  input.forEach(function(axis) {
    that.pos.x += axis.x * 2
    that.pos.y += axis.y * 2
  });

}

Ship.prototype.receiveMoveInput = function() {
  return Input.receiveMoveInput();
}
