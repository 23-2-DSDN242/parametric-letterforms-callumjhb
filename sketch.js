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
  "circle1size": 0,
  "circle2size": 0,
  "circle1offsetx": 0,
  "circle1offsety": 35,
  "circle2offsetx": 0,
  "circle2offsety": 35,
  "triSize": 70,
  "triOffsetX": 0,
  "triOffsetY": 0,
  "linebeginX": 0,
  "linebeginY": 0,
  "lineendX": 0,
  "lineendY": 80
}

const letterB = {
  "circle1size": 50,
  "circle2size": 0,
  "circle1offsetx": 0,
  "circle1offsety": 35,
  "circle2offsetx": 0,
  "circle2offsety": 35,
  "triSize": 0,
  "triOffsetX": 0,
  "triOffsetY": 0,
  "linebeginX": 0,
  "linebeginY": 0,
  "lineendX": 0,
  "lineendY": 0
}

const letterC = {
  "circle1size": 0,
  "circle2size": 0,
  "circle1offsetx": 0,
  "circle1offsety": 35,
  "circle2offsetx": 0,
  "circle2offsety": 35,
  "triSize": 0,
  "triOffsetX": 0,
  "triOffsetY": 0,
  "linebeginX": 0,
  "linebeginY": 80,
  "lineendX": 80,
  "lineendY": 80
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

  // determine parameters for first circle
  let size1 = letterData["size"];
  let pos1x = posx + letterData["circle1offsetx"];
  let pos1y = posy + letterData["circle1offsety"];
  
  let triHeight = letterData["triSize"];

  let linex1 = posx + letterData["linebeginX"];
  let linex2 = posx + letterData["lineendX"];
  let liney1 = posy + letterData["linebeginY"];
  let liney2 = posy + letterData["lineendY"];

  // draw two circles
   fill(lightGreen);
  ellipse(pos1x, pos1y, size1, size1);

  // draw triangle
  fill(yellow);
  triangle(posx, posy-triHeight, posx-triHeight, posy+triHeight, posx+triHeight, posy+triHeight);

  //draw lines
  line(linex1-10,liney1, linex2-10, liney2);
  line(linex1,liney1, linex2, liney2);
  line(linex1+10,liney1, linex2+10, liney2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
