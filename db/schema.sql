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

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT(10),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

-- CREATE TABLE employee (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INT UNSIGNED NOT NULL,
--   INDEX role_ind (role_id),
--   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
--   manager_id INT UNSIGNED,
--   INDEX man_ind (manager_id),
--   CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
-- );
