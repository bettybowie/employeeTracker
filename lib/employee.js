const Role = require('./role');

class Employee extends Role {

    constructor(departmentId, roleId, title, salary, firstName, lastName, employeeId, managerId) {
        super(departmentId, roleId, title, salary);
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.managerId = managerId;
    }

    viewAllEmployees() {
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
        })
    }

    // how to get role list employee list
    addEmployee() {
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
                choices: 
            },
            {
                type: "list",
                name: "role",
                message: "What is the role of the new employee?",
                choices: 
            }
        ])
        .then(response => {
            const query = `INSERT INTO Employee (first_name, last_name, role_id, manager_id)
            VALUES (${response.firstName}, ${response.lastName}, );`;
            db.query(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("New employee has been added to the database.")
            }) 
        })
    }

    // get choices array
    updateRole() {
        inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "Which employee's role would you like to update?",
                choices:
            },
            {
                type: "list",
                name: "role",
                message: "What is the new role for this employee?",
                choices: 
            }
        ])
        .then(response => {
            const query =``;
            db.query(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("Employee's new role updated.")
            })
        })
    }

    updateManager() {

    }

    deleteEmployee() {

    }

    viewEmployeeByManager() {

    }

    viewEmployeeByDepartment() {

    }
}

module.exports = Role;