
function Asteroid(options) {
  options.color = Asteroid.COLOR;
  options.radius = Asteroid.RADIUS;

  options.vel = Vector.randDir(length);

  MovingObject.call(this, options);
}

Asteroid.COLOR = "blue";
Asteroid.RADIUS = 20;

Asteroid.inherits(MovingObject);

Asteroid.spawn = function (options) {
  return new Asteroid(options);
};
