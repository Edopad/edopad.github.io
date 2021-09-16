function docresized() {
  /*console.log("Window resized!");
  rsbg();*/
}
/*
var BGAR = 10173 / 1080; //Background aspect ratio (width / height)
/*Resize Background*
function rsbg() {
  var bge = document.getElementById('wpbg'); //bg element
  var bgse = document.getElementById('wpbgs'); //bg section element
  var comw = bgse.clientHeight * BGAR; //picture width
  bge.style.width = comw + 'px';
  bgse.style.width = (comw + document.body.clientWidth) + 'px';
  console.log("background resized.");
  return true;
}
/*Initialize background*
function initwpbg() {
  rsbg();
}
/*Pause background*
function pwpbg() {
  var bge = document.getElementById('wpbg'); //bg element
  var bgpe = document.getElementById('wpbgpb'); //pause button
  if(bge.className !== "paused") {
    bge.className = "paused";
    bgpe.innerHTML = "Resume Background<br/>Scrolling";
  } else {
    bge.className = "";
    bgpe.innerHTML = "Pause Background<br/>Scrolling";
  }
}

/*Util functions*
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
//*/