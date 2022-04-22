CREATE DATABASE sample_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('joe', 'joe@mail.rt'),
           ('ryan', 'ryan@fasms.rt');