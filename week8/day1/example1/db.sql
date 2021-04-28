CREATE DATABASE logininfo;

CREATE TABLE logintable(
    login_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    user_name VARCHAR(30),
    password VARCHAR(30)
);