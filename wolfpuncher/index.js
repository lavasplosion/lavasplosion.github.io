
// function for game to end
// change increaseWolfHealth to watchoverHealth
// nap
function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time));
}
// wolf takes damage
// var wolfHealth = document.getElementById("health");
var wolfHealth = document.getElementById("health");
var health = 100;
function dropWolfHealth() {
// wolfHealth.value -= 1;
// wolfHealth.style.value = wolfHealth;
health -= 10;
wolfHealth.innerHTML = health + "%";
// wolfHealth.width = health;
document.getElementById("health").style.width = health + "%";
}

// wolf regenerates


var wolfSplosion = document.getElementById("splosion");
var wolfsplosionSound = document.getElementById("wolfsplosion")
var wolfHealthInterval = setInterval(increaseWolfHealth, 500);
function myStopFunction() {
  clearInterval(wolfHealthInterval);
}
function increaseWolfHealth() {
  //setInterval(function() {
    // wolfHealth.value += 0.3;
    if (health < 100) {
      health += 0.1;
      console.log(health);
    }
    // console.log('wolf health value: ' + wolfHealth.value);
    // console.log(wolf.Health.value > )
  // console.log("healing");
  if (health > 75) {
    // console.log("green");
    document.getElementById("health").style.backgroundColor = "green";
  } else if (health > 25) {
    document.getElementById("health").style.backgroundColor = "yellow";
    // console.log("yellow");
  } else if (health > 0) {
    document.getElementById("health").style.backgroundColor = "red";
    // console.log("red");
  } else {
    console.log('you fucked up');
    explodeWolf();
    myStopFunction();
    return
    //break;

  }
  wolfHealth.innerHTML = health + "%";
  // wolfHealth.width = health;
  document.getElementById("health").style.width = health + "%";
  //}, 100);
}

  // if (wolfSplosionCounter > 6) {
  //  wolfsplosionSound.pause();
  // }

  // return;

  // setInterval(function() {

  // document.getElementById("punchInstructions").style.color = "red";
  // document.getElementById("punchInstructions").style.color = "white";
  // }, 500)
  // await sleep(2000);
  //
  // sleep(1000).then(() => {
  // });

var wolfsplosionSound = document.getElementById("wolfsplosion")
var wolfSplosionCounter = 0;
function explodeWolf() {
  var flashTextThing = setInterval(flashText, 250);
  var punchText = document.getElementById("punchInstructions");
  // document.getElementById("punchInstructions").style.color = "red";
  function flashText() {
    punchText.style.color = (punchText.style.color=='red') ? 'white':'red';
  }
  wolfSplosionCounter = wolfSplosionCounter + 1;
  console.log(wolfSplosionCounter);
  wolfsplosionSound.loop = true;
  wolfsplosionSound.play();
  splosion.style.display = ('inline-block');
  document.getElementById("health").style.display = "none";
  document.getElementById("punchInstructions").innerHTML = "LAVASPLOSION";

  document.getElementById("lava1").style.display = "inline-block";
  document.getElementById("lava2").style.display = "inline-block";
  document.getElementById("lava3").style.display = "inline-block";
  document.getElementById("lava4").style.display = "inline-block";

  sleep(3000).then(() => {
  // Do something after the sleep!
  // endGameTimer();
  endGame();
});
}
//}
/*
function flashText () {
  var splosionText = document.getElementById("punchInstructions");
  splosionText.style.color = (splosionText.style.color=='red') ? 'white':'red';
}
*/
// var flashTextThing = setInterval(flashText, 300);
/*
function endGameTimer() {
  //sleep(1000).then(() ==> {
  await sleep(2000);
  endGame();
  return
  //})
}
*/

// var endGameInstructions = document.getElementById("endInstructions")
var endGameBackground = document.getElementById("endGameBackground");
var endHorse = document.getElementById("endgameHorse");
var tooBadGameEndStatement = document.getElementById("endGameTooBad");
function endGame() {
  console.log("END OF GAME!")
  music.pause();
  wolfsplosionSound.pause()
  endGameBackground.style.display = ('inline-block');
  fister.style.display = ('inline-block');
  sleep(3000).then(() => {
  // Do something after the sleep!
  // endGameTimer();
  endHorse.style.display = ('inline-block');
  // endGameInstructions.style.visibility = 'visible';
  document.getElementById("endInstructions").style.visibility = "visible";
  // document.getElementById("endInstructions").style.color = "red";
  tooBadGameEndStatement.play();
  });
  // endGameBackground
}

/*
function increaseWolfHealth () {
while (wolfHealth.value > 100) {
  console.log('healing');
  wolfHealth.value += 0.5;
}
}
*/
// increaseWolfHealth();
// start song on fister mousedown or touchstart
var fister = document.getElementById("Fister");
var music = document.getElementById("music");
//

 var startButton = document.getElementById("startButton");
 var startBackground = document.getElementById("initialBackground");

var startBackground = document.getElementsByClassName("initialBackground");
fister.addEventListener("mousedown", playMusic);
fister.addEventListener("touchstart", playMusic);
function playMusic() {
  music.loop = true;
  music.play();
  //increaseWolfHealth();
  increaseWolfHealth();
  // startBackground.style.display = ('none');
  document.getElementById("initialBackground").style.display = ('none');
  startButton.style.display = ('none');
  //if (health <= 0) {
    // explodeWolf();
    //endGameTimer();
  //}

};
// wolf ouch noise on #chillWolf mousedown or touchstart
var PartyWolf = document.getElementById("ChillWolf");
var ouch = document.getElementById("hit");
// PartyWolf.addEventListener("mousedown", ouchNoise);
// PartyWolf.addEventListener("touchstart", ouchNoise);
function ouchNoise() {
  // music.loop = true;
  ouch.currentTime = 0;
  ouch.play();
}


// show angry wolf
var AngryWolf = document.getElementById("AngryWolf");
var redBackground = document.getElementById("iSeeRed");
function brieflyShowAngryWolf() {
  PartyWolf.style.display = ('none');
  AngryWolf.style.display = ('inline-block');
  document.getElementById("iSeeRed").style.display = ('inline-block');
  // redBackground.style.display = ('inline-block');
  sleep(300).then(() => {
    PartyWolf.style.display = ('inline-block');
    AngryWolf.style.display = ('none');
    document.getElementById("iSeeRed").style.display = ('none');
    // redBackground.style.display = ('none');
  });
}


// touch or click support for moving
var hits = 0;
// console.log(i + j);
let currentDroppable = null;

fister.onmousedown = function(event) {

let shiftX = event.clientX - fister.getBoundingClientRect().left;
let shiftY = event.clientY - fister.getBoundingClientRect().top;

fister.style.position = 'absolute';
fister.style.zIndex = 1000;
document.body.append(fister);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
  fister.style.left = pageX - shiftX + 'px';
  fister.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  fister.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  fister.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppable(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

fister.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  fister.onmouseup = null;
};

};

fister.ontouchstart = function(event) {

let touchshiftX = event.touches[0].clientX - fister.getBoundingClientRect().left;
let touchshiftY = event.touches[0].clientY - fister.getBoundingClientRect().top;

fister.style.position = 'absolute';
fister.style.zIndex = 1000;
document.body.append(fister);

touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

function touchmoveAt(pageX, pageY) {
  fister.style.left = pageX - touchshiftX + 'px';
  fister.style.top = pageY - touchshiftY + 'px';
}

function onTouchMove(event) {
  touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

  fister.hidden = true;
  let touchelemBelow = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
  fister.hidden = false;

  if (!touchelemBelow) return;

  let droppableBelow = touchelemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppable(currentDroppable);
    }
  }
}

document.addEventListener('touchmove', onTouchMove);

fister.ontouchend = function() {
  document.removeEventListener('touchmove', onTouchMove);
  fister.ontouchend = null;
};

};

function enterDroppable(elem) {
ouchNoise()
hits = hits + 1;
brieflyShowAngryWolf();
ouchNoise();
dropWolfHealth()
// console.log("hits: " + hits);
document.getElementById("score").innerHTML = "SCORE: " + hits;

// elem.style.background = 'pink';
}

function leaveDroppable(elem) {
// j = j + 1;
// console.log("j: " + j);
elem.style.background = '';
}

fister.ondragstart = function() {
return false;
};
