// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const mdModule = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license does it have?",
      choices: [
        "None",
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        "CC0",
        "Attribution 4.0 International",
        "Attribution-ShareAlike 4.0 International",
        "Attribution-NonCommercial 4.0 International",
        "Attribution-NoDerivates 4.0 International",
        "Attribution-NonCommmercial-ShareAlike 4.0 International",
        "Attribution-NonCommercial-NoDerivatives 4.0 International",
        "Eclipse Public License 1.0",
        "GNU GPL v3",
        "GNU GPL v2",
        "GNU AGPL v3",
        "GNU LGPL v3",
        "GNU FDL v1.3",
        "The Hippocratic License 2.1",
        "The Hippocratic License 3.0",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
        "Attribution License (BY)",
        "Open Database License (ODbL)",
        "Public Domain Dedication and License (PDDL)",
        "The Perl License",
        "The Artistic License 2.0",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "The Do What the Fuck You Want to Public License",
        "The zlib/libpng License",
      ],
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
      name: "contribute",
      message: "Let other developers know how they can contribute.",
    },
    {
      type: "input",
      name: "testing",
      message: "How will you test the application?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "At what email address should people reach you?",
    },
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         console.log("Write complete", err)
//     } )
// }

// Generate the contents of the README.md file
const generateREADME = ({ title, description, installation, usage, license, contribute, testing, github, email }) =>
  `
# Title: ${title}
${mdModule.renderLicenseSection(license)}
## Description
> ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Testing](#testing)

## Installation
> ${installation}
## Usage
> ${usage}
## Contribute
> ${contribute}
## Testing
> ${testing}
## Questions
If you have any questions or need to reach me:

GitHub: https://github.com/${github}

Email: ${email}
`;

// #######################################################################################
// #######################################################################################
// #######################################################################################
// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) =>
      fs.writeFileSync("create-README.md", generateREADME(answers))
    )
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
