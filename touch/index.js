console.log("start of script");
let touchStarted = 0;
let touchMoved = 0;
let touchEnded = 0;

document.getElementById("touchMe").addEventListener("touchstart", touchStart);
function touchStart(event) {
  touchStarted = touchStarted + 1;
  console.log('Touch start: ' + touchStarted);
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById('startXY').innerHTML = "Touch start position: " + x + ", " + y;
  document.getElementById('numTouchStart').innerHTML = "Touches started: " + touchStarted;
};

document.getElementById("touchMe").addEventListener("touchmove", touchMove);
function touchMove(event) {
  touchMoved = touchMoved + 1;
  console.log('Touch move: ' + touchMoved);
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById('movingXY').innerHTML = "Moving position: " + x + ", " + y;
  document.getElementById('numTouchMove').innerHTML = "Moves: " + touchMoved;
};

document.getElementById("touchMe").addEventListener("touchend", touchEnd);
function touchEnd(event) {
  touchEnded = touchEnded + 1;
  console.log('Touch end: ' + touchEnded);
  document.getElementById('numTouchEnd').innerHTML = "Touches ended: " + touchEnded;
};

console.log("end of script")
/*
function touchStart(event) {
  touchStart = touchStart = 1;
  console.log('Touch start: ' + touchStart);
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById('startXY').innerHTML = "Touch start position: " + x + ", " + y;
  document.getElementById('numTouchStart').innerHTML = "Touches started: " + touchStart;
}
function touchMove(event) {
  touchMove = touchMove + 1;
  console.log('Touch move: ' + touchMove);
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById('movingXY').innerHTML = "Moving position: " + x + ", " + y;
  document.getElementById('numTouchMove').innerHTML = "Moves: " + touchMove;
}
function touchEnd(event) {
  touchEnd = touchEnd + 1;
  console.log('Touch end: ' + touchEnd);
  document.getElementById('numTouchEnd').innerHTML = "Touches ended: " + touchEnd;
}
*/
