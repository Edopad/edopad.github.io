var bge = document.getElementById('top_pane_bg');
function update_parallax() {
  var scrolly = window.scrollY;
  /*
  var pce = document.getElementById('headshot');
  pce.style.marginTop = 'calc(-' + scrolly/4 + 'px - 11em)';*/
  bge.style.transform = 'translateY('+Math.round(scrolly/3)+'px)';
  window.requestAnimationFrame(update_parallax);
}

function page_load() {
  bge = document.getElementById('top_pane_bg');
  window.requestAnimationFrame(update_parallax);
  //window.setInterval(update_parallax, 10);
}

/*Util functions*/
/*
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
*/
