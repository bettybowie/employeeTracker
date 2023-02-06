const inquirer = require('inquirer');

class Department {

    constructor(departmentId,  departmentName) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
    }

    viewAllDepartment() {
        db.query("SELECT * FROM DEPARTMENT", (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res);
        }) 
    }

    addDepartment() {
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
                    console.log(`${response.newDepartment} added to database. `)
                }) 
            })
    }

    deleteDepartment() {

    }

    viewDepartmentBudget() {

    }
}

module.exports = Department;