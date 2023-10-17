const db = require('../mysql-connection');

const Usuario = {
  getAll: (callback) => {
    const query = 'SELECT * FROM usuario';
    db.query(query, callback);
  },

  create: (usuario, callback) => {
    const query = 'INSERT INTO usuario (mail, nickname, password) VALUES (?, ?, ?)';
    db.query(query, [usuario.mail, usuario.nickname, usuario.password], callback);
  },

  update: (mail, updatedUsuario, callback) => {
    const query = 'UPDATE usuario SET nickname = ?, password = ? WHERE mail = ?';
    db.query(query, [updatedUsuario.nickname, updatedUsuario.password, mail], callback);
  },

  delete: (mail, callback) => {
    const query = 'DELETE FROM usuario WHERE mail = ?';
    db.query(query, [mail], callback);
  },

  getByEmail: (mail, callback) => {
    const query = 'SELECT * FROM usuario WHERE mail = ?';
    db.query(query, [mail], callback);
  },
};

module.exports = Usuario;
