const inquirer = require('inquirer');
const sql = require('./sql');
const consoleTable = require('console.table');


function  mainmenu() {
inquirer.prompt({
    message: "welcome to the main menu",
    type: "list",
    choices: [

    "view all employees",
    "view all departments",
    "view all roles",
    "add employee",
    "add department",
    "add role",
    "update employee role",
    "quit"
    ],
//TAKEN FROM OLD HOMEWORK DOUBLE CHECK IT WORKS
}).then(answers => {
    console.log(answers.choice)
})
}
mainmenu();

switch (answers.choice) {
    case "view all employees":
        viewEmployee();
        break;
    case "view all departments":
        viewDepartment();
        break;
    case "view all roles":
        viewRoles();
        break;
    case "add employee":
        addEmployee();
        break;
    case "add department":
        addDepartment();
        break;
    case "add role":
        addRoles();
        break;
    case "update employee role":
        updateRoles();
        break;
    default:
        db.end();
        break;
}
