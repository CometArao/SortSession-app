CREATE DATABASE clasesdb;

CREATE TABLE clase(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);