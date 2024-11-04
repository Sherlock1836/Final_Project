// ****** USE IMPORTS INSTEAD OF REQUIRE...ES6 modules are more modern and better and that's how they work so
// ****** VSCode will also have better intellisense if you use imports ******
// ****** TO DO THIS YOU ADD "type": "module", to package.json ******
// ****** You then export and import the individual functions ******

// ****** Run npm install before running ******
// ****** Use SQLite extension by alexcvzz to view tables ******

const { createTask } = require("../model/tasks.js");
const { createTask2 } = require("../model/tasks2.js");
const db = require("./db.js");

createTask("Eat a banana");
const tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks);

const result = createTask2("Send mum flowers");
console.log(result);