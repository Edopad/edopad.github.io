var keylist = [];
window.onkeyup = function(e) {keylist[e.keyCode]*=-1;}
window.onkeydown = function(e) {keylist[e.keyCode]=window.performance.now();}
var RIGHTKEY = 39, LEFTKEY = 37, DOWNKEY = 40,  UPKEY = 38, SHIFTKEY = 16;
var UP, DOWN, LEFT, RIGHT;
function getMove(heading) {
  if(heading.y == 0) {
    //true when moving horizontally
    keylist[LEFTKEY] = 0;
    keylist[RIGHTKEY] = 0;
    var up = keylist[UPKEY] || 0;
    var down = keylist[DOWNKEY] || 0;
    
    if(Math.abs(up) > Math.abs(down)) {
      if(up > 0) return UP;
      if(down > 0) return DOWN;
    } else {
      if(down > 0) return DOWN;
      if(up > 0) return UP;
    }
  } else {
    //true when moving vertically
    keylist[UPKEY] = 0;
    keylist[DOWNKEY] = 0;
    var left = keylist[LEFTKEY] || 0;
    var right = keylist[RIGHTKEY] || 0;
  
  
    if(Math.abs(right) > Math.abs(left)) {
      if(right > 0) return RIGHT;
      if(left > 0) return LEFT;
    } else {
      if(left > 0) return LEFT;
      if(right > 0) return RIGHT;
    }
  }
  return heading;
}
function getKey(id) {
  try {
    return keylist[id];
  } catch(e) {
    return 0;
  }
}
var can, ctx;
var statelist;
function init() {
  UP = new Point(0,-1), DOWN = new Point(0,1), LEFT = new Point(-1,0), RIGHT = new Point(1,0);
  var WIDTH = 21;
  var HEIGHT = 21;
  
  can = document.getElementById('gamewin');
  ctx = can.getContext('2d');
  
  can.height = can.width = (40 + 1)* 21 - 1;
  
  //drawBox(-10, -10, '#FFFFFF');
  
  statelist = [new Game()];
  
  run();
}
function deepcopy(obj) {
  var out = {};
  for(x in obj) {
    var tmp = obj[x];
    if(typeof tmp === 'object') out[x] = deepcopy(tmp);
    else out[x] = tmp;
  }
  try { out.__proto__ = obj.__proto__; }
  finally {return out;}
}
function run() {
  //Do frame every 1/8 s
  window.setInterval(frame, 125);
}
function frame() {
  if(keylist[SHIFTKEY] > 0) {
    //pop game states off the stack to show
    statelist.pop().render();
  } else {
    //Continue normally with game
    var sll = statelist.length - 1;
    var g = deepcopy(statelist[sll]);
    if(g.doframe(0)) statelist[sll+1] = g;
    g.render();
  }
}
class Game {
  constructor() {
    //Declare variables only, initialize new game
    //Both alpha time and index of frame
    this.alpha = 0;
    this.delta = 0;
    
    this.dead = false;
  }
  
  doframe(alpha) {
  
    if(this.dead) return false;
  
    //Ignore for now
    this.delta = alpha - this.alpha;
    this.alpha = alpha;
    
    return true;
  }
  //render the game to canvas
  render() {
    //clear screen
    ctx.clearRect(0,0,can.width,can.height);
    //draw all body sections
    var body = this.body;
    
    var bcolor = this.dead?"#CC3333":"#FFFFFF";
    
    for(var x in body) {
      drawBox(body[x].x, body[x].y, bcolor);
    }
    //draw apple
    drawBox(this.apple.x, this.apple.y, '#CC3333');
    //draw head
    drawBox(body[0].x, body[0].y, '#FFFFFF');
  }
}
//Leave this at the end
window.onload = init;
