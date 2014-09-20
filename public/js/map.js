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
  if(them) { // we attacking them
    $("#pokemon2").css({
      '-webkit-transform':'translate(200px,-700px)',
      '-moz-transform':'translate(200px,-700px)',
      '-o-transform':'translate(200px,-700px)',
      '-ms-transform':'translate(200px,-700px)',
      'transform':'translate(200px,-700px)'
    });
    $("#shadow2").css({
      '-webkit-transform':'translate(230px,-550px)',
      '-moz-transform':'translate(230px,-550px)',
      '-o-transform':'translate(230px,-550px)',
      '-ms-transform':'translate(230px,-550px)',
      'transform':'translate(230px,-550px)'
    });
    setTimeout(function(){
      $("#pokemon2").css({
        '-webkit-transform':'translate(0,0)',
        '-moz-transform':'translate(0,0)',
        '-o-transform':'translate(0,0)',
        '-ms-transform':'translate(0,0)',
        'transform':'translate(0,0)'
      });
      $("#shadow2").css({
        '-webkit-transform':'translate(0,0)',
        '-moz-transform':'translate(0,0)',
        '-o-transform':'translate(0,0)',
        '-ms-transform':'translate(0,0)',
        'transform':'translate(0,0)'
      });
    }, 450);
    setTimeout(function(){
      attack(false);
    }, 1000)
  } else { // close we attacking them 
    $("#pokemon1").css({
      '-webkit-transform':'translate(-200px,700px)',
      '-moz-transform':'translate(-200px,700px)',
      '-o-transform':'translate(-200px,700px)',
      '-ms-transform':'translate(-200px,700px)',
      'transform':'translate(-200px,700px)'
    });
    $("#shadow1").css({
      '-webkit-transform':'translate(-170px,550px)',
      '-moz-transform':'translate(-230px,550px)',
      '-o-transform':'translate(-230px,550px)',
      '-ms-transform':'translate(-230px,550px)',
      'transform':'translate(-170px,800px)'
    });
    setTimeout(function(){
      $("#pokemon1").css({
        '-webkit-transform':'translate(0,0)',
        '-moz-transform':'translate(0,0)',
        '-o-transform':'translate(0,0)',
        '-ms-transform':'translate(0,0)',
        'transform':'translate(0,0)'
      });
      $("#shadow1").css({
        '-webkit-transform':'translate(0,0)',
        '-moz-transform':'translate(0,0)',
        '-o-transform':'translate(0,0)',
        '-ms-transform':'translate(0,0)',
        'transform':'translate(0,0)'
      });
    }, 450);
  } // close they attacking us
}


$(function(){
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  if(document.body.requestFullscreen) document.body.requestFullscreen();
  $(window).scrollTop($(document).height());
});




 createjs.Sound.alternateExtensions = ["mp3"];
 createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
 createjs.Sound.registerSound("/audio/battle.ogg", "sound");
 function loadHandler(event) {
     // This is fired for each sound that is registered.
     var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
     instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
     instance.volume = 0.5;
 }
