const server = require('../server');

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

    }

    deleteDepartment() {

    }

    viewDepartmentBudget() {

    }
}

module.exports = Department;