// MAPPS

var loc = [43.472979 , -80.540103];
navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation(location) {
  loc = [location.coords.latitude,location.coords.longitude];
    // alert( + ' - ' +  + ' - ' + location.coords.accuracy);
}

      function initialize() {
        var mapOptions = {
          center: { lat: loc[0], lng: loc[1]},
          zoom: 19,
           disableDefaultUI: true,
          scaleControl: false, mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

var pkall = [
  ["001", "Bulbasaur", "Grass", "Poison"],
  ["002", "Ivysaur", "Grass", "Poison"],
  ["003", "Venusaur", "Grass", "Poison"],
  ["004", "Charmander", "Fire", ""],
  ["005", "Charmeleon", "Fire", ""],
  ["006", "Charizard", "Fire", "Flying"],
  ["007", "Squirtle", "Water", ""],
  ["008", "Wartortle", "Water", ""],
  ["009", "Blastoise", "Water", ""],
  ["010", "Caterpie", "Bug", ""],
  ["011", "Metapod", "Bug", ""],
  ["012", "Butterfree", "Bug", "Flying"],
  ["013", "Weedle", "Bug", "Poison"],
  ["014", "Kakuna", "Bug", "Poison"],
  ["015", "Beedrill", "Bug", "Poison"],
  ["016", "Pidgey", "Normal", "Flying"],
  ["017", "Pidgeotto", "Normal", "Flying"],
  ["018", "Pidgeot", "Normal", "Flying"],
  ["019", "Rattata", "Normal", ""],
  ["020", "Raticate", "Normal", ""],
  ["021", "Spearow", "Normal", "Flying"],
  ["022", "Fearow", "Normal", "Flying"],
  ["023", "Ekans", "Poison", ""],
  ["024", "Arbok", "Poison", ""],
  ["025", "Pikachu", "Electric", ""],
  ["026", "Raichu", "Electric", ""],
  ["027", "Sandshrew", "Ground", ""],
  ["028", "Sandslash", "Ground", ""],
  ["029", "Nidoran♀", "Poison", ""],
  ["030", "Nidorina", "Poison", ""],
  ["031", "Nidoqueen", "Poison", "Ground"],
  ["032", "Nidoran♂", "Poison", ""],
  ["033", "Nidorino", "Poison", ""],
  ["034", "Nidoking", "Poison", "Ground"],
  ["035", "Clefairy", "Fairy", ""],
  ["036", "Clefable", "Fairy", ""],
  ["037", "Vulpix", "Fire", ""],
  ["038", "Ninetales", "Fire", ""],
  ["039", "Jigglypuff", "Normal", "Fairy"],
  ["040", "Wigglytuff", "Normal", "Fairy"],
  ["041", "Zubat", "Poison", "Flying"],
  ["042", "Golbat", "Poison", "Flying"],
  ["043", "Oddish", "Grass", "Poison"],
  ["044", "Gloom", "Grass", "Poison"],
  ["045", "Vileplume", "Grass", "Poison"],
  ["046", "Paras", "Bug", "Grass"],
  ["047", "Parasect", "Bug", "Grass"],
  ["048", "Venonat", "Bug", "Poison"],
  ["049", "Venomoth", "Bug", "Poison"],
  ["050", "Diglett", "Ground", ""],
  ["051", "Dugtrio", "Ground", ""],
  ["052", "Meowth", "Normal", ""],
  ["053", "Persian", "Normal", ""],
  ["054", "Psyduck", "Water", ""],
  ["055", "Golduck", "Water", ""],
  ["056", "Mankey", "Fighting", ""],
  ["057", "Primeape", "Fighting", ""],
  ["058", "Growlithe", "Fire", ""],
  ["059", "Arcanine", "Fire", ""],
  ["060", "Poliwag", "Water", ""],
  ["061", "Poliwhirl", "Water", ""],
  ["062", "Poliwrath", "Water", "Fighting"],
  ["063", "Abra", "Psychic", ""],
  ["064", "Kadabra", "Psychic", ""],
  ["065", "Alakazam", "Psychic", ""],
  ["066", "Machop", "Fighting", ""],
  ["067", "Machoke", "Fighting", ""],
  ["068", "Machamp", "Fighting", ""],
  ["069", "Bellsprout", "Grass", "Poison"],
  ["070", "Weepinbell", "Grass", "Poison"],
  ["071", "Victreebel", "Grass", "Poison"],
  ["072", "Tentacool", "Water", "Poison"],
  ["073", "Tentacruel", "Water", "Poison"],
  ["074", "Geodude", "Rock", "Ground"],
  ["075", "Graveler", "Rock", "Ground"],
  ["076", "Golem", "Rock", "Ground"],
  ["077", "Ponyta", "Fire", ""],
  ["078", "Rapidash", "Fire", ""],
  ["079", "Slowpoke", "Water", "Psychic"],
  ["080", "Slowbro", "Water", "Psychic"],
  ["081", "Magnemite", "Electric", "Steel"],
  ["082", "Magneton", "Electric", "Steel"],
  ["083", "Farfetch'd", "Normal", "Flying"],
  ["084", "Doduo", "Normal", "Flying"],
  ["085", "Dodrio", "Normal", "Flying"],
  ["086", "Seel", "Water", ""],
  ["087", "Dewgong", "Water", "Ice"],
  ["088", "Grimer", "Poison", ""],
  ["089", "Muk", "Poison", ""],
  ["090", "Shellder", "Water", ""],
  ["091", "Cloyster", "Water", "Ice"],
  ["092", "Gastly", "Ghost", "Poison"],
  ["093", "Haunter", "Ghost", "Poison"],
  ["094", "Gengar", "Ghost", "Poison"],
  ["095", "Onix", "Rock", "Ground"],
  ["096", "Drowzee", "Psychic", ""],
  ["097", "Hypno", "Psychic", ""],
  ["098", "Krabby", "Water", ""],
  ["099", "Kingler", "Water", ""],
  ["100", "Voltorb", "Electric", ""],
  ["101", "Electrode", "Electric", ""],
  ["102", "Exeggcute", "Grass", "Psychic"],
  ["103", "Exeggutor", "Grass", "Psychic"],
  ["104", "Cubone", "Ground", ""],
  ["105", "Marowak", "Ground", ""],
  ["106", "Hitmonlee", "Fighting", ""],
  ["107", "Hitmonchan", "Fighting", ""],
  ["108", "Lickitung", "Normal", ""],
  ["109", "Koffing", "Poison", ""],
  ["110", "Weezing", "Poison", ""],
  ["111", "Rhyhorn", "Ground", "Rock"],
  ["112", "Rhydon", "Ground", "Rock"],
  ["113", "Chansey", "Normal", ""],
  ["114", "Tangela", "Grass", ""],
  ["115", "Kangaskhan", "Normal", ""],
  ["116", "Horsea", "Water", ""],
  ["117", "Seadra", "Water", ""],
  ["118", "Goldeen", "Water", ""],
  ["119", "Seaking", "Water", ""],
  ["120", "Staryu", "Water", ""],
  ["121", "Starmie", "Water", "Psychic"],
  ["122", "Mr. Mime", "Psychic", "Fairy"],
  ["123", "Scyther", "Bug", "Flying"],
  ["124", "Jynx", "Ice", "Psychic"],
  ["125", "Electabuzz", "Electric", ""],
  ["126", "Magmar", "Fire", ""],
  ["127", "Pinsir", "Bug", ""],
  ["128", "Tauros", "Normal", ""],
  ["129", "Magikarp", "Water", ""],
  ["130", "Gyarados", "Water", "Flying"],
  ["131", "Lapras", "Water", "Ice"],
  ["132", "Ditto", "Normal", ""],
  ["133", "Eevee", "Normal", ""],
  ["134", "Vaporeon", "Water", ""],
  ["135", "Jolteon", "Electric", ""],
  ["136", "Flareon", "Fire", ""],
  ["137", "Porygon", "Normal", ""],
  ["138", "Omanyte", "Rock", "Water"],
  ["139", "Omastar", "Rock", "Water"],
  ["140", "Kabuto", "Rock", "Water"],
  ["141", "Kabutops", "Rock", "Water"],
  ["142", "Aerodactyl", "Rock", "Flying"],
  ["143", "Snorlax", "Normal", ""],
  ["144", "Articuno", "Ice", "Flying"],
  ["145", "Zapdos", "Electric", "Flying"],
  ["146", "Moltres", "Fire", "Flying"],
  ["147", "Dratini", "Dragon", ""],
  ["148", "Dragonair", "Dragon", ""],
  ["149", "Dragonite", "Dragon", "Flying"],
  ["150", "Mewtwo", "Psychic", ""],
  ["151", "Mew", "Psychic", ""]
];

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

var c = 0;
var cc = 6; // skip every 6th.
var last = [];
function accelerometerUpdate(e) {
  var aX = event.accelerationIncludingGravity.x;
  var aY = event.accelerationIncludingGravity.y;
  var aZ = event.accelerationIncludingGravity.z;
  if(Math.abs(last[0]-aX)+Math.abs(last[1]-aY)+Math.abs(last[2]-aZ) < 1.8) {
    ++c;
    if(c%cc == 0) {
      $.post("/STEPNI");
      alert('fzz');
    }
  } else {
    //ignore
  }
  last = [aX, aY, aZ];

  /*if(Math.abs(last[0]-aX)+Math.abs(last[1]-aY)+Math.abs(last[2]-aZ) < 1.8) {
    //ignore
  } else {
    //http://stackoverflow.com/questions/16392142/android-accelerometer-profiling/16539643#16539643
    var g = Math.sqrt(Math.pow(aX,2)+Math.pow(aY,2)+Math.pow(aZ,2));
    if(s_T == 0) s_T = g;
    s_T = alpha * g + (1 - alpha) * s_T;
    if(g > max) max = g;
    if(g < min) min = g;
    if(g < s_T) flag = true;
    if(g > s_T && flag && (g > max*5/11 || g < min*5/11)) {
      step();
      flag = false;
    }
  }

  last = [aX, aY, aZ];
  */
}

var state_step = 0;
function step() {
  state_step = 1;
  if(state_step == 0) {
    $("#marker").css({
      '-webkit-transform':'translate(0,-20px)',
      '-moz-transform':'translate(0,-20px)',
      '-o-transform':'translate(0,-20px)',
      '-ms-transform':'translate(0,-20px)',
      'transform':'translate(0,-20px)'
    });
    setTimeout(function(){
      $("#marker").css({
        '-webkit-transform':'translate(0,0)',
        '-moz-transform':'translate(0,0)',
        '-o-transform':'translate(0,0)',
        '-ms-transform':'translate(0,0)',
        'transform':'translate(0,0)'
      });
    }, 500);
    setTimeout(function(){
      
      state_step = 0;
    }, 1000);
  }
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
        setTimeout(function(){
          $("#pokemon1").css({
            '-webkit-transform':'translate(0,0)',
            '-moz-transform':'translate(0,0)',
            '-o-transform':'translate(0,0)',
            '-ms-transform':'translate(0,0)',
            'transform':'translate(0,700px)'
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
        }, 500);
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
        setTimeout(function(){
          $("#pokemon2").css({
            '-webkit-transform':'translate(0,0)',
            '-moz-transform':'translate(0,0)',
            '-o-transform':'translate(0,0)',
            '-ms-transform':'translate(0,0)',
            'transform':'translate(0,700px)'
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
        }, 500);
      }, 500);
    }
  }, 500);//wait 300
}

$(function(){
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  if(document.body.requestFullscreen) document.body.requestFullscreen();
  $(window).scrollTop($(document).height());
});

var bg = 0;
createjs.Sound.alternateExtensions = ["mp3"];
 createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
 createjs.Sound.registerSound("/audio/battle.ogg", "sound");
 function loadHandler(event) {
    bg = 1;
     
 }


var socket = io('http://localhost:3000');
// var socket = io('http://ejx.me');
socket.on('spawnPokemon', function (data) {
  // console.log(data);
  $("#pokemon1").attr('src', '/images/pokemon/'+pkall[data.pokemon.pid][1].toLowerCase()+'.gif');
  
  socket.emit('getRoster', {'email': $("#ee").val()});
});
socket.on('roster', function(data){
  // console.log(data);
  $("#pokemon2").attr('src', '/images/pokemon/'+pkall[data[0].pid][1].toLowerCase()+'-(1).gif');
  $("#battle").fadeTo( "slow", 1 );
  if(bg == 1) {
    instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
    instance.volume = 0.5;
 }
});