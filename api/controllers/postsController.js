const db = require('../db/connection');

exports.getAllPosts = (req, res) => {
  const sql = `
    SELECT posts.*, authors.name, authors.email, authors.image 
    FROM posts 
    JOIN authors ON posts.author_id = authors.id`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getPostsByAuthor = (req, res) => {
  const authorId = req.params.id;
  const sql = `
    SELECT posts.*, authors.name, authors.email, authors.image
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    WHERE author_id = ?`;
  db.query(sql, [authorId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createPost = (req, res) => {
  const { title, description, category, author_id } = req.body;
  const sql = `
    INSERT INTO posts (title, description, category, author_id) 
    VALUES (?, ?, ?, ?)`;
  db.query(sql, [title, description, category, author_id], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
};
