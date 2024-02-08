// import the model
const { Topic } = require('../models/topicModel');

// get all topics
exports.getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.findAll();
        res.status(200).json(topics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get a topic by id
exports.getTopicById = async (req, res) => {
    try {
        const topic = await Topic.findByPk(req.params.id);
        if (!topic) {
            res.status(404).json({ message: 'Topic not found' });
        } else {
            res.status(200).json(topic);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// create a new topic
exports.createTopic = async (req, res) => {
    try {
        const topic = await Topic.create(req.body);
        res.status(201).json(topic);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update a topic by id
exports.updateTopicById = async (req, res) => {
    try {
        const topic = await Topic.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!topic) {
            res.status(404).json({ message: 'Topic not found' });
        } else {
            res.status(200).json(topic);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// delete a topic by id
exports.deleteTopicById = async (req, res) => {
    try {
        const topic = await Topic.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!topic) {
            res.status(404).json({ message: 'Topic not found' });
        } else {
            res.status(204).json(topic);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
