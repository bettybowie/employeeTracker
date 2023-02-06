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

            switch (answer.action) {
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
                    break;
            }
        })
}

// done
function viewAllEmployees() {
    const query = `SELECT Employee.id as ID, Employee.first_name as First_name, Employee.last_name as Last_name, Role.title as Title, Department.name as Department, Role.salary as Salary, CONCAT(manager.first_name,' ', manager.last_name) as Manager 
    FROM Employee
    LEFT JOIN Employee manager ON manager.id = Employee.manager_id
    JOIN Role ON Role.id = Employee.role_id
    JOIN Department ON Department.id = Role.department_id;`;
    db.query(query, (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res);
        loginDB();
    })
}

// help
function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the first name of the new employee?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the last name of the new employee?"
        },
        {
            type: "list",
            name: "manager",
            message: "Who is the manager of the new employee?",
            choices: "managerlist"
        },
        {
            type: "list",
            name: "role",
            message: "What is the role of the new employee?",
            choices: "rolelist"
        }
    ])
    .then(response => {
        const query = `INSERT INTO Employee (first_name, last_name, role_id, manager_id)
        VALUES (${response.firstName}, ${response.lastName}, );`;
        db.query(query, (err, res) => {
            if (err) {
                throw err;
            }
            console.log("New employee has been added to the database.");
            loginDB();
        }) 
    })
}

// help
function updateRole() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee's role would you like to update?",
            choices: "employeeslist"
        },
        {
            type: "list",
            name: "role",
            message: "What is the new role for this employee?",
            choices: "role list"
        }
    ])
    .then(response => {
        const query =``;
        db.query(query, (err, res) => {
            if (err) {
                throw err;
            }
            console.log("Employee's new role updated.");
            loginDB();
        })
    })
}

// done
function viewAllRoles() {
    const query = `SELECT Role.id as ID, Role.title as Title, Department.name as Department, Role.salary as Salary 
    FROM Role
    JOIN Department ON Role.department_id = Department.id;`;
    db.query(query, (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res);
        loginDB();
    })
}

// help
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name for the new role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for the new role?"
            },
            {
                type: "list",
                name: "department",
                message: "What is the department for the new role?",
                choices: "department list"
            }
        ])
        .then(response => {
            const query = `INSERT INTO Role (title, salary, department_id)
            VALUES ("${response.title}, ${response.salary}");`;
            db.query(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("New role hsa been added to database.");
                loginDB();
            }) 
        })
}

// done
function viewAllDepartments() {
    db.query("SELECT * FROM DEPARTMENT", (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res);
        loginDB();
    }) 
}

// done
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "newDepartment",
                message: "What is the name for the new department?"
            }
        ])
        .then(response => {
            const query = `INSERT INTO Department (name)
            VALUES ("${response.newDepartment}");`;
            db.query(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(`${response.newDepartment} added to database. `);
                loginDB();
            }) 
        })
}

// done
function viewDepartmentBudget() {
    const query = `SELECT Department.name as Department, SUM(salary) AS Total_Budget
    FROM Role
    JOIN Department ON Role.department_id = Department.id
    GROUP BY department_id;`;
            db.query(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.table(res);
                loginDB();
            }) 
}


function updateManager() {

}

function deleteEmployee() {

}

function viewEmployeeByManager() {
    
}

function viewEmployeeByDepartment() {
    
}

function deleteRole() {

}

function deleteDepartment() {

}



loginDB();
