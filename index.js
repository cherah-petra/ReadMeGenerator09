// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
// main inquirer questions types: input, list, confirm and checkbox.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose an associated license: ",
        choices: ["MIT", "Boost", "Creative Commons", "Eclipse"]
    },
    {
        type: "input",
        name: "installation",
        message: "Describe what is required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators, third-party assets or tutorials. Include links.",
    },
    {
        type: "input",
        name: "features",
        message: "List features here:"
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application and provide examples on how to run them:"
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your Github username:"
    },
    {
        type: "input",
        name: "email",
        message: "please provide your email address:"
    }
]; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{ 
        console.log(data)
        fs.writeFileSync("readme.md",generateMarkdown(data))
    })
}

// Function call to initialize app
init();
