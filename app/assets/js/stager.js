
var lasttime = new Date().getTime();
var stage = new PIXI.Stage(0x66FF99);
var display = PIXI.autoDetectRenderer(625, 625);
var frameindex;
var frametime;
var FRAMERATE = 0.4;
var VELOCITY = 100;

//Loading the background map.
var backgroundSprite = new PIXI.Sprite(PIXI.Texture.fromImage("img/maps/map4/map4.png"));
stage.addChild(backgroundSprite);

//Sprite Frames

//Wall Frames
var wall_FRAMES = [
    "img/sprites/wall/wall.png"
    ];

//Tower Frames
var tower_FRAMES = [
    "img/sprites/tower/tower.png"
    ];

//Base Frames
var base_FRAMES = [
    "img/sprites/base/base.png"
    ];

//Bomb Frames
var bomb_front_left_FRAMES = [
    "img/sprites/bomb/bombFront/bombFront1.png",
    "img/sprites/bomb/bombFront/bombFront2.png"
    ];
var bomb_back_left_FRAMES= [
    "img/sprites/bomb/bombBack/bombBack1.png",
    "img/sprites/bomb/bombBack/bombBack2.png"
    ];
var bomb_front_right_FRAMES = [
    "img/sprites/bomb/bombFront/bombFront1.png",
    "img/sprites/bomb/bombFront/bombFront2.png"
    ];
var bomb_back_right_FRAMES= [
    "img/sprites/bomb/bombBack/bombBack1.png",
    "img/sprites/bomb/bombBack/bombBack2.png"
    ];
var bomb_right_FRAMES = [
    "img/sprites/bomb/bombFront/bombFront1.png",
    "img/sprites/bomb/bombFront/bombFront2.png"
    ];
var bomb_left_FRAMES= [
    "img/sprites/bomb/bombFront/bombFront1.png",
    "img/sprites/bomb/bombFront/bombFront2.png"
    ];

//Healer Frames
var healers_front_left_FRAMES = [
    "img/sprites/healer/healerFront/healerFront1.png",
    "img/sprites/healer/healerFront/healerFront2.png",
];
var healers_back_left_FRAMES = [
    "img/sprites/healer/healerBack/healerBack1.png",
    "img/sprites/healer/healerBack/healerBack2.png",
];
var healers_front_right_FRAMES = [
    "img/sprites/healer/healerFront/healerFront1.png",
    "img/sprites/healer/healerFront/healerFront2.png",
];
var healers_back_right_FRAMES = [
    "img/sprites/healer/healerBack/healerBack1.png",
    "img/sprites/healer/healerBack/healerBack2.png",
];
var healers_right_FRAMES = [
    "img/sprites/healer/healerFront/healerFront1.png",
    "img/sprites/healer/healerFront/healerFront2.png",
];
var healers_left_FRAMES = [
    "img/sprites/healer/healerFront/healerFront1.png",
    "img/sprites/healer/healerFront/healerFront2.png",
];

var tank_front_left_FRAMES = [
    "img/sprites/tank/DownLeft/Tank1.png",
    "img/sprites/tank/DownLeft/Tank2.png",
];
var tank_back_left_FRAMES = [
    "img/sprites/tank/UpLeft/Tank5.png",
    "img/sprites/tank/UpLeft/Tank6.png",
];
var tank_front_right_FRAMES = [
    "img/sprites/tank/DownRight/Tank1.png",
    "img/sprites/tank/DownRight/Tank2.png",
];
var tank_back_right_FRAMES = [
    "img/sprites/tank/UpRight/Tank.png",
    "img/sprites/tank/UpRight/Tank2.png",
];
var tank_left_FRAMES = [
    "img/sprites/tank/Left/Tank1.png",
    "img/sprites/tank/Left/Tank2.png",
];
var tank_right_FRAMES = [
    "img/sprites/tank/Right/Tank3.png",
    "img/sprites/tank/Right/Tank4.png",
];

//Builder Frames
var builder_front_left_FRAMES = [
    "img/sprites/builder/builderFront/builderFront1.png",
    "img/sprites/builder/builderFront/builderFront2.png",
];
var builder_back_left_FRAMES = [
    "img/sprites/builder/builderBack/builderBack1.png",
    "img/sprites/builder/builderBack/builderBack2.png",
];
var builder_front_right_FRAMES = [
    "img/sprites/builder/builderFront/builderFront1.png",
    "img/sprites/builder/builderFront/builderFront2.png",
];
var builder_back_right_FRAMES = [
    "img/sprites/builder/builderBack/builderBack1.png",
    "img/sprites/builder/builderBack/builderBack2.png",
];
var builder_left_FRAMES = [
    "img/sprites/builder/builderFront/builderFront1.png",
    "img/sprites/builder/builderFront/builderFront2.png",
];
var builder_right_FRAMES = [
    "img/sprites/builder/builderFront/builderFront1.png",
    "img/sprites/builder/builderFront/builderFront2.png",
];

//Rocket Frames
var rocket_front_left_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFrontLeft.png",
    "img/sprites/rocket/rocketFront/rocketFrontLeft.png",
];
var rocket_back_left_FRAMES = [
    "img/sprites/rocket/rocketBack/rocketBackLeft.png",
    "img/sprites/rocket/rocketBack/rocketBackLeft.png",
];
var rocket_front_right_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFrontRight.png",
    "img/sprites/rocket/rocketFront/rocketFrontRight.png",
];
var rocket_back_right_FRAMES = [
    "img/sprites/rocket/rocketBack/rocketBackRight.png",
    "img/sprites/rocket/rocketBack/rocketBackRight.png",
];
var rocket_right_FRAMES = [
    "img/sprites/rocket/rocketSide/rocketRight.png",
    "img/sprites/rocket/rocketSide/rocketRight.png",
];
var rocket_left_FRAMES = [
    "img/sprites/rocket/rocketSide/rocketLeft.png",
    "img/sprites/rocket/rocketSide/rocketLeft.png",
];

