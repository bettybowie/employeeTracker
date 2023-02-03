



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "Jones", 222, 111),
        ("Lydia", "Miles", 111, NULL),
        ("Channing", "Lee", 444, 333),
        ("Claudia", "Shines", 333, NULL),
        ("Dennies", "Weis", 666, 555),
        ("Sham", "Wow", 555, NULL),
        ("Meyer", "Que", 888, 777),
        ("Iris", "Ai", 777, NULL);

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 178000, 4),
        ("Salesperson", 86000, 4),
        ("Lead Engineer", 350000, 1),
        ("Software Engineer", 130000, 1),
        ("Account Manager", 250000, 2),
        ("Accountant", 110000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Legal Consultant", 287000, 3);
        
INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");