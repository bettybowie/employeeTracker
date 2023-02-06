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
            loginDB();
        })
    }

// how to reference department list
    addRole() {
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

    deleteRole() {

    }
}

module.exports = Role;