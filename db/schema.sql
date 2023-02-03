DROP DATABASE IF EXISTS employees_database;
CREATE DATABASE employees_database;

USE employees_database;

CREATE TABLE Department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE Role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Department(id) ON DELETE CASCADE
);

CREATE TABLE Employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_Role FOREIGN KEY (role_id) REFERENCES Role(id) ON DELETE CASCADE,
    CONSTRAINT fk_Employee FOREIGN KEY(manager_id) REFERENCES Employee (id) ON DELETE SET NULL
);

