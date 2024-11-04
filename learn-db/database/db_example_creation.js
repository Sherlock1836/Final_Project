//this file is unrelated to the other ones and is the simplest reference from the website

const Database = require('better-sqlite3');

const db = new Database("db.sqlite");
console.log(db, "\n");

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

