const express = require('express');
const router = express.Router();
const { getAllAuthors, createAuthor } = require('../controllers/authorsController');

router.get('/', getAllAuthors);
router.post('/', createAuthor);

module.exports = router;
