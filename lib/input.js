function Input() {}

Input.moveKeys = {
  37: new Vector(-1, 0), // left
  38: new Vector(0, -1), // up
  39: new Vector(1, 0), // right
  40: new Vector(0, 1) // down
};

Input.buttons = {
  32: 1, // space
}

Input.keyStates = {
  32: false,
  37: false,
  38: false,
  39: false,
  40: false
}

Input.keyDownHandler = function(e) {
  console.log(e.keyCode + ' is now pressed');
  Input.keyStates[e.keyCode] = true
}

Input.keyUpHandler = function (e) {
  console.log(e.keyCode + ' is now released');
  Input.keyStates[e.keyCode] = false
}

Input.receiveMoveInput = function() {
  for (var key in Input.moveKeys) {
    let pressed = Input.keyStates[key]

    if (pressed) {
      return Input.moveKeys[key];
    }
  }
}

document.addEventListener("keydown", Input.keyDownHandler, false);

document.addEventListener("keyup", Input.keyUpHandler, false);
