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

var instance;



var pokemon = ['charizard', 'vulpix'];
var maxhp = [100,100];
var hp = [100,100];

function attack(them) {
  if(hp[0] <= 0 || hp[1] <= 0) return;
  if(them) { // we attacking them
    $("#pokemon2").css({
      '-webkit-transform':'translate(200px,-700px)',
      '-moz-transform':'translate(200px,-700px)',
      '-o-transform':'translate(200px,-700px)',
      '-ms-transform':'translate(200px,-700px)',
      'transform':'translate(200px,-700px)'
    });
    $("#hp2").css({
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
      $("#hp2").css({
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
      damage(true, 20);      
    }, 450);
    setTimeout(function(){
      if(hp[0] > 0) attack(false);
    }, 1000)
  } else { // close we attacking them 
    $("#pokemon1").css({
      '-webkit-transform':'translate(-200px,700px)',
      '-moz-transform':'translate(-200px,700px)',
      '-o-transform':'translate(-200px,700px)',
      '-ms-transform':'translate(-200px,700px)',
      'transform':'translate(-200px,700px)'
    });
    $("#hp1").css({
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
      $("#hp1").css({
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
      damage(false, 20);
    }, 450);

  } // close they attacking us
}

function damage(them, amt) {
  if(them) {
    hp[0]-= amt; // DAMAGE
    $("#hp1 > span").css('width',hp[0]+'%');
    if(hp[0] <= 0) faint(true);
  } else { //we took dmg
    hp[1]-= amt; // DAMAGE
    $("#hp2 > span").css('width',hp[1]+'%');
    if(hp[1] <= 0) faint(false);
  }
}
function faint(them) {
  setTimeout(function(){ // wait 300ms to let animations complete
    instance.volume = 0.4;
    setTimeout(function(){instance.volume = 0.4;},200);
    setTimeout(function(){instance.volume = 0.3;},400);
    setTimeout(function(){instance.volume = 0.2;},600);
    setTimeout(function(){instance.volume = 0.1;},800);
    setTimeout(function(){instance.volume = 0;},1000);
    if(them) {
      $("#pokemon1").css({
        '-webkit-transform':'translate(0,1700px)',
        '-moz-transform':'translate(0,1700px)',
        '-o-transform':'translate(0,1700px)',
        '-ms-transform':'translate(0,1700px)',
        'transform':'translate(0,1700px)'
      });
      $("#hp1").css({
        '-webkit-transform':'translate(0,1700px)',
        '-moz-transform':'translate(0,1700px)',
        '-o-transform':'translate(0,1700px)',
        '-ms-transform':'translate(0,1700px)',
        'transform':'translate(0,1700px)'
      });
      $("#shadow1").css({
        '-webkit-transform':'translate(0,1700px)',
        '-moz-transform':'translate(0,1700px)',
        '-o-transform':'translate(0,1700px)',
        '-ms-transform':'translate(0,1700px)',
        'transform':'translate(0,1700px)'
      });
      setTimeout(function(){
        $("#shadow1").css('opacity','0');
        $("#hp1").css('opacity','0');
        $("#pokemon1").css('opacity','0');
      }, 500);
    } else { // we fainted
      $("#pokemon2").css({
        '-webkit-transform':'translate(0,700px)',
        '-moz-transform':'translate(0,700px)',
        '-o-transform':'translate(0,700px)',
        '-ms-transform':'translate(0,700px)',
        'transform':'translate(0,700px)'
      });
      $("#hp2").css({
        '-webkit-transform':'translate(0,700px)',
        '-moz-transform':'translate(0,700px)',
        '-o-transform':'translate(0,700px)',
        '-ms-transform':'translate(0,700px)',
        'transform':'translate(0,700px)'
      });
      $("#shadow2").css({
        '-webkit-transform':'translate(0,700px)',
        '-moz-transform':'translate(0,700px)',
        '-o-transform':'translate(0,700px)',
        '-ms-transform':'translate(0,700px)',
        'transform':'translate(0,700px)'
      });
      setTimeout(function(){
        $("#shadow2").css('opacity','0');
        $("#hp2").css('opacity','0');
        $("#pokemon2").css('opacity','0');
      }, 500);
    }
  }, 500);//wait 300
}

$(function(){
  $("#pokemon1").attr('src', '/images/pokemon/'+pokemon[0]+'.gif');
  $("#pokemon2").attr('src', '/images/pokemon/'+pokemon[1]+'-(1).gif');
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  if(document.body.requestFullscreen) document.body.requestFullscreen();
  $(window).scrollTop($(document).height());
});





 createjs.Sound.alternateExtensions = ["mp3"];
 createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
 createjs.Sound.registerSound("/audio/battle.ogg", "sound");
 function loadHandler(event) {
     // This is fired for each sound that is registered.
     instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
     instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
     instance.volume = 0.5;
 }
