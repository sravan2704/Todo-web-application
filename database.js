const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',  // Replace with your MySQL username
    user: 'root@localhost',  // Replace with your MySQL username
    password: '270403',  // Replace with your MySQL password
    database: 'todo_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Function to add a new task
function addTask(task, task_date, callback) {
    const sql = `INSERT INTO tasks (task, task_date) VALUES (?, ?)`;
    connection.query(sql, [task, task_date], (err, results) => {
        if (err) throw err;
        callback(results.insertId);
    });
}

// Function to get all tasks
function getTasks(callback) {
    const sql = `SELECT * FROM tasks`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
}

// Export functions
module.exports = { addTask, getTasks };
