# employeeTracker

## Description

This is a command-line application that uses Node.js, Inquirer, and MySQL, to manage a company's employee database.

## Installation

To install necessary dependencies, run the following command:
   
~~~
npm i
~~~

## Usage

WHEN the user starts the application
THEN the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN the user chooses to view all departments
THEN the user is presented with a formatted table showing department names and department ids

WHEN the user chooses to view all roles
THEN the user is presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN the user chooses to view all employees
THEN the user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN the user chooses to add a department
THEN the user is prompted to enter the name of the department and that department is added to the database

WHEN the user chooses to add a role
THEN the user is prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN the user chooses to add an employee
THEN the user is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN the user chooses to update an employee role
THEN the user is prompted to select an employee to update and their new role and this information is updated in the database

## Visual

[Demo Video]()

## License

This project is licensed under MIT license.