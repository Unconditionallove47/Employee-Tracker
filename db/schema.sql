DROP DATABASE IF EXISTS employer_db;
CREATE database employer_db;

USE employer_db;

CREATE TABLE department (
    id INT(10)  PRIMARY KEY,
    department_name VARCHAR(50)
);

CREATE TABLE roles (
    id INT  NOT NULL PRIMARY KEY,
    title VARCHAR(50),
    salary INT(10),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT  NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT(10),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT(10),
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);