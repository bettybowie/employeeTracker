# employeeTracker

## Description

This is a command-line application that uses Node.js, Inquirer, and MySQL, to manage a company's employee database.

## Installation

To install necessary dependencies, run:
   
~~~
npm i
~~~

To start the application on command line, run:

~~~
npm start
~~~

## Usage

WHEN the user starts the application\n
THEN the user is presented with the following options: view all departments,\n
view all roles, view all employees, add a department, add a role, add an \n
employee, and update an employee role\n

WHEN the user chooses to view all departments\n
THEN the user is presented with a formatted table showing department names \n
and department ids\n

WHEN the user chooses to view all roles\n
THEN the user is presented with the job title, role id, the department that\n 
role belongs to, and the salary for that role\n

WHEN the user chooses to view all employees\n
THEN the user is presented with a formatted table showing employee data, \n
including employee ids, first names, last names, job titles, departments, \n
salaries, and managers that the employees report to\n

WHEN the user chooses to add a department\n
THEN the user is prompted to enter the name of the department and that \n
department is added to the database\n

WHEN the user chooses to add a role\n
THEN the user is prompted to enter the name, salary, and department for the\n
role and that role is added to the database\n

WHEN the user chooses to add an employee\n
THEN the user is prompted to enter the employee’s first name, last name, role,\n 
and manager, and that employee is added to the database\n

WHEN I choose to update an employee role\n
THEN I am prompted to select an employee to update and their new role and this \n
information is updated in the database\n

WHEN the user chooses to update an employee's manager\n
THEN the user is prompted to select an employee to update and their new manager \n
information is updated in the database

WHEN the user chooses to view employees by manager\n
THEN the user is prompted to select the manager they want to view and the list \n
of employees under that manager will present\n

WHEN the user chooses to view employees by department\n
THEN the user is prompted to select the department they want to view and the \n
list of employees under that department will present\n

WHEN the user chooses to delete a department\n
THEN the user is prompted to select the department they want to delete and that \n
department will be deleted from the database\n

WHEN the user chooses to delete a role\n
THEN the user is prompted to select the role they want to delete and that role \n
will be deleted from the database\n

WHEN the user chooses to delete an employee\n
THEN the user is prompted to select select the employee they want to delete and \n
that employee will be deleted from the database\n

WHEN the user chooses to view the total utilized budget of a department\n
THEN the user is prompted to select the department they want to view, and is \n
presented with the the combined salaries of all employees in that department\n

WHEN the user chooses to quit\n
THEN the user will exit the employee tracker application\n

## Visual

[Demo Video](https://drive.google.com/file/d/1roB_o-RRoMeYWtUY6svyisJvT0xQK51a/view)

## License

This project is licensed under MIT license.