const fs = require('fs');
const {Shape, createShape} = require("./lib/shape");
// const {Shape, createShape} = require("./lib/shape");

const inquirer = require('inquirer');
const promptQuestions = [
  {
    type: "input",
    message: "Enter upto 3 characters for logo text",
    name: "text",
    default: "",
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
      writeToFile("./examples/logo.svg", createShape(answers));
  });
}

//start execution
init();