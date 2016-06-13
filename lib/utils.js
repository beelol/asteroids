function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.DIRS = [
  new Vector(1,1),
  new Vector(0,0),
  new Vector(0,1),
  new Vector(1,0),
  new Vector(-1,-1),
  new Vector(-1,1),
  new Vector(1,-1),
  new Vector(0,-1),
  new Vector(-1,0)
]

Vector.prototype.dist = function(vec2) {
  Math.sqrt((Math.pow((vec2.x - this.x), 2)) + (Math.pow((vec2.y - this.y), 2)));
}

Vector.randDir = function () {
  let vec = Vector.DIRS[Math.floor(Math.random() * Vector.DIRS.length)];

  return vec;
};

Vector.randomVelocity = function() {
  let vec = Vector.randDir(1);

  vec.x *= Math.random() + .1;
  vec.y *= Math.random() + .1;

  return vec;
}

Vector.random = function (length) {
  return new Vector(Math.random() * length, Math.random() * length);
};

Function.prototype.inherits = function (superclass) {
  function Surrogate(){};

  Surrogate.prototype = superclass.prototype;

  this.prototype = new Surrogate();

  this.prototype.constructor = this;
};

function drawCircle(options, ctx) {
  ctx.beginPath();

  ctx.arc(options.arc.x, options.arc.y, options.radius, 0, Math.PI*2);
  ctx.fillStyle = options.color;

  ctx.fill();

  ctx.closePath();
}
