const UserRepository = require('../../domain/repositories/UserRepository');

class UserRepositorySQLite extends UserRepository {
  constructor(db, saveDB) {
    super();
    this.db = db;
    this.saveDB = saveDB;
  }

  getAll() {
    return this.db.prepare('SELECT * FROM users').all();
  }

  getById(id) {
    return this.db.prepare('SELECT * FROM users WHERE id = ?').get(id) || null;
  }

  create({ name, email }) {
    const info = this.db
      .prepare('INSERT INTO users (name, email) VALUES (?, ?)')
      .run(name, email);
    this.saveDB();
    return { id: info.lastInsertRowid, name, email };
  }

  update(id, { name, email }) {
    const info = this.db
      .prepare('UPDATE users SET name = ?, email = ? WHERE id = ?')
      .run(name, email, id);
    this.saveDB();
    return info.changes;
  }

  delete(id) {
    const info = this.db
      .prepare('DELETE FROM users WHERE id = ?')
      .run(id);
    this.saveDB();
    return info.changes;
  }
}

module.exports = UserRepositorySQLite;
