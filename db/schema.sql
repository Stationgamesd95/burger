DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE Table burgers (
    id AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(255) NULL,
    devoured BOOLEAN NOT NULL
);