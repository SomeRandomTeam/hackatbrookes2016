var stage = new PIXI.Stage(0x66FF99);
var display = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight - 55);

document.body.appendChild(display.view);

requestAnimationFrams( animate );

function animate() {
  requqestAnimationFrame( animate );
  display.render(stage);
}
