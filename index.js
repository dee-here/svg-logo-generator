console.log('Index.js !');

const fs = require('fs');
const inquirer = require('inquirer');
const promptQuestions = [
    {
        type: 'input',
        message: 'Enter upto 3 characters for logo text',
        name: 'text',
        default: 'ABC',
    }
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

inquirer.prompt(promptQuestions)
    .then(answers => {
        console.log('Answers are: ', answers);
    });