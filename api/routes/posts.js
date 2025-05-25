const express = require('express');
const router = express.Router();
const { getAllPosts, getPostsByAuthor, createPost } = require('../controllers/postsController');

router.get('/', getAllPosts);
router.get('/author/:id', getPostsByAuthor);
router.post('/', createPost);

module.exports = router;
