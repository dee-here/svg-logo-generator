const fs = require('fs');
const {Shape, createShape} = require("./lib/shape");
// const {Shape, createShape} = require("./lib/shape");

const inquirer = require('inquirer');
const promptQuestions = [
  {
    type: "input",
    message: "Enter upto 3 characters for logo text",
    name: "text",
    validate: data => data.length <=3,
  },
  {
    type: "input",
    message: "Specify a color for the text",
    name: "textColor",
    default: "white",
  },
  {
    type: "list",
    message: "Select a Shape for your logo",
    name: "shape",
    default: 'Circle',
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Specify a background color for the shape",
    name: "shapeColor",
    default: "red",
  },

];

//  Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log(`${fileName}  created successfully.`);
    });
  }



function init() {
  inquirer.prompt(promptQuestions)
  .then(answers => {
      console.log('Answers are: ', answers);
      // createShape(answers);
      writeToFile("./examples/logo.svg", createShape(answers));
      // const testShape = new Shape(answers.shape, answers.shapeColor, answers.text, answers.textColor);
      // console.log("testShape ", testShape);
      // console.log(testShape.circle());
      //call CreateSvg from shape.js and write it to file


      // inquirer.prompt(questions).then((answers) => {
      //   writeToFile("./examples/logo/svg", createSvg(answers));
      // });
  });
}

//start execution
init();