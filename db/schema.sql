DROP DATABASE IF EXISTS employer_db;
CREATE database employer_db;

USE employer_db;

CREATE TABLE department (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50)
);

CREATE TABLE roles (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    salary INT(10),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
/* seems to show red, but as i worked with my tutor it still functions properly*/
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT(10),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

