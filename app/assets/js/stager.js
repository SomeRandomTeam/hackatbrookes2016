
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
    "img/sprites/wall/wallBlue.png",
    "img/sprites/wall/wallRed.png"
    ];

//Tower Frames
var tower_FRAMES = [
    "img/sprites/tower/towerBlue.png",
    "img/sprites/tower/towerRed.png"
    ];

//Base Frames
var base_FRAMES = [
    "img/sprites/base/baseBlue.png",
    "img/sprites/base/baseRed.png"
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
    sprites[elem.id].FRAMES = updateFrames(elem.type, elem.direction.x, elem.direction.y);
  });
  data.nodes.forEach(function(elem) {
    if(!sprites[elem.id]) {
      sprites[elem.id] = createSprite(elem.type, elem.position.x, elem.position.y, elem.direction.x, elem.direction.y);
      stage.addChild(sprites[elem.id]);
    }
    //sprites[elem.id] = updatePosition(sprites[elem.id], elem.position.x, elem.position.y);
    //sprites[elem.id].FRAMES = updateFrames(elem.type, elem.direction.x, elem.direction.y);
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

  FRAMES = updateFrames(type, dir_x, dir_y);
  var newSprite = new PIXI.Sprite(PIXI.Texture.fromImage(FRAMES[0]));
  newSprite.anchor.x = 0.5;
  newSprite.anchor.y = 0.5;

  newSprite.position.x = c_x;
  newSprite.position.y = c_y;

  newSprite.height = window.innerHeight / 40;
  newSprite.width = window.innerHeight / 40;

  newSprite.FRAMES = FRAMES;
  return  newSprite;
}

function updatePosition(sprite, x, y) {
  sprite.position.x = x;
  sprite.position.y = y;
  return  sprite;
}

function updateFrames(type, dir_x, dir_y) {
  var NW = dir_x <= 0 && dir_y < 0;
  var NE = dir_x > 0 && dir_y < 0;
  var E  = dir_x > 0 && dir_y === 0;
  var SE = dir_x >= 0 && dir_y > 0;
  var SW = dir_x < 0 && dir_y > 0;
  var W = dir_x <= 0 && dir_y === 0;

  switch(type) {
    case "wall":
      return  wall_FRAMES;

    case "tower":
      return  tower_FRAMES;

    case "base":
      return  base_FRAMES;

    case "bomb":
      if(NW) {
        return  bomb_back_left_FRAMES;
      } else if (NE){
        return  bomb_back_right_FRAMES;
      } else if (E){
        return bomb_right_FRAMES;
      } else if (SE){
        return bomb_front_right_FRAMES;
      } else if (SW){
        return bomb_front_left_FRAMES;
      } else {
        return bomb_left_FRAMES;
      }

    case "tank":
      if(NW) {
        return tank_back_left_FRAMES;
      } else if (NE){
        return tank_back_right_FRAMES;
      } else if (E){
        return tank_right_FRAMES;
      } else if (SE){
        return tank_front_right_FRAMES;
      } else if (SW){
        return tank_front_left_FRAMES;
      } else {
        return tank_left_FRAMES;
      }

    case "healer":
      if(NW) {
        return healer_back_left_FRAMES;
      } else if (NE){
        return healer_back_right_FRAMES;
      } else if (E){
        return healer_right_FRAMES;
      } else if (SE){
        return healer_front_right_FRAMES;
      } else if (SW){
        return healer_front_left_FRAMES;
      } else{
        return healer_left_FRAMES;
      }

    case "chopper":
      if(NW) {
        return chopper_back_left_FRAMES;
      } else if (NE){
        return chopper_back_right_FRAMES;
      } else if (E){
        return chopper_right_FRAMES;
      } else if (SE){
        return chopper_front_right_FRAMES;
      } else if (SW){
        return chopper_front_left_FRAMES;
      } else{
        return chopper_left_FRAMES;
      }

    case "rocket":
      if(NW) {
        return rocket_back_left_FRAMES;
      } else if (NE){
        return rocket_back_right_FRAMES;
      } else if (E){
        return rocket_right_FRAMES;
      } else if (SE){
        return rocket_front_right_FRAMES;
      } else if (SW){
        return rocket_front_left_FRAMES;
      } else {
        return rocket_left_FRAMES;
      }

    case "builder":
      if(NW) {
        return builder_back_left_FRAMES;
      } else if (NE){
        return builder_back_right_FRAMES;
      } else if (E){
        return builder_right_FRAMES;
      } else if (SE){
        return builder_front_right_FRAMES;
      } else if (SW){
        return builder_front_left_FRAMES;
      } else {
        return builder_left_FRAMES;
      }

    default:
      throw "Sprite does not exist";
  }
}
