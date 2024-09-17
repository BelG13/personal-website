let grid;
function setup() {

    // canvas creation and setup
    var args = document.getElementById("main-content").getBoundingClientRect()
    var canvas = createCanvas(args.width, 400);
    // frameRate(10);
    canvas.parent("canvas-container-1");

    //  global variable settings
    grid = new Grid(20, 10);
  }

function mouseClicked(){
    grid = new Grid(20, 10);
}

function windowResized() {
  var args = document.getElementById("main-content").getBoundingClientRect()
  resizeCanvas(width, 400);
}
  
function draw() {
    background(10, 50, 70);
    grid.show();
    grid.update();
  }