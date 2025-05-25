const db = require('../db/connection');

exports.getAllAuthors = (req, res) => {
  db.query('SELECT * FROM authors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createAuthor = (req, res) => {
  const { name, email, image } = req.body;
  const sql = `INSERT INTO authors (name, email, image) VALUES (?, ?, ?)`;
  db.query(sql, [name, email, image], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
};
