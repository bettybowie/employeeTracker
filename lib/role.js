const Department = require('./department');

class Role extends Department {

    constructor(departmentId, roleId, title, salary) {
        super(departmentId);
        this.roleId = roleId;
        this.salary = salary;
        this.title = title;
    }

    viewAllRoles() {

    }

    addRole() {

    }

    updateRole() {

    }

    deleteRole() {

    }
}

module.exports = Role;