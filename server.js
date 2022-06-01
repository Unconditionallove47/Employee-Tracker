const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'password',
      database: 'employer_db',
    },
    console.log(`Connected to the employer_db database.`)
  );
  mainmenu();

function mainmenu() {
  inquirer
    .prompt({
        name:"choice",
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
        "quit",
      ],
      //TAKEN FROM OLD HOMEWORK DOUBLE CHECK IT WORKS
    })
    .then((answers) => {
      console.log(answers.choice);
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
        case "update employee":
          updateEmployee();
          break;
        default:
          db.end();
          break;
      }
    });
}

//switch case setup

function viewEmployee() {
  db.query("SELECT * FROM employee", (err, data) => {
    err ? err : console.table(data);
    mainmenu();
  });
}
// Create path to view list of roles
function viewRoles() {
  db.query("SELECT * FROM roles", (err, data) => {
    err ? err : console.table(data);
    mainmenu();
  });
}
// Create path to view list of departments
function viewDepartment() {
  db.query("SELECT * FROM department", (err, data) => {
    err ? err : console.table(data);
    mainmenu();
  });
}
// Create path to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first",
      },
      {
        type: "input",
        message: "What i the employee's last name?",
        name: "last",
      },
      {
        type: "number",
        message: "What is the employee's role ID number?",
        name: "roleId",
      },
      {
        type: "number",
        message: "What manager ID does the employee fall under?",
        name: "manId",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [answers.first, answers.last, answers.roleId, answers.manId],
        (err, data) => {
          if (err) {
            throw err;
          }
          console.table(data);
          mainmenu();
        }
      );
    });
}
// Create path to add an employee role
function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of the role?",
        name: "roleTitle",
      },
      {
        type: "number",
        message: "What is the salary for the role?",
        name: "roleSal",
      },
      {
        type: "number",
        message: "What is the department ID?",
        name: "roleDep",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [answers.roleTitle, answers.roleSal, answers.roleDep],
        (err, data) => {
          if (err) {
            throw err;
          }
          console.table(data);
          mainmenu();
        }
      );
    });
}
// Create path to add a department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new department?",
        name: "dept",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        answers.dept,
        (err, data) => {
          if (err) {
            throw err;
          }
          console.table(data);
          mainmenu();
        }
      );
    });
}
// Create path to update employee
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "number",
        message: "What is the employee ID you want to change?",
        name: "updateEmp",
      },
      {
        type: "number",
        message: "What is new manager ID?",
        name: "updateMan",
      },
    ])
    .then((answers) => {
      db.query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [answers.updateMan, answers.updateEmp],
        (err, data) => {
          if (err) {
            throw err;
          }
          console.table(data);
          mainmenu();
        }
      );
    });
}
