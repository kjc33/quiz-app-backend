// import the model
const { Post } = require('../models/postModel');

// get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get a post by id
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json(post);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// create a new post
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update a post by id
exports.updatePostById = async (req, res) => {
    try {
        const post = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json(post);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// delete a post by id
exports.deletePostById = async (req, res) => {
    try {
        const post = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json({ message: 'Post deleted' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
