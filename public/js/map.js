// SET EVENT LISTENERS


if (window.DeviceMotionEvent != undefined) {
  window.addEventListener("devicemotion", accelerometerUpdate, true);
  document.addEventListener("touchstart", touchStart, true);
  // document.addEventListener("touchmove", touchMove, true);
  document.addEventListener("touchend", touchEnd, true);
}

var start;
function touchStart(event) {
  start = event.touches[0];
}
function touchEnd(event) {
  var end = event.touches[0];
  alert(start.pageX + ' ' + start.pageY + ' | ' + end.pageX + ' ' + end.pageY);
  if(start.pageY > (end.pageY + 600)) alert('attack');
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




$(function(){
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  $(document).scrollTop($(document).height()); // SCROLL TO BOTTOM
});



