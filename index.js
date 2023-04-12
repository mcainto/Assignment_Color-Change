document.getElementById("happyaudio").controls = false;

light = document.getElementsByClassName("light")
var colour = ["blue","yellow","aqua","red","green","coral","dark green"];
var offset = 0;
var interval;
var running = false;
var music = document.getElementById("happyaudio");

function start(){
  if (running){
    clearInterval(interval);
    document.getElementById("toggle").value = "Start";
    music.pause();

  } else {
  interval = setInterval(change, 1000); 
  document.getElementById("toggle").value = "Stop";
  music.play();
  }
  running = !running;
}

function change() {
  for (var n = 0; n < light.length; n++){
    light [n].style.backgroundColor = colour[(n + offset) % 6];
  }
  offset++;
}

