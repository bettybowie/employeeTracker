const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Connected to the Employee Database.")
);

function loginDB() {
    console.log("Welcome to the Employee Database!");
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    { value: "View All Employees" },
                    { value: "Add Employee" },
                    { value: "Update Employee Role" },
                    { value: "View All Employee Roles" },
                    { value: "Add Role" },
                    { value: "View All Departments" },
                    { value: "Add Department" },
                    { value: "Update Employee Managers" },
                    { value: "View Employees by Manager" },
                    { value: "View Employees by Department" },
                    { value: "Delete Employee" },
                    { value: "Delete Role" },
                    { value: "Delete Department" },
                    { value: "View the Total Utilized Budget of a Department" },
                    { value: "Quit" }
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

// done
function addEmployee() {
    const employeeQuery = `INSERT INTO Employee SET ?`;
    const roleQuery = `SELECT * FROM Role`;
    const managerQuery = `SELECT id, first_name, last_name FROM Employee`;
    db.query(managerQuery, (err, res) => {
        if (err) {
            throw err;
        }
        const managers = res.map(manager => ({
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.id
        }))
        managers.unshift({
            name: "N/A",
            value: null
        })
        db.query(roleQuery, (err, res) => {
            if (err) {
                throw err;
            }
            const roles = res.map(role => ({
                name: role.title,
                value: role.id
            })
            )
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "first_name",
                        message: "What is the first name of the new employee?"
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "What is the last name of the new employee?"
                    },
                    {
                        type: "list",
                        name: "manager_id",
                        message: "Who is the manager of the new employee?",
                        choices: managers
                    },
                    {
                        type: "list",
                        name: "role_id",
                        message: "What is the role of the new employee?",
                        choices: roles
                    }
                ])
                .then(response => {
                    db.query(employeeQuery, response, (err, res) => {
                        if (err) {
                            throw err;
                        }
                        console.log("New employee has been added to the database.");
                        loginDB();
                    })
                })
        })
    })
}

// done
function updateRole() {
    const employeesQuery = `SELECT id, first_name, last_name, role_id FROM Employee`;
    db.query(employeesQuery, (err, res) => {
        if (err) {
            throw err;
        }
        const employees = res.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }))

        inquirer
            .prompt([
                {
                    type: "list",
                    name: "id",
                    message: "Which employee's role would you like to update?",
                    choices: employees
                }
            ])
            .then(({ id }) => {
                const roleQuery = `SELECT * FROM Role`;
                db.query(roleQuery, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    const roles = res.map(role => ({
                        name: role.title,
                        value: role.id
                    })
                    )
                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "role_id",
                                message: "What is the new role for this employee?",
                                choices: roles
                            }
                        ])
                        .then(({ role_id }) => {
                            const employeeQuery = `UPDATE Employee SET ? WHERE id = ${id}`;
                            db.query(employeeQuery, { role_id }, (err, res) => {
                                if (err) {
                                    throw err;
                                }

                                console.log("Employee's new role updated.");
                                loginDB();
                            })
                        })
                })
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
        console.log(res);
        const roles = res.map(role => ({
            name: role.Title,
            value: role.ID
        }))
        console.log(roles);
        loginDB();
    })
}

// done
function addRole() {
    const departmentQuery = `Select * FROM Department`;
    db.query(departmentQuery, (err, res) => {
        if (err) {
            throw err;
        }
        const departments = res.map(department => ({
            name: department.name,
            value: department.id
        }))

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
                    name: "department_id",
                    message: "What is the department for the new role?",
                    choices: departments
                }
            ])
            .then(response => {
                const roleQuery = `INSERT INTO Role (title, salary, department_id)
                            VALUES ("${response.title}", ${response.salary}, ${response.department_id})`;
                db.query(roleQuery, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log("New role hsa been added to database.");
                    loginDB();
                })
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

// done
function updateManager() {
    const employeeQuery = `SELECT id, first_name, last_name, manager_id FROM Employee`;
    db.query(employeeQuery, (err, res) => {
        if (err) {
            throw err;
        }
        const employees = res.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }))
        employees.unshift({
            name: "N/A",
            value: null
        })
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "id",
                    message: "Which employee's manager would you like to update?",
                    choices: employees
                },
                {
                    type: "list",
                    name: "manager_id",
                    message: "Who is the new manager for this employee?",
                    choices: employees
                }
            ])
            .then(response => {
                const managerQuery = `UPDATE Employee
                SET manager_id = ${response.manager_id}
                WHERE id = ${response.id};
                `;
                db.query(managerQuery, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Employee's new manager updated.");
                    loginDB();
                })
            })
    })
}   
                
// done
function deleteEmployee() {
    const employeeQuery = `SELECT id, first_name, last_name FROM Employee`;
    db.query(employeeQuery, (err, res) => {
        if (err) {
            throw err;
        }
        const employees = res.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }))
    
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "id",
                    message: "Which employee would you like to remove from database?",
                    choices: employees
                }
            ])
            .then(response => {
                const deleteQuery = `DELETE FROM Employee WHERE id = ${response.id}`;
                db.query(deleteQuery, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Employee is removed from database.");
                    loginDB();
                })
            })
    })
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
