function Vector(x, y) {
  this.x = x;
  this.y = y;
}

function dist(vec1, vec2) {

}

Function.prototype.inherits = function (superclass) {
  function Surrogate(){};

  Surrogate.prototype = superclass.prototype;

  this.prototype = new Surrogate();

  this.prototype.constructor = this;
};
