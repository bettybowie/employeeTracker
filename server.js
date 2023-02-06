const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer= require('inquirer');
const Department = require('./lib/department');
const Employee = require('./lib/employee');
const Role = require('./lib/role');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'newpassword',
      database: 'employees_database'
    },
    console.log("Connected to the Employee Database.")
);

function loginDB() {
    console.log ("Welcome to the Employee Database!");
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
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
        ])
        .then(answer => {

            switch (answer.choice) {
                case "View All Employees":
                    viewAllEmployees();
                    // Employee.viewAllEmployees();
                    break;

                case "Add Employee":
                    Employee.addEmployee();
                    break;

                case "Update Employee Role":
                    Role.updateRole();
                    break;

                case "View All Employee Roles":
                    Role.viewAllRoles();
                    break;

                case "Add Role":
                    Employee.addRole();
                    break;

                case "View All Departments":
                    Department.viewAllDepartments();
                    break;

                case "Add Department":
                    Department.addDepartment();
                    break;

                case "Update Employee Managers":
                    Employee.updateManager();
                    break;

                case "View Employees by Manager":
                    Employee.viewEmployeeByManager();
                    break;

                case "View Employees by Department":
                    Employee.viewEmployeeByDepartment();
                    break;

                case "Delete Employee":
                    Employee.deleteEmployee();
                    break;

                case "Delete Role":
                    Role.deleteRole();
                    break;

                case "Delete Department":
                    Department.deleteDepartment();
                    break;

                case "View the Total Utilized Budget of a Department":
                    Department.viewDepartmentBudget()
                    break;

                case "Quit":
                    db.end();
                    break;
            }
        })
}



loginDB();
