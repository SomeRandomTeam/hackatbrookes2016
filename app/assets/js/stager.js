var lasttime = new Date().getTime();
var stage = new PIXI.Stage(0x66FF99);
var display = PIXI.autoDetectRenderer(776, 776);
var frameindex;
var frametime;
var FRAMERATE = 0.4;
var VELOCITY = 100;

//Loading the background map.
var backgroundSprite = new PIXI.Sprite(PIXI.Texture.fromImage("img/maps/map1/map1.png"));
stage.addChild(backgroundSprite);

//Sprite Frames

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

//Tank Frames should contain more images
var tank_front_left_FRAMES = [
    "img/sprites/tank/tankFront/tankFront1.png",
    "img/sprites/tank/tankFront/tankFront2.png",
];
var tank_back_left_FRAMES = [
    "img/sprites/tank/tankBack/tankBack1.png",
    "img/sprites/tank/tankBack/tankBack2.png",
];
var tank_front_right_FRAMES = [
    "img/sprites/tank/tankFront/tankFront1.png",
    "img/sprites/tank/tankFront/tankFront2.png",
];
var tank_back_right_FRAMES = [
    "img/sprites/tank/tankBack/tankBack1.png",
    "img/sprites/tank/tankBack/tankBack2.png",
];
var tank_left_FRAMES = [
    "img/sprites/tank/tankFront/tankFront1.png",
    "img/sprites/tank/tankFront/tankFront2.png",
];
var tank_right_FRAMES = [
    "img/sprites/tank/tankFront/tankFront1.png",
    "img/sprites/tank/tankFront/tankFront2.png",
];

//Builder Frames
var builder_front_left_FRAMES = [
    "img/sprites/builder/tankFront/builderFront1.png",
    "img/sprites/builder/tankFront/builderFront2.png",
];
var builder_back_left_FRAMES = [
    "img/sprites/builder/builderBack/builderBack1.png",
    "img/sprites/builder/builderBack/builderBack2.png",
];
var builder_front_right_FRAMES = [
    "img/sprites/builder/tankFront/builderFront1.png",
    "img/sprites/builder/tankFront/builderFront2.png",
];
var builder_back_right_FRAMES = [
    "img/sprites/builder/builderBack/builderBack1.png",
    "img/sprites/builder/builderBack/builderBack2.png",
];
var builder_left_FRAMES = [
    "img/sprites/builder/tankFront/builderFront1.png",
    "img/sprites/builder/tankFront/builderFront2.png",
];
var builder_right_FRAMES = [
    "img/sprites/builder/tankFront/builderFront1.png",
    "img/sprites/builder/tankFront/builderFront2.png",
];

//Rocket Frames
var rocket_front_left_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFront1.png",
    "img/sprites/rocket/rocketFront/rocketFront2.png",
];
var rocket_back_left_FRAMES = [
    "img/sprites/rocket/rocketBack/rocketBack1.png",
    "img/sprites/rocket/rocketBack/rocketBack2.png",
];
var rocket_front_right_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFront1.png",
    "img/sprites/rocket/rocketFront/rocketFront2.png",
];
var rocket_back_right_FRAMES = [
    "img/sprites/rocket/rocketBack/rocketBack1.png",
    "img/sprites/rocket/rocketBack/rocketBack2.png",
];
var rocket_right_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFront1.png",
    "img/sprites/rocket/rocketFront/rocketFront2.png",
];
var rocket_left_FRAMES = [
    "img/sprites/rocket/rocketFront/rocketFront1.png",
    "img/sprites/rocket/rocketFront/rocketFront2.png",
];

//Chopper Frames
var chopper_front_left_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_front_back_FRAMES = [
    "img/sprites/chopper/chopperBack/chopperBack1.png",
    "img/sprites/choppper/chopperBack/chopperBack2.png",
];
var chopper_front_right_FRAMES = [
    "img/sprites/chopper/chopperFront/chopperFront1.png",
    "img/sprites/chopper/chopperFront/chopperFront2.png",
];
var chopper_back_right_FRAMES = [
    "img/sprites/chopper/chopperBack/chopperBack1.png",
    "img/sprites/choppper/chopperBack/chopperBack2.png",
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

function createSprite(type, c_x, c_y, dir_x, dir_y) {
  var NW = dir_x <= 0 && dir_y < 0;
  var NE = dir_x > 0 && dir_y < 0;
  var E  = dir_x > 0 && dir_y === 0;
  var SE = dir_x >= 0 && dir_y > 0;
  var SW = dir_x < 0 && dir_y > 0;
  var W = dir_x <= 0 && dir_y === 0;
  switch(type) {
    var FRAMES;
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
      } else (W){             
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
      } else (W){             
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
      } else (W){             
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
      } else (W){             
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
      } else (W){             
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
      } else (W){             
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

  newSprite.height = window.innerHeight / 10;
  newSprite.width = window.innerHeight / 10;

  newSprite.FRAMES = FRAMES;
  return newSprite;
}
