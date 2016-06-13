
function MovingObject(options) {
  this.radius = options.radius;
  this.pos = options.pos;
  this.vel = options.vel;
  this.color = options.color;
}

MovingObject.prototype.move = function () {
  this.pos.x += this.vel.x;
  this.pos.y += this.vel.y;
};

MovingObject.prototype.draw = function (ctx) {
  let thisObject = this;
  drawCircle({arc: thisObject.pos, color: thisObject.color, radius: thisObject.radius}, ctx)
};

MovingObject.prototype.isCollidedWith = function (otherMovingObject) {

};
