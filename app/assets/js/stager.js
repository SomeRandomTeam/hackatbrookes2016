var lasttime = new Date().getTime();
var stage = new PIXI.Stage(0x66FF99);
var display = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight - 55);
var frameindex;
var frametime;
var FRAMERATE = 0.4;
var VELOCITY = 100;

//Sprite Frames

//Bomb Frames
var bomb_front_FRAMES = [
    "img/sprites/bomb/bombFront/bombFront1.png",
    "img/sprites/bomb/bombFront/bombFront2.png"
    ];
var bomb_back_FRAMES= [
    "img/sprites/bomb/bombBack/bombBack1.png",
    "img/sprites/bomb/bombBack/bombBack2.png"
    ];

//Healer Frames
var healers_front_FRAMES = [
    "img/sprites/healer/healerFront/healerFront1.png",
    "img/sprites/healer/healerFront/healerFront2.png",
];
var healers_back_FRAMES = [
    "img/sprites/healer/healerBack/healerBack1.png",
    "img/sprites/healer/healerBack/healerBack2.png",
];

//Tank Frames
var tank_front_FRAMES = [
    "img/sprites/tank/tankFront/tankFront1.png",
    "img/sprites/tank/tankFront/tankFront2.png",
];
var tank_back_FRAMES = [
    "img/sprites/tank/tankBack/tankBack1.png",
    "img/sprites/tank/tankBack/tankBack2.png",
];

//Builder Frames
var builder_front_FRAMES = [
    "img/sprites/builder/tankFront/builderFront1.png",
    "img/sprites/builder/tankFront/builderFront2.png",
];
var builder_back_FRAMES = [
    "img/sprites/builder/builderBack/builderBack1.png",
    "img/sprites/builder/builderBack/builderBack2.png",
];

//Rocket Frames
var rocket_front_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFront1.png",
    "img/sprites/rocket/rocketFront/rocketFront2.png",
];
var rocket_back_FRAMES = [
    "img/sprites/rocket/rocketBack/rocketBack1.png",
    "img/sprites/rocket/rocketBack/rocketBack2.png",
];

//Chopper Frames
var chopper_front_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_back_FRAMES = [
    "img/sprites/chopper/chopperBack/chopperBack1.png",
    "img/sprites/choppper/chopperBack/chopperBack2.png",
];
//End

document.body.appendChild(display.view);

requestAnimationFrame( animate );
sprite = createSprite("chopper", 100, 100, true);
stage.addChild(sprite);

frameindex = 0;
frametime = FRAMERATE;

function animate() {
  var currtime = new Date().getTime();
  var delta = (currtime-lasttime)/1000;

  frametime -= delta;
  if (frametime <= 0) {
     frameindex++;
     if (frameindex >= sprite.FRAMES.length) {
        frameindex = 0;
       }
    sprite.texture = PIXI.Texture.fromImage(sprite.FRAMES[frameindex]);
    frametime = FRAMERATE;
   }
  requestAnimationFrame( animate );
  display.render(stage);
  lasttime = currtime;
}

function createSprite(type, c_x, c_y, front) {

  switch(type) {
    case "bomb":
      var FRAMES = front ? bomb_front_FRAMES : bomb_back_FRAMES;
      break;
    case "tank":
      var FRAMES = front ? tank_front_FRAMES : tank_back_FRAMES;
      break;
    case "healer":
      var FRAMES = front ? healer_front_FRAMES : healer_back_FRAMES;
      break;
    case "chopper":
      var FRAMES = front ? chopper_front_FRAMES : chopper_back_FRAMES;
      break;
    case "rocket":
      var FRAMES = front ? rocket_front_FRAMES : rocket_back_FRAMES;
      break;
    case "builder":
      var FRAMES = front ? builder_front_FRAMES : builder_back_FRAMES;
      break;
    default:
      var FRAMES = undefined;
      throw "Sprite does not exist";
  }

  var newSprite = new PIXI.Sprite(PIXI.Texture.fromImage(FRAMES[0]));
  newSprite.anchor.x = 0.5;
  newSprite.anchor.y = 0.5;

  newSprite.position.x = c_x;
  newSprite.position.y = c_y;

  newSprite.height = window.innerHeight / 10;
  newSprite.width = window.innerHeight / 10;

  newSprite.FRAMES = FRAMES;
  return newSprite;
}
