const db = require('../database/db.js');

const insert_task = db.prepare(`
    INSERT INTO tasks (content)
    VALUES (?)
    RETURNING id, content, created_at
  `);
  
function createTask2(content) {
    return insert_task.get(content);
}

module.exports = { createTask2 };