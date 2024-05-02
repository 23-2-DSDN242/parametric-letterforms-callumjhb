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
  new_letter["circle1size"] = map(percent, 0, 100, oldObj["circle1size"], newObj["circle1size"]);
  new_letter["circle2size"] = map(percent, 0, 100, oldObj["circle2size"], newObj["circle2size"]);
  new_letter["circlex"] = map(percent, 0, 100, oldObj["circlex"], newObj["circlex"]);
  new_letter["circle1y"] = map(percent, 0, 100, oldObj["circle1y"], newObj["circle1y"]);
  new_letter["circle2y"] = map(percent, 0, 100, oldObj["circle2y"], newObj["circle2y"]);
  new_letter["linewidth"] = map(percent, 0, 100, oldObj["linewidth"], newObj["linewidth"]);
  new_letter["lineheight"] = map(percent, 0, 100, oldObj["lineheight"], newObj["lineheight"]);
  new_letter["linex"] = map(percent, 0, 100, oldObj["linex"], newObj["linex"]);
  new_letter["liney"] = map(percent, 0, 100, oldObj["liney"], newObj["liney"]);
  new_letter["rectanglewidth"] = map(percent, 0, 100, oldObj["rectanglewidth"], newObj["rectanglewidth"]);
  new_letter["rectangleheight"] = map(percent, 0, 100, oldObj["rectangleheight"], newObj["rectangleheight"]);
  new_letter["rectanglex"] = map(percent, 0, 100, oldObj["rectanglex"], newObj["rectanglex"]);
  new_letter["rectangley"] = map(percent, 0, 100, oldObj["rectangley"], newObj["rectangley"]);



  return new_letter;
}

var swapWords = [
  "INGENUO!",
  "!MDDN242",
  "PROJECT2",
  "CALLUM B"
]
