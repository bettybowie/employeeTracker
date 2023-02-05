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
    }

    addRole() {

    }

    updateRole() {

    }

    deleteRole() {

    }
}

module.exports = Role;