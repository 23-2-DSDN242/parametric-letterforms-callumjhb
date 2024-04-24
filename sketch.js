const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "trianglesize": 100,
  "triangleorientation": 1,

  "circle1size": 0,
  "circle2size": 0,
  "circlex": 0,
  "circle1y": 0,
  "circle2y": 0,

  "linewidth": 20,
  "lineheight": 10,
  "linex": 10,
  "liney": -30,

  "rectanglewidth": 0,
  "rectangleheight": 0,
  "rectanglex": 0,
  "rectangley": 0
}

const letterB = {
  "circle1size": 100,
  "circle2size": 100,
  "circlex": 12.5,
  "circle1y": -50,
  "circle2y": 50,

  "lineheight": 30,
  "linewidth": 15,
  "linex": 12.5,
  "liney": 35,

  "rectangleheight": 200,
  "rectanglewidth": 25,
  "rectanglex": -62.5,
  "rectangley": -100,

  "trianglesize": 0,
  "triangleorientation": 1
}

const letterC = {
  "circle1size": 50,
  "circle2size": 50,
  "circlex": 25,
  "circle1y": -75,
  "circle2y": 75,

  "lineheight": 0,
  "linewidth": 0,
  "linex": 0,
  "liney": 0,

  "rectangleheight": 200,
  "rectanglewidth": 50,
  "rectanglex": -50,
  "rectangley": -100,

  "trianglesize": 0,
  "triangleorientation": 1
}

const backgroundColor  = "#fffae7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#000000";
const yellow = "#fffc33";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();

}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for triangle   
  let triPosx = posx + letterData["trianglesize"];
  let triPosy = posy + letterData["trianglesize"];
  let triAngle = letterData["triangleorientation"];
  
  // determine parameters for first circle
  let circSize1 = letterData["circle1size"];
  let circPosx = posx + letterData["circlex"];
  let circPos1y = posy + letterData["circle1y"];

  // determine parameters for second circle
  let circSize2 = letterData["circle2size"];
  let circPos2y = posy + letterData["circle2y"];

  // determine parameters for rectangle
  let rectWidth = letterData["rectanglewidth"];
  let rectHeight = letterData["rectangleheight"];
  let rectPosx = posx + letterData["rectanglex"];
  let rectPosy = posy + letterData["rectangley"];

  // determine parameters for lines
  let lineWidth = letterData["linewidth"];
  let lineHeight = letterData["lineheight"];
  let linePosx = posx + letterData["linex"];
  let linePosy = posy + letterData["liney"];

  
  //draw triangle
  triangle(0, triSize * -triAngle, triSize * -triAngle,triSize * triAngle, triSize * -triAngle,triSize * triAngle);
  
  // draw first circle
  fill(lightGreen);
  ellipse(circPosx, circPos1y, circSize1, circSize1);

  // draw second circle
  fill(lightGreen);
  ellipse(circPosx, circPos2y, circSize2, circSize2);

  // draw rectangle
  rect(rectPosx, rectPosy, rectWidth, rectHeight);

  // draw lines
  line(linePosx-lineWidth, linePosy, linePosx-lineWidth, linePosy+lineHeight);
  line(linePosx, linePosy, linePosx, linePosy+lineHeight);  
  line(linePosx+lineWidth, linePosy, linePosx+lineWidth, linePosy+lineHeight);
  
 

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
