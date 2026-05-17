-- ================================================
-- TASK MANAGER DATABASE
-- Supports: ADD, DELETE, FETCH, UPDATE
-- ================================================

-- Step 1: Create & select the database
CREATE DATABASE IF NOT EXISTS task_manager;
USE task_manager;

-- Step 2: Drop table if exists (fresh start)
DROP TABLE IF EXISTS tasks;

-- Step 3: Create tasks table
CREATE TABLE tasks (
    id          INT AUTO_INCREMENT PRIMARY KEY,   -- unique ID (used by DELETE & UPDATE)
    title       VARCHAR(255) NOT NULL,            -- task title (used by ADD & FETCH)
    description TEXT,                             -- task details (used by ADD & FETCH)
    completed   TINYINT(1) NOT NULL DEFAULT 0,   -- 0=pending, 1=done (used by UPDATE)
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- auto timestamp (used by FETCH order)
);

-- ================================================
-- FETCH: SELECT all tasks (newest first)
-- ================================================
-- SELECT id, title, description, completed, created_at
-- FROM tasks
-- ORDER BY id DESC;

-- ================================================
-- ADD: Insert a new task
-- ================================================
-- INSERT INTO tasks (title, description)
-- VALUES ('Your Task Title', 'Your Task Description');

-- ================================================
-- UPDATE: Toggle completed status
-- ================================================
-- UPDATE tasks SET completed = NOT completed WHERE id = 1;

-- ================================================
-- DELETE: Remove a task by ID
-- ================================================
-- DELETE FROM tasks WHERE id = 1;

-- ================================================
-- Sample Data to test immediately
-- ================================================
INSERT INTO tasks (title, description, completed) VALUES
('Learn SQL',            'Study basic SQL commands',          0),
('Build Task Manager',   'Create a PHP + JS task manager',    0),
('Design UI',            'Style with CSS and make it clean',  1),
('Setup XAMPP',          'Install and configure local server', 1),
('Connect PHP to MySQL', 'Use mysqli to link backend to DB',  0);

-- ================================================
-- VERIFY: View all inserted tasks
-- ================================================
SELECT * FROM tasks;