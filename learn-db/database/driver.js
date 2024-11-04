const { createTask } = require("../model/tasks");
const { createTask2 } = require("../model/tasks2");
const db = require("../database/db.js");

createTask("Eat a banana");
const tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks);

const result = createTask2("Send mum flowers");
console.log(result);