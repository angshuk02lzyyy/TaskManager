CREATE DATABASE IF NOT EXISTS task_manager;
USE task_manager;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE
);


INSERT INTO tasks (title, description, completed) 
VALUES ('Learn SQL', 'Study basic SQL commands', FALSE);


SELECT * FROM tasks;

-- Update completion (example)
-- UPDATE tasks SET completed = TRUE WHERE id = 1;

-- Delete task by ID (example)
-- DELETE FROM tasks WHERE id = 1;

-- Delete completed tasks (example)
-- DELETE FROM tasks WHERE completed = TRUE;

-- Truncate table (remove all tasks)
-- TRUNCATE TABLE tasks;
