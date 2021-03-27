console.log('start of script');
let mouseDownStarted = 0;
let mouseMoves = 0;
let mouseUps = 0;

document.getElementById("clickMe").addEventListener("mousedown", mouseStart);
function mouseStart(event) {
  mouseDownStarted = mouseDownStarted + 1;
  console.log("Mouse down events: " + mouseDownStarted);
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('startXY').innerHTML = "Mousedown start pos: " + x + ", " + y;
  document.getElementById('numMouseDown').innerHTML = "Mousedown events: " + mouseDownStarted;
}

document.getElementById("clickMe").addEventListener("mousemove", mouseMove);
function mouseMove(event) {
  mouseMoves = mouseMoves + 1;
  console.log("Mouse move events: " + mouseMoves);
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('movingXY').innerHTML = "Mousemove currrent pos: " + x + ", " + y;
  document.getElementById('numMouseMove').innerHTML = "Mousemove events: " + mouseMoves;
}

document.getElementById("clickMe").addEventListener("mouseup", mouseEnd);
function mouseEnd(event) {
  mouseUps = mouseUps + 1;
  console.log("Mouseup events: " + mouseUps);
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('endXY').innerHTML = "Mouseup last pos: " + x + ", " + y;
  document.getElementById('numMouseUp').innerHTML = "Mouseup events: " + mouseUps;
}



console.log('end of script');
