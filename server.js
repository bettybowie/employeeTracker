const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer= require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// express middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'newpassword',
      database: 'employees_database'
    },
);

function accessdatabase() {
    console.log ("Welcome to the Employee Database!")
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                Choices: [
                    {value: "View All Employees"},
                    {value: "Add Employee"},
                    {value: "Update Employee Role"},
                    {value: "View All Employee Roles"},
                    {value: "Add Role"},
                    {value: "View All Departments"},
                    {value: "Add Department"},
                    {value: "Update Employee Managers"},
                    {value: "View Employees by Manager"},
                    {value: "View Employees by Department"},
                    {value: "Delete Employee"},
                    {value: "Delete Role"},
                    {value: "Delete Department"},
                    {value: "View the Total Utilized Budget of a Department"},
                    {value: "Quit"}
                ]
            }
        .then((answer) => {
            console.log("hi");
            switch (answer.choices) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "View All Employee Roles":
                    viewAllRoles();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Update Employee Managers":
                    updateManager();
                    break;
                case "View Employees by Manager":
                    viewEmployeeByManager();
                    break;
                case "View Employees by Department":
                    viewEmployeeByDepartment();
                    break;
                case "Delete Employee":
                    deleteEmployee();
                    break;
                case "Delete Role":
                    deleteRole();
                    break;
                case "Delete Department":
                    deleteDepartment();
                    break;
                case "View the Total Utilized Budget of a Department":
                    viewDepartmentBudget()
                    break;
                case "Quit":
                    db.end();
                    console.log("Leaving database..")
                    break;
            }
        })
        ])
}


app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  accessdatabase();