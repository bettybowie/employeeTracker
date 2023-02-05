const Department = require('./department');
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

    }

    addEmployee() {

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