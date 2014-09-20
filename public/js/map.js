// SET EVENT LISTENERS


if (window.DeviceMotionEvent != undefined) {
  window.addEventListener("devicemotion", accelerometerUpdate, true);
  document.addEventListener("touchstart", touchStart, true);
  // document.addEventListener("touchmove", touchMove, true);
  document.addEventListener("touchend", touchEnd, true);
}

var start;
function touchStart(event) {
  event.preventDefault(); // Prevent the webview itself from scrolling / bouncing around
  if ( event.touches.length == 1) { // Only track one finger
    start = event.touches[0];
  }
}
function touchEnd(event) {
  event.preventDefault(); // Prevent the webview itself from scrolling / bouncing around
  var end = event.touches[0];
  if(start.y > (end.y + 600)) alert('attack');
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




(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };

  $('img').on('dragstart', function(event) { event.preventDefault(); });
  $(document).scrollTop($(document).height()); // SCROLL TO BOTTOM
});



