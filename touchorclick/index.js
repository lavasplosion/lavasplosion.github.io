// Get mouse(down, move, up), clientX/Y
let mouseDownEvents = 0;
let mouseMoveEvents = 0;
let mouseUpEvents = 0;
document.getElementById("clickMe").addEventListener("mousemove", mouseMove);
function mouseMove(event) {
  mouseMoveEvents = mouseMoveEvents + 1;
  let mouseMoveEventText = "mouse move event #: " + mouseMoveEvents;
  document.getElementById("mouseMoveNum").innerHTML = mouseMoveEventText;
  let clickX = event.clientX;
  let clickY = event.clientY;
  let mouseXYText = "Mouse move X, Y position: " + clickX + " " + clickY;
  document.getElementById("mouseMovingData").innerHTML = mouseXYText;
}
document.getElementById("clickMe").addEventListener("mousedown", mouseDown);
function mouseDown(event) {
  mouseDownEvents = mouseDownEvents + 1;
  let mouseDownEventText = "mouse down event #: " + mouseDownEvents;
  document.getElementById("numMouseDown").innerHTML = mouseDownEventText;
}
document.getElementById("clickMe").addEventListener("mouseup", mouseUp);
function mouseUp(event) {
  mouseUpEvents = mouseUpEvents + 1;
  let MouseUpEventText = "mouse up event #: " + mouseUpEvents;
  document.getElementById("numMouseUp").innerHTML = MouseUpEventText;
}

// Get touch(start, move, end), touches[0].clientX/Y
let touchStarted = 0;
let touchMoved = 0;
let touchEnded = 0;
document.getElementById("clickMe").addEventListener("touchstart", touchStartFunc);
function touchStartFunc(event) {
  touchStarted = touchStarted + 1;
  console.log('touchstart event');
  document.getElementById("numTouchStart").innerHTML = "touchstart event #: " + touchStarted;
}
document.getElementById("clickMe").addEventListener("touchmove", touchMoveFunc);
function touchMoveFunc(event) {
  event.preventDefault();
  touchMoved = touchMoved + 1;
  console.log('touchmove event');
  document.getElementById("numTouchMove").innerHTML = "touchmove event #: " + touchMoved;
  let touchX = event.touches[0].clientX;
  let touchY = event.touches[0].clientY;
  let touchXYText = "Mouse move X, Y position: " + touchX + " " + touchY;
  document.getElementById("touchMovingData").innerHTML = touchXYText;
}
document.getElementById("clickMe").addEventListener("touchend", touchEndFunc);
function touchEndFunc(event) {
  touchEnded = touchEnded + 1;
  console.log('touchend event');
  document.getElementById("numTouchEnd").innerHTML = "touchend event #: " + touchEnded;
}
document.getElementById("clickMe").addEventListener("touchcancel", touchWasCanceled);
function touchWasCanceled(event) {
  console.log("Touch was cancelled");
}
