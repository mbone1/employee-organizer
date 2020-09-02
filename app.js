const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");


const render = require("./lib/htmlRenderer");
let employees = [];

inquirer
    .prompt([{
            message: "What is your managers name?",
            name: "name",
        },
        {
            message: "What is your managers id?",
            name: "id",
        },
        {
            message: "What is your managers office number?",
            name: "officenum",
        },
        {
            message: "What is the managers email?",
            name: "email",
        },
    ])
    .then(function(manager) {
        //build a manager object and push into employees array
        employees.push(new Manager(manager.name, manager.id, manager.officenum, manager.email))
        console.log(manager);
        console.log(employees)
        addEmployee();
    });

//function to add employee
function addEmployee() {
    inquirer
        .prompt([{
            type: "list",
            message: "Who would you like to add?",
            name: "engineerOrIntern",
            choices: ["Engineer", "Intern", "Quit"],
        }, ])
        .then(function({ engineerOrIntern }) {
            if (engineerOrIntern === "Engineer") {
                //prompt for engineer details
                engineerPrompt();
            } else if (engineerOrIntern === "Intern") {
                //Prompt for intern details
                internPrompt();
            } else {
                //Write to file
                fs.writeFile("index.html", render(employees), () => {});
            }
        });
}

//Prompt for engineer option being selected
function engineerPrompt() {
    inquirer
        .prompt([{
                message: "What is your engineers name?",
                name: "name",
            },
            {
                message: "What is your engineers id?",
                name: "id",
            },
            {
                message: "What is this engineers email?",
                name: "email",
            },
            {
                message: "What is this engineers github?",
                name: "github",
            },
        ])
        .then(function(engineer) {
            //Build engineer add to employees array
            employees.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github))
            console.log(engineer);
            console.log(employees);
            addEmployee();
        });
}

//function if intern is selected
function internPrompt() {
    inquirer
        .prompt([{
                message: "What is the interns name?",
                name: "name",
            },
            {
                message: "What is the interns id?",
                name: "id",
            },
            {
                message: "What is the interns email?",
                name: "email",
            },
            {
                message: "What is the interns school?",
                name: "school",
            },
        ])
        .then(function(intern) {
            employees.push(new Intern(intern.name, intern.id, intern.email, intern.school))
            console.log(intern);
            console.log(employees)
            addEmployee();
        });
}

//tucker recommends
//create github repo first
//move the code to the repo
//run the install
//inquirer and jest needed
//start with the employee class ----DONE
//all the other classes EXTEND the employee class ----DONE
//get tests working ----DONE
//then move to inquirer portion ----
//classes to make sure tests pass
//then inquirer portion
//then creation of html file
//html renderer ----

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desaired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```