//Chopper Frames
var chopper_front_left_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_back_left_FRAMES = [
    "img/sprites/chopper/chopperBack/chopperBack.png",
    "img/sprites/choppper/chopperBack/chopperBack.png",
];
var chopper_front_right_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_back_right_FRAMES = [
    "img/sprites/chopper/chopperBack/chopperBack.png",
    "img/sprites/choppper/chopperBack/chopperBack.png",
];
var chopper_left_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_right_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
//End

document.getElementById('frame').appendChild(display.view);

requestAnimationFrame( animate );
sprite = createSprite("chopper", 200, 200, true);
var sprites = {};
//stage.addChild(sprite);
var socket = io();
socket.on('update', function(data) {
  data.units.forEach(function(elem) {
    if (!sprites[elem.id]) {
      sprites[elem.id] = createSprite(elem.type, elem.position.x, elem.position.y, elem.direction.x, elem.direction.y);
      stage.addChild(sprites[elem.id]);
    }
    sprites[elem.id] = updatePosition(sprites[elem.id], elem.position.x, elem.position.y);
  });
})

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

function createSprite(type, c_x, c_y, dir_x, dir_y) {
  var NW = dir_x <= 0 && dir_y < 0;
  var NE = dir_x > 0 && dir_y < 0;
  var E  = dir_x > 0 && dir_y === 0;
  var SE = dir_x >= 0 && dir_y > 0;
  var SW = dir_x < 0 && dir_y > 0;
  var W = dir_x <= 0 && dir_y === 0;
  var FRAMES;
  switch(type) {
    case "wall":
      FRAMES = wall_FRAMES;
      break;
    case "tower":
      FRAMES = tower_FRAMES;
      break;
    case "base":
      FRAMES = base_FRAMES;
      break;
    case "bomb":
      if(NW) {
        FRAMES = bomb_back_left_FRAMES;
      } else if (NE){
        FRAMES = bomb_back_right_FRAMES;
      } else if (E){
        FRAMES = bomb_right_FRAMES;
      } else if (SE){
        FRAMES = bomb_front_right_FRAMES;
      } else if (SW){
        FRAMES = bomb_front_left_FRAMES;
      } else {
        FRAMES = bomb_left_FRAMES;
      }
      break;
    case "tank":
      if(NW) {
        FRAMES = tank_back_left_FRAMES;
      } else if (NE){
        FRAMES = tank_back_right_FRAMES;
      } else if (E){
        FRAMES = tank_right_FRAMES;
      } else if (SE){
        FRAMES = tank_front_right_FRAMES;
      } else if (SW){
        FRAMES = tank_front_left_FRAMES;
      } else {
        FRAMES = tank_left_FRAMES;
      }
      break;
    case "healer":
      if(NW) {
        FRAMES = healer_back_left_FRAMES;
      } else if (NE){
        FRAMES = healer_back_right_FRAMES;
      } else if (E){
        FRAMES = healer_right_FRAMES;
      } else if (SE){
        FRAMES = healer_front_right_FRAMES;
      } else if (SW){
        FRAMES = healer_front_left_FRAMES;
      } else{
        FRAMES = healer_left_FRAMES;
      }
    break;
    case "chopper":
      if(NW) {
        FRAMES = chopper_back_left_FRAMES;
      } else if (NE){
        FRAMES = chopper_back_right_FRAMES;
      } else if (E){
        FRAMES = chopper_right_FRAMES;
      } else if (SE){
        FRAMES = chopper_front_right_FRAMES;
      } else if (SW){
        FRAMES = chopper_front_left_FRAMES;
      } else{
        FRAMES = chopper_left_FRAMES;
      }
      break;
    case "rocket":
      if(NW) {
        FRAMES = rocket_back_left_FRAMES;
      } else if (NE){
        FRAMES = rocket_back_right_FRAMES;
      } else if (E){
        FRAMES = rocket_right_FRAMES;
      } else if (SE){
        FRAMES = rocket_front_right_FRAMES;
      } else if (SW){
        FRAMES = rocket_front_left_FRAMES;
      } else {
        FRAMES = rocket_left_FRAMES;
      }
      break;
    case "builder":
      if(NW) {
        FRAMES = builder_back_left_FRAMES;
      } else if (NE){
        FRAMES = builder_back_right_FRAMES;
      } else if (E){
        FRAMES = builder_right_FRAMES;
      } else if (SE){
        FRAMES = builder_front_right_FRAMES;
      } else if (SW){
        FRAMES = builder_front_left_FRAMES;
      } else {
        FRAMES = builder_left_FRAMES;
      }
      break;
    default:
      FRAMES = undefined;
      throw "Sprite does not exist";
  }

  var newSprite = new PIXI.Sprite(PIXI.Texture.fromImage(FRAMES[0]));
  newSprite.anchor.x = 0.5;
  newSprite.anchor.y = 0.5;

  newSprite.position.x = c_x;
  newSprite.position.y = c_y;

  newSprite.height = window.innerHeight / 15;
  newSprite.width = window.innerHeight / 15;

  newSprite.FRAMES = FRAMES;
  return newSprite;
}

function updatePosition(sprite, x, y) {
  sprite.position.x = x;
  sprite.position.y = y;
  return sprite;
}
