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

INSERT INTO Employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1001, "Mike", "Jones", 222, 1002),
        (1002, "Lydia", "Miles", 111, NULL),
        (1003, "Channing", "Lee", 444, 1004),
        (1004, "Claudia", "Shines", 333, NULL),
        (1005, "Dennies", "Weis", 666, 1006),
        (1006, "Sham", "Wow", 555, NULL),
        (1007, "Meyer", "Que", 888, 1008),
        (1008, "Iris", "Ai", 777, NULL);
