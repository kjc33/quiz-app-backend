const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postControllers');
const {authenticateJWT} = require('../middlewares/authMiddleware');

// get all posts
router.get('/', PostController.getAllPosts);

// get a post by id
router.get('/:id', PostController.getPostById);

// create a new post
router.post('/', authenticateJWT, PostController.createPost);

// update a post by id
router.put('/:id', authenticateJWT, PostController.updatePostById);

// delete a post by id
router.delete('/:id', authenticateJWT, PostController.deletePostById);

exports.modules = router;