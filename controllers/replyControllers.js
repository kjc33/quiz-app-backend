// import the model
const { Reply } = require('../models/replyModel');

// get all replies
exports.getAllReplies = async (req, res) => {
    try {
        const replies = await Reply.findAll();
        res.status(200).json(replies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get a reply by id
exports.getReplyById = async (req, res) => {
    try {
        const reply = await Reply.findByPk(req.params.id);
        if (!reply) {
            res.status(404).json({ message: 'Reply not found' });
        } else {
            res.status(200).json(reply);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// create a new reply
exports.createReply = async (req, res) => {
    try {
        const reply = await Reply.create(req.body);
        res.status(201).json(reply);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update a reply by id
exports.updateReplyById = async (req, res) => {
    try {
        const reply = await Reply.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!reply) {
            res.status(404).json({ message: 'Reply not found' });
        } else {
            res.status(200).json(reply);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// delete a reply by id
exports.deleteReplyById = async (req, res) => {
    try {
        const reply = await Reply.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!reply) {
            res.status(404).json({ message: 'Reply not found' });
        } else {
            res.status(204).json(reply);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
