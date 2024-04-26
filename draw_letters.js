/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffae7";
var systemLineColor = "#000000";
var systemBoxColor = "#C73869";

/* internal constants */
const yellow  = "#FFE75E";
const red  = "#FB5959";
const blue  = "#82B0EF";
const strokeColour = "#000000";


function drawLetter(letterData) {
  strokeWeight(4);

 // determine parameters for triangle   
 let triPointx = 50;
 let triPointy = letterData["triangleorientation"];
 let triLeftx = 0;
 let triLefty = 200*letterData["triangleorientation"];
 let triRightx = 100;
 let triRighty = 200*letterData["triangleorientation"];
 
 // determine parameters for first circle
 let circSize1 = letterData["circle1size"];
 let circPosx = letterData["circlex"];
 let circPos1y = letterData["circle1y"];

 // determine parameters for second circle
 let circSize2 = letterData["circle2size"];
 let circPos2y = letterData["circle2y"];

 // determine parameters for rectangle
 let rectWidth = letterData["rectanglewidth"];
 let rectHeight = letterData["rectangleheight"];
 let rectPosx = letterData["rectanglex"];
 let rectPosy = letterData["rectangley"];

 // determine parameters for lines
 let lineWidth = letterData["linewidth"];
 let lineHeight = letterData["lineheight"];
 let linePosx = letterData["linex"];
 let linePosy = letterData["liney"];
 
 //draw triangle
 fill(blue);
 triangle(triPointx, triPointy, triLeftx, triLefty, triRightx, triRighty);
 
 // draw first circle
 fill(red);
 ellipse(circPosx, circPos1y, circSize1, circSize1);

 // draw second circle
 fill(red);
 ellipse(circPosx, circPos2y, circSize2, circSize2);

 // draw rectangle
 fill(yellow);
 rect(rectPosx, rectPosy, rectWidth, rectHeight);

 // draw lines
 line(linePosx-lineWidth, linePosy, linePosx-lineWidth, linePosy+lineHeight);
 line(linePosx, linePosy, linePosx, linePosy+lineHeight);  
 line(linePosx+lineWidth, linePosy, linePosx+lineWidth, linePosy+lineHeight);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
