const filename = `Finished-README.md`;
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of the project?",
        },
        {
          type: "input",
          name: "description",
          message: "Give a description of the project.",
        },
        {
          type: "input",
          name: "installation",
          message: "Give installation instructions",
        },
        {
          type: "input",
          name: "usage",
          message: "What is the usage of this project?",
        },
        {
          type: "input",
          name: "license",
          message: "What kind of license does it have?",
        },
        {
          type: "input",
          name: "contribute",
          message: "Let other developers know how they can contribute.",
        },
        {
          type: "input",
          name: "testing",
          message: "How will you test the application?",
        },
      ]);
}

// TODO: Create a function to write README file
function writeToFile(nameOfFile, data) {
}


// #######################################################################################
// #######################################################################################
// #######################################################################################
// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();