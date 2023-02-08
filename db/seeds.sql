INSERT INTO Department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO Role (title, salary, department_id)
VALUES  ("Sales Lead", 178000, 4),
        ("Salesperson", 86000, 4),
        ("Lead Engineer", 350000, 1),
        ("Software Engineer", 130000, 1),
        ("Account Manager", 250000, 2),
        ("Accountant", 110000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Legal Consultant", 287000, 3);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "Jones", 1, NULL),
        ("Lydia", "Miles", 2, 1),
        ("Channing", "Lee", 3, NULL),
        ("Claudia", "Shines", 4, 3),
        ("Dennies", "Weis", 5, NULL),
        ("Sham", "Wow", 6, 5),
        ("Meyer", "Que", 7, NULL),
        ("Iris", "Ai", 8, 7);


