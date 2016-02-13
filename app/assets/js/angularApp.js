var game = angular.module('game', []);

game.controller('gameController', function($scope) {
  $scope.panel = [
    {
      src: "img/buttons/tankIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "tank_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "tank_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "tank_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/chopperIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "chopper_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "chopper_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "chopper_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "chopper_flash",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/rocketIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "rocket_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "rocket_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "rocket_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "rocket_flash",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/bombIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "bomb_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "bomb_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "bomb_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "bomb_flash",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/builderIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "builder_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "builder_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "builder_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/healerIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "healer_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "healer_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "healer_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/wallIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "wall_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "wall_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "wall_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/towerIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "tower_plus",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "tower_forward",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "tower_dashboard",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "tower_flash",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    }];
});
