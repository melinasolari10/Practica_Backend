const db = require('../mysql-connection'); 

const PersonaController = {
  getAll: (req, res) => {
    const query = 'SELECT * FROM persona';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener personas:', err);
        res.status(500).json({ error: 'Error al obtener personas' });
        return;
      }
      res.json(results);
    });
  },

  create: (req, res) => {
    const { dni, nombre, apellido } = req.body;
    const query = 'INSERT INTO persona (dni, nombre, apellido) VALUES (?, ?, ?)';
    db.query(query, [dni, nombre, apellido], (err, result) => {
      if (err) {
        console.error('Error al crear persona:', err);
        res.status(500).json({ error: 'Error al crear persona' });
        return;
      }
      res.json({ message: 'Persona creada exitosamente' });
    });
  },

  update: (req, res) => {
    const dni = req.params.dni;
    const { nombre, apellido } = req.body;
    const query = 'UPDATE persona SET nombre = ?, apellido = ? WHERE dni = ?';
    db.query(query, [nombre, apellido, dni], (err, result) => {
      if (err) {
        console.error('Error al actualizar persona:', err);
        res.status(500).json({ error: 'Error al actualizar persona' });
        return;
      }
      res.json({ message: 'Persona actualizada exitosamente' });
    });
  },

  delete: (req, res) => {
    const dni = req.params.dni;
    const query = 'DELETE FROM persona WHERE dni = ?';
    db.query(query, [dni], (err, result) => {
      if (err) {
        console.error('Error al eliminar persona:', err);
        res.status(500).json({ error: 'Error al eliminar persona' });
        return;
      }
      res.json({ message: 'Persona eliminada exitosamente' });
    });
  },

  getByApellido: (req, res) => {
    const apellido = req.params.apellido;
    const query = 'SELECT * FROM persona WHERE apellido = ?';
    db.query(query, [apellido], (err, results) => {
      if (err) {
        console.error('Error al obtener personas por apellido:', err);
        res.status(500).json({ error: 'Error al obtener personas por apellido' });
        return;
      }
      res.json(results);
    });
  },
};

module.exports = PersonaController;
