const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicControllers');
const { authenticateJWT } = require('../middlewares/authMiddleware');

// get all topics
router.get('/', topicController.getAllTopics);

// get a topic by id
router.get('/:id', topicController.getTopicById);

// create a new topic
router.post('/', authenticateJWT, topicController.createTopic);

// update a topic by id
router.put('/:id', authenticateJWT, topicController.updateTopicById);

// delete a topic by id
router.delete('/:id', authenticateJWT, topicController.deleteTopicById);

exports.modules = router;