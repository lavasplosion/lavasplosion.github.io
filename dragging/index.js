
  var i = 0;
  var j = 0;
  console.log(i + j);
  let currentDroppable = null;

  ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;

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

    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };

  };

  ball.ontouchstart = function(event) {

    let touchshiftX = event.touches[0].clientX - ball.getBoundingClientRect().left;
    let touchshiftY = event.touches[0].clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

    function touchmoveAt(pageX, pageY) {
      ball.style.left = pageX - touchshiftX + 'px';
      ball.style.top = pageY - touchshiftY + 'px';
    }

    function onTouchMove(event) {
      touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

      ball.hidden = true;
      let touchelemBelow = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
      ball.hidden = false;

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

    ball.ontouchend = function() {
      document.removeEventListener('touchmove', onTouchMove);
      ball.ontouchend = null;
    };

  };

  function enterDroppable(elem) {

    i = i + 1;
    console.log("i: " + i);
    elem.style.background = 'pink';
  }

  function leaveDroppable(elem) {
    j = j + 1;
    console.log("j: " + j);
    elem.style.background = '';
  }

  ball.ondragstart = function() {
    return false;
  };
