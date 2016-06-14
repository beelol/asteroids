
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
  let dist = this.pos.dist(otherMovingObject.pos) ;

  // distance between this thing's edge and other thing's edge
  return dist - (this.radius + otherMovingObject.radius) <= 0
};

MovingObject.prototype.onCollisionEnter = function (otherMovingObject) {
  let thisNewVel = new Vector((this.pos.x - otherMovingObject.pos.x) * .1, (this.pos.y - otherMovingObject.pos.y) * .1)
  let otherNewVel = new Vector((otherMovingObject.pos.x - this.pos.x) * .1, (otherMovingObject.pos.y - this.pos.y) * .1)

  this.vel = thisNewVel;
  otherMovingObject.vel = otherNewVel;
};
