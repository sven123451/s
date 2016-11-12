var kick = document.getElementById("kick");
var snare = document.getElementById("snare");
var crash = document.getElementById("crash");
var HiHat = document.getElementById("hiHat");
var HiTom = document.getElementById("highTom");
var MidTom = document.getElementById("midTom");
var LowTom = document.getElementById("lowTom")

const Q = 81;
const F = 70;
const X = 88;
const Y = 89;
const K = 75;
const Z = 90;
const L = 76;
window.addEventListener("keydown", myFunction(event));

function myFunction(event) {
  console.log("hello");
  if(event.which == Q){
    crash.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('Crash button pressed');
  }else if(event.which == F){
    snare.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('Snare button pressed');

  }else if(event.which == X){
    kick.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('Kick button pressed');
    
    }else if(event.which == Y){
    HiHat.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('HiHat button pressed');
      
  }else if(event.which == K){
    HiTom.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('HiTom button pressed');

 }else if(event.which == Z ){
    MidTom.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('MidTom button pressed');   
   
  }else if(event.which == L){
    LowTom.play();
    $('img').animate({width:'505'},20).animate({width:'500'},20);
    $('h3').html('LowTom button pressed');
  }
}