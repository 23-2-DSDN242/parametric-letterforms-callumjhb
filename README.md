## MDDN 242 2024 Assignment 2
**Callum Benfell**
**Ingenuo**

**Early Inspiration**

My idea is inspired by the Memphis Milano Group of the 1980's, who used a lot of bright, clashing colours and simple shapes in their design. I hoped that their emphasis on simple, repeatable components would translate well to this project. 

I was interested when Phoebe mentioned that p5js tends to have a sort of “default style” that beginners’ work usually conforms to - this includes flat colours and black outlines. The Memphis Group championed the idea of introducing a naive artistic style to graphic and product design, and I wondered if I could lean into this naivety (and also embrace my own lack of experience). The obvious risk here is that this might not look intentional, and looking back I’m still not sure that my execution was as successful as I hoped. 

**Beginning to Code**

I began attempting to implement this idea in code, but struggled to parameterise my letters and quickly retreated back to the drawing board - literally. I sketched out concepts on an old maths workbook’s graph paper, and plotted out where the points would be (and therefore how the different parameters could function). 

I initially intended to include a blue triangle in some of the letters, but could not come up with a way of incorporating this without having 15+ parameters. The blue triangle was only used by three letters (A, M and W) and I felt that I could represent these fine without the triangle, so it was abandoned. 

It’s also worth noting that I briefly trialled using simple bezier curves (in code; I do NOT claim to have the mathematical nous nor the patience to graph them out individually on paper), but ultimately abandoned this experiment as I felt that I was losing the coherency and theme that my initial concept offered.

**Completing the Alphabet**

I translated my letters into code once I was more satisfied with the overall coherency and feel of my sketched letters. I made a few tweaks (notably on the A, which was actually an accident when I mistyped some of the measurements on its letter.js file - I later tried to replicate this accidental success by messing around with parameters on the editor file) but largely was happy with what I had come up with when sketching. 

I trialled using a map to create a larger variety of colours in my design than yellow, red and black but this generally led to letters straying from the naive, primary colour aesthetic that I thought looked best.

One issue I encountered was that I could not reduce my parameters to less than 12 without compromising my design. I looked for a few solutions, including reducing the parameters that the circles used (for instance, making a single parameter for their sizes instead of two), but this just made more problems. This was a regular source of frustration during my project, and I would consider myself to have been more successful if I had managed to reduce the number of parameters used. 

**Interpolation**

The bulk of the changes I made to my alphabet occurred at the interpolation stage. Initially the two circles used in most of my letters would shrink down to a size of (0,0) at the coordinates (0,0) when they were not needed in the letter being generated. This looked hilariously ugly: they would bob up and down from the top left corner, shrinking and expanding in a way that was predictable and uninteresting. For each letter that did not use both circles, I individually assigned coordinates that the circles would disappear to. I tried to make this look natural and visually interesting.

**Exhibition**

I decided to call my font “Ingenuo”, which means ‘naive’ in Italian (the native language of the Memphis group). I feel like I altered my initial concept a little, but retained the focus on making letters that feel playful, fun and naive. Another way I tried to make the font feel friendly was through the default character. I trialled a few options, like a child's face and a large ‘I’ but decided that a little mascot character felt the most coherent with the feel I was aiming for. The other words I used to exhibit my file are ‘!MDDN242’, ‘PROJECT2’ and ‘CALLUM B’. No points for guessing why.




