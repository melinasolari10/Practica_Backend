const db = require('../mysql-connection');

class Persona {
  static getAll(callback) {
    const query = 'SELECT * FROM persona';
    db.query(query, callback);
  }

  static create(persona, callback) {
    const query = 'INSERT INTO persona (dni, nombre, apellido) VALUES (?, ?, ?)';
    db.query(query, [persona.dni, persona.nombre, persona.apellido], callback);
  }

  static update(dni, updatedPersona, callback) {
    const query = 'UPDATE persona SET nombre = ?, apellido = ? WHERE dni = ?';
    db.query(query, [updatedPersona.nombre, updatedPersona.apellido, dni], callback);
  }

  static delete(dni, callback) {
    const query = 'DELETE FROM persona WHERE dni = ?';
    db.query(query, [dni], callback);
  }
}

module.exports = Persona;
