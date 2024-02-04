-- Show existing tables
SHOW TABLES;

-- Use the 'students' database
USE students;

-- Create the 'user' table
CREATE TABLE IF NOT EXISTS user (
    username_1 VARCHAR(100) UNIQUE,
    password_1 VARCHAR(100) NOT NULL,
    classname_1 VARCHAR(5),
    score_1 INT -- Removed semicolon here
);

-- Insert data into the 'user' table
INSERT INTO user (username_1, password_1, classname_1,score_1)
VALUES
    ('user1', 'password1', 'I',0),
    ('user2', 'password2', 'I',0),
    ('user3', 'password3', 'I',0),
    ('user4', 'password4', 'I',0),
    ('user5', 'password5', 'I',0);


