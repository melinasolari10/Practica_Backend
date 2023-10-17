const db = require('../mysql-connection'); 

const UsuarioController = {
  getAll: (req, res) => {
    const query = 'SELECT * FROM usuario';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).json({ error: 'Error al obtener usuarios' });
        return;
      }
      res.json(results);
    });
  },

  create: (req, res) => {
    const { mail, nickname, password } = req.body;
    const query = 'INSERT INTO usuario (mail, nickname, password) VALUES (?, ?, ?)';
    db.query(query, [mail, nickname, password], (err, result) => {
      if (err) {
        console.error('Error al crear usuario:', err);
        res.status(500).json({ error: 'Error al crear usuario' });
        return;
      }
      res.json({ message: 'Usuario creado exitosamente' });
    });
  },

  update: (req, res) => {
    const mail = req.params.mail;
    const { nickname, password } = req.body;
    const query = 'UPDATE usuario SET nickname = ?, password = ? WHERE mail = ?';
    db.query(query, [nickname, password, mail], (err, result) => {
      if (err) {
        console.error('Error al actualizar usuario:', err);
        res.status(500).json({ error: 'Error al actualizar usuario' });
        return;
      }
      res.json({ message: 'Usuario actualizado exitosamente' });
    });
  },

  delete: (req, res) => {
    const mail = req.params.mail;
    const query = 'DELETE FROM usuario WHERE mail = ?';
    db.query(query, [mail], (err, result) => {
      if (err) {
        console.error('Error al eliminar usuario:', err);
        res.status(500).json({ error: 'Error al eliminar usuario' });
        return;
      }
      res.json({ message: 'Usuario eliminado exitosamente' });
    });
  },

  getByEmail: (req, res) => {
    const mail = req.params.mail;
    const query = 'SELECT * FROM usuario WHERE mail = ?';
    db.query(query, [mail], (err, results) => {
      if (err) {
        console.error('Error al obtener usuarios por email:', err);
        res.status(500).json({ error: 'Error al obtener usuarios por email' });
        return;
      }
      res.json(results);
    });
  },
};

module.exports = UsuarioController;
