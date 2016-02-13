var lasttime = new Date().getTime();
var stage = new PIXI.Stage(0x66FF99);
var display = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight - 55);
var frameindex;
var frametime;
var FRAMERATE = 0.08;
var VELOCITY = 100;
var bomb_FRAMES = [
    "img/sprites/bomb/bombFront1.png",
    "img/sprites/bomb/bombFront2.png"
    ];


document.body.appendChild(display.view);

requestAnimationFrame( animate );
bomb = createBomb(100, 100);
stage.addChild(bomb);

frameindex = 0;
frametime = FRAMERATE;

function animate() {
  var currtime = new Date().getTime();
  var delta = (currtime-lasttime)/1000;

  frametime -= delta;
  if (frametime <= 0) {
     frameindex++;
     if (frameindex >= bomb_FRAMES.length) {
        frameindex = 0;
       }
    bomb.texture = PIXI.Texture.fromImage(bomb_FRAMES[frameindex]);
    frametime = FRAMERATE;
   }
  requestAnimationFrame( animate );
  display.render(stage);
  lasttime = currtime;
}

function createBomb(c_x, c_y) {
  var newBomb = new PIXI.Sprite(PIXI.Texture.fromImage(bomb_FRAMES[0]));
  newBomb.anchor.x = 0.5;
  newBomb.anchor.y = 0.5;

  newBomb.position.x = c_x;
  newBomb.position.y = c_y;

  newBomb.height = window.innerHeight / 10;
  newBomb.width = window.innerHeight / 10;
  return newBomb;
}
