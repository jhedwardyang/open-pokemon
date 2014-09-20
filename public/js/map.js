// SET EVENT LISTENERS


document.addEventListener("mousedown", clickStart, true);
document.addEventListener("mouseup", clickEnd, true);

if (window.DeviceMotionEvent != undefined) {
  window.addEventListener("devicemotion", accelerometerUpdate, true);
  document.addEventListener("touchstart", touchStart, true);
  document.addEventListener("touchend", touchEnd, true);
} else {
  
}

var start = {};
function clickStart(event) {
  start.pageX = event.x;
  start.pageY = event.y;
}
function clickEnd(event) {
  var end = {};
  end.pageX = event.x;
  end.pageY = event.y;
  if(start.pageY > (end.pageY + 550)) attack(true);
}
function touchStart(event) {
  console.log(event);
  start = event.changedTouches[0];
}
function touchEnd(event) {
  var end = event.changedTouches[0];
  if(start.pageY > (end.pageY + 550)) attack(true);
}

function accelerometerUpdate(e) {
 var aX = event.accelerationIncludingGravity.x*1;
 var aY = event.accelerationIncludingGravity.y*1;
 var aZ = event.accelerationIncludingGravity.z*1;
 //The following two lines are just to calculate a
 // tilt. Not really needed. 
 xPosition = Math.atan2(aY, aZ);
 yPosition = Math.atan2(aX, aZ);
}


function attack(them) {
  console.log('att');
  $("#pokemon2").css({
    '-webkit-transform':'translate(200px,-700px)',
    '-moz-transform':'translate(200px,-700px)',
    '-o-transform':'translate(200px,-700px)',
    '-ms-transform':'translate(200px,-700px)',
    'transform':'translate(200px,-700px)'
  });
  setTimeout(function(){
    $("#pokemon2").css({
      '-webkit-transform':'translate(0,0)',
      '-moz-transform':'translate(0,0)',
      '-o-transform':'translate(0,0)',
      '-ms-transform':'translate(0,0)',
      'transform':'translate(0,0)'
    });
  }, 450);
}


$(function(){
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  if(document.body.requestFullscreen) document.body.requestFullscreen();
  $(window).scrollTop($(document).height());
});



