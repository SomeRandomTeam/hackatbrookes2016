var game = angular.module('game', []);

game.controller('gameController', function($scope) {

  $scope.plusCounter = function(parent, id) {
    $scope.panel.forEach(function(elem) {
      if (elem.id === parent) {
        elem.glyphicons.forEach(function(glyphs){
          if(glyphs.id === id && glyphs.state != "disabled") {
            glyphs.labelCount += 1;
          }
        });
      }
    });
    $scope.activateFeature();
  };

  $scope.activateFeature = function() {
    $scope.panel.forEach(function(elem) {
      var sum = 0;
      switch(elem.id) {
        case "tank":
          elem.glyphicons.forEach(function(glyphs) {
            sum += glyphs.labelCount;
          });
          if (sum > 5) {
            $scope.panel.forEach(function(nextElem){
              if(nextElem.id === "chopper") {
                nextElem.blocked = "alert alert-success";
                $scope.activateButtons(nextElem.id);
              }
            });
          }
          break;
        case "rocket":
          elem.glyphicons.forEach(function(glyphs) {
            sum += glyphs.labelCount;
          });
          if (sum > 5) {
            $scope.panel.forEach(function(nextElem){
              if(nextElem.id === "bomb") {
                nextElem.blocked = "alert alert-success";
                $scope.activateButtons(nextElem.id);
              }
            });
          }
          break;
        case "builder":
          elem.glyphicons.forEach(function(glyphs) {
            sum += glyphs.labelCount;
          });
          if (sum > 5) {
            $scope.panel.forEach(function(nextElem){
              if(nextElem.id === "healer") {
                nextElem.blocked = "alert alert-success";
                $scope.activateButtons(nextElem.id);
              }
            });
          }
          break;
        case "wall":
          elem.glyphicons.forEach(function(glyphs) {
            sum += glyphs.labelCount;
          });
          if (sum > 5) {
            $scope.panel.forEach(function(nextElem){
              if(nextElem.id === "tower") {
                nextElem.blocked = "alert alert-success";
                $scope.activateButtons(nextElem.id);
              }
            });
          }
          break;
      }
    });
  };

  $scope.activateButtons = function(parentId) {
    $scope.panel.forEach(function(elem){
      if(elem.id === parentId){
        elem.glyphicons.forEach(function(glyphs){
          glyphs.state = "active";
        });
      }
    });
  };

  $scope.panel = [
    {
      id: "tank",
      src: "img/buttons/tankIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "tank_plus",
          state: "active",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "tank_forward",
          state: "active",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "tank_dashboard",
          state: "active",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      id: "chopper",
      src: "img/buttons/chopperIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "chopper_plus",
          state: "disabled",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "chopper_forward",
          state: "disabled",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "chopper_dashboard",
          state: "disabled",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "chopper_flash",
          state: "disabled",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      id: "rocket",
      src: "img/buttons/rocketIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "rocket_plus",
          state: "active",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "rocket_forward",
          state: "active",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "rocket_dashboard",
          state: "active",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "rocket_flash",
          state: "active",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      id: "bomb",
      src: "img/buttons/bombIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "bomb_plus",
          state: "disabled",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "bomb_forward",
          state: "disabled",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "bomb_dashboard",
          state: "disabled",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "bomb_flash",
          state: "disabled",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    },
    {
      id: "builder",
      src: "img/buttons/builderIcon.png",
      blocked: "alert alert-success",
      glyphicons: [
        {
          id: "builder_plus",
          state: "active",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "builder_forward",
          state: "active",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "builder_dashboard",
          state: "active",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      id: "healer",
      src: "img/buttons/healerIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "healer_plus",
          state: "disabled",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "healer_forward",
          state: "disabled",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "healer_dashboard",
          state: "disabled",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      id: "wall",
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
          state: "active",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "wall_dashboard",
          state: "active",
          labelCount: 0,
          glyph: "dashboard"
        }
      ]

    },
    {
      id: "tower",
      src: "img/buttons/towerIcon.png",
      blocked: "alert alert-danger",
      glyphicons: [
        {
          id: "tower_plus",
          state: "disabled",
          labelCount: 0,
          glyph: "plus"
        },
        {
          id: "tower_forward",
          state: "disabled",
          labelCount: 0,
          glyph: "forward"
        },
        {
          id: "tower_dashboard",
          state: "disabled",
          labelCount: 0,
          glyph: "dashboard"
        },
        {
          id: "tower_flash",
          state: "disabled",
          labelCount: 0,
          glyph: "flash"
        }
      ]

    }];
});
