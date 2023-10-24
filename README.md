# svg-logo-generator
Node.js tool to create a svg logo


## psuedo code

//use inquirer to accept user input
Questions:  text, text color, shape, shape color

answers stores all these values

// create an svg template , and replace it with values from prompts string literls

// inside lib create a shape class that is then extended by Triangle, Circle and Square and those 3 shapes are exported.

//test for the shape class as well as the svg
// If the svg is passed a color , the svg should be of that color

how do we create svg =>
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

how do we create svg?
we take in 4 inputs 
Shape Class needs to know what Color it is.
    should have an attribute to store color!

svg needs to give us a string that looks like an HTML
svg Class optional but could provide the svg details like color, text shape and text color. 
<!-- Size is pre defined 300x200 px  -->

    Questions
    1. what text - upto 3
    2. text-color: string
    3. shape: one from list
    4. Shape color: string


Switch case to create an instance of the shape that the user wants

we modify the SVG template literas to accomodate user inputs

We write the svg file to file location using writefile


Test
tests should test 
1.what functions return, 
2.the classes are classes of that instance and 
3.if a value is passed to class, it is set correctly. 


HINT !!!   test create an SVG !!!
Check out the gitlabs folder for examples!!!