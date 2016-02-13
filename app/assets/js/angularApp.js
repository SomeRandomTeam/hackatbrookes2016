var game = angular.module('game', []);

game.controller('gameController', function($scope) {
  $scope.panel = [
    {
      src: "img/buttons/tankIcon.png",
      glyphicons: [
        {
          labelCount: 0,
          glyph: "plus"
        },
        {
          labelCount: 0,
          glyph: "forward"
        },
        {
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/chopperIcon.png",
      glyphicons: [
        {
          labelCount: 0,
          glyph: "plus"
        },
        {
          labelCount: 0,
          glyph: "forward"
        },
        {
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/rocketIcon.png",
      glyphicons: [
        {
          labelCount: 0,
          glyph: "plus"
        },
        {
          labelCount: 0,
          glyph: "forward"
        },
        {
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/bombIcon.png",
      glyphicons: [
        {
          labelCount: 0,
          glyph: "plus"
        },
        {
          labelCount: 0,
          glyph: "forward"
        },
        {
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      src: "img/buttons/builderIcon.png",
      glyphicons: [
        {
          labelCount: 0,
          glyph: "plus"
        },
        {
          labelCount: 0,
          glyph: "forward"
        },
        {
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      src: "img/buttons/healerIcon.png",
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
