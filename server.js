const express = require('express');
const bodyParser = require('body-parser');
const { addTask, getTasks } = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to add a new task
app.post('/add-task', (req, res) => {
    const { task, task_date } = req.body;
    addTask(task, task_date, (id) => {
        res.json({ id, message: 'Task added successfully!' });
    });
});

// Route to get all tasks
app.get('/tasks', (req, res) => {
    getTasks((tasks) => {
        res.json(tasks);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
