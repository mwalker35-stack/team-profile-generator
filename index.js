const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee.js");
const engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
teamArray = [];




const managerQuestions = [{
        type: "input",
        name: "manager",
        message: "What is the Manager's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
    }]



    const engineerQuestions =
    [{
        type: "input",
        name: "manager",
        message: "What is the Engineer's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "officeNumber",
        message: "What is the Engineer's GitHub name?",
    }]

const internQuestions =
    [{
        type: "input",
        name: "intern",
        message: "What is the Intern's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "officeNumber",
        message: "What is the Intern's GitHub name?",
    }]

    const sharedQuestions = [
        { 
            type: "list",
            name: "menu",
            message: "Choose a employee to add or select Finsihed.",
            choices: ["Engineer", "Intern", "Finished"],
        },
        {
        type: "input",
        name: "manager",
        message: "What is the Employee's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "officeNumber",
        message: "What is the Engineer's GitHub name?",
        when: (answers) => answers.menu === "Engineer"
    },{
        type: "input",
        name: "school",
        message: "What is the Interns's school name?",
        when: (answers) => answers.menu === "Intern"
    }]

 function askQuestions() {
    inquirer.prompt(sharedQuestions)
    .then((userInput) => {
        console.log(userInput)
        if (userInput.menu !== "Finished") {
            return askQuestions() 
        } else {
            
        };
       
        
    })  
 }

//Function call to call first manager
function init() {
    inquirer.prompt(managerQuestions)
        .then((userInput) => {
            console.log(userInput)
        askQuestions()
        })   
}

//Function call to initialize app
init();


// process.exit