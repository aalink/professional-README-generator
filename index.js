// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of the project?",
  "Give a description of the project.",
  "Give installation instructions",
  "What is the usage of this project?",
  "What kind of license does it have?",
  "Let other developers know how they can contribute.",
  "How will you test the application?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "installation",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "license",
      message: questions[4],
    },
    {
      type: "input",
      name: "contribute",
      message: questions[5],
    },
    {
      type: "input",
      name: "testing",
      message: questions[6],
    },
  ]);
}

// Function call to initialize app
init();
