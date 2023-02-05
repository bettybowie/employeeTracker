INSERT INTO Department (name)
VALUES ("Engineer"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO Role (title, salary, department_id)
VALUES  ("Sales Lead", 178000, 1),
        ("Salesperson", 86000, 1),
        ("Lead Engineer", 350000, 2),
        ("Software Engineer", 130000, 2),
        ("Account Manager", 250000, 3),
        ("Accountant", 110000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Legal Consultant", 287000, 4);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "Jones", 1, NULL),
        ("Lydia", "Miles", 2, 1),
        ("Channing", "Lee", 3, NULL),
        ("Claudia", "Shines", 4, 3),
        ("Dennies", "Weis", 5, NULL),
        ("Sham", "Wow", 6, 5),
        ("Meyer", "Que", 7, NULL),
        ("Iris", "Ai", 8, 7);
