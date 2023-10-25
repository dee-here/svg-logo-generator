# SVG Logo Maker
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  


## Description
This is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The tool prompts the user to select a color, shape and text for the logo, and then saves the generated SVG file to .svg extension file.


## screen Recording
[SVG Logo Generator working clip](https://drive.google.com/file/d/1nnpTMY2PxdIZdecz0YEeRsn6bRjWZ_Yg/view)

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |-------------| 
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| node.js    | [https://nodejs.org/en](https://nodejs.org/en) | 
| Git | [https://git-scm.com/](https://git-scm.com/)     |   
| JEST | [https://jestjs.io/](https://jestjs.io/)     |  
 

## Installation 
This tool is a command-line application. It requires node.js to be installed.

## Usage
Using a commnd-line terminal navigate to the location of the index.js file.

Install dependencies by this command:
<pre>
npm install
</pre>

Run this tool by using this command
<pre>
node index.js
</pre>

The tool then prompts the user to provide upto 3 characters for the logo.
This is validated and user is allowed to proceed only when validation is successful.

The tool then prompts the user to provide a color for text (color names like red or hex codes like #aabbcc)

Next prompt is for shape from a list of Circle, Triangle and Square

Next prompt is to provide a background to the shape (color names like red or hex codes like #aabbcc)

After all the prompts are answered a logo.svg file is created in the examples folder.

## Tests
This application has jest tests written to test all the major classes and methods used. Tests are written for Class Shape which has all the properties and methods to create an SVG based on user provided inputs.

createShape() is an important function that is responsible to create the corect type of shape based on users choice. Tests are written to cover all 3 user choices.

Tests cover all the Class constructors to make sure correct instances are created. 

Run the test using this command
<pre>
npm run test
</pre>

## Author Info

Deepak Sinha
* [Portfolio](https://dee-here.github.io/portfolio/)
* [Github](https://github.com/dee-here)
* [Questions ](mailto:deepakdilse@gmail.com)

## License
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  

[License Link](https://choosealicense.com/licenses/mit/)  
