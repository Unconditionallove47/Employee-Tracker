const inquirer = require('inquirer');
const sql = require('./sql');
const consoleTable = require('console.table');

function begin() {
console.log("Hello welcome to the main menu");
mainmenu();
}


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

}).then(answers => {
    console.log(answers.choice)
})
}