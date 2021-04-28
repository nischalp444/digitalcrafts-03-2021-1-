CREATE DATABASE todolist3

CREATE TABLE list3(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    date VARCHAR(10)
)