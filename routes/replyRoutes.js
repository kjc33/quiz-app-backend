const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyControllers');
const {authenticateJWT} = require('../middlewares/authMiddleware');


// get all replies
router.get('/', replyController.getAllReplies);

// get a reply by id
router.get('/:id', replyController.getReplyById);

// create a new reply
router.post('/', authenticateJWT, replyController.createReply);

// update a reply by id
router.put('/:id', authenticateJWT, replyController.updateReplyById);

// delete a reply by id
router.delete('/:id', authenticateJWT, replyController.deleteReplyById);

exports.modules = router;