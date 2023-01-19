const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
// const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const generatehtml = require('./src/generatehtml.js')
const { Console } = require('console');
const { name } = require('ejs');
const { normalize } = require('path');
const teamArray = [];




function managerQuestions() {
    inquirer.prompt([
        {
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
        }])
        .then(x => {
            const newM = new Manager(
                x.manager,
                x.id,
                x.email,
                x.officeNumber
            );
            teamArray.push(newM)
            console.log(teamArray)
            askQuestions()
        })

}

function internQ() {
    inquirer.prompt([{
        type: "input",
        name: "intern",
        message: "What is the intern's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
    }])
        .then(x => {
            const newInt = new Intern(
                x.intern,
                x.id,
                x.email,
                x.school
            );
            teamArray.push(newInt)
            console.log(teamArray)
            askQuestions()
        })

}

function engineerQ() {
    inquirer.prompt([{
        type: "input",
        name: "engineer",
        message: "What is the engineer's Name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
    }, {
        type: "input",
        name: "email",
        message: "What is the email address?",
    }, {
        type: "input",
        name: "gitHubName",
        message: "What is the engineer's GitHub name?",
    }])
        .then(x => {
            const newEng = new Engineer(
                x.engineer,
                x.id,
                x.email,
                x.gitHubName
            );

            teamArray.push(newEng)
            console.log(teamArray)
            askQuestions()
        })
}


function askQuestions() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose a employee/intern to add or select Finsihed.",
            choices: ["Engineer", "Intern", "Finished"],
        }
    ])
        .then((userInput) => {
            // console.log(userInput)
            if (userInput.role === "Engineer") {
                return engineerQ()
            } else if (userInput.role === "Intern") {
                return internQ()
            } else if (userInput.manager === "Manager") {
                return managerQ()
            } else {
                console.log(teamArray)
                writeHTML()
                // process.exit(0)
            }
        })
}

//Function call to call first manager
function init() {
    managerQuestions()
    // console.log(teamArray)
    // askQuestions()
    // writeHTML(userInput)
}


let data = 'this is going ot be a test'
let paths = "index.txt"

const writeHTML = () => {
    fs.writeFile(paths, data, (err) => {
        if (err) {
            console.log(err)

        } else {
            console.log('Your team profile was created!')
        }
    })
}







//Function call to initialize app
init();


// process.exit

// if (userInput.menu !== "Finished") {
    // return askQuestions()

// } else 