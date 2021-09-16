function update_parallax() {
  var bge = document.getElementById('top_pane_bg');
  var scrolly = window.scrollY;
  //bge.style.top = ''+scrolly/2+'px';

  /*
  var pce = document.getElementById('headshot');
  pce.style.marginTop = 'calc(-' + scrolly/4 + 'px - 11em)';*/
  bge.style.transform = 'translateY('+scrolly/3+'px)';
  window.requestAnimationFrame(update_parallax);
}

function page_load() {
  window.requestAnimationFrame(update_parallax);
  //window.setInterval(update_parallax, 1000/60);
}

/*Util functions*/
/*
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
*/
