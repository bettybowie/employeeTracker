const Department = require('./department');

class Role extends Department {

    constructor(departmentId, roleId, title, salary) {
        super(departmentId);
        this.roleId = roleId;
        this.salary = salary;
        this.title = title;
    }

    viewAllRoles() {
        const query = `SELECT Role.id as ID, Role.title as Title, Department.name as Department, Role.salary as Salary 
        FROM Role
        JOIN Department ON Role.department_id = Department.id;`;
        db.query(query, (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res);
        })
    }

// how to reference department list
    addRole() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "newRole",
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
                    choices: 
                }
            ])
            .then(response => {
                const query = `INSERT INTO Department (name)
                VALUES ("${response.newDepartment}");`;
                db.query(query, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                }) 
            })
    }

    deleteRole() {

    }
}

module.exports = Role;