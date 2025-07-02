const Database = require('better-sqlite3');
const path = require('path');

const DB_FILE = path.resolve(__dirname, 'database.sqlite');
const db = new Database(DB_FILE);

// cria a tabela users se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  );
`);

function initDB() {
  // já está pronto
  return Promise.resolve(db);
}

function saveDB() {
  // better-sqlite3 já persiste direto no arquivo
}

module.exports = { initDB, saveDB };
