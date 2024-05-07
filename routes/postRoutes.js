const express = require('express');
const postController = require('../controllers/posts');
const authMiddleware = require('../middleware/authMiddleware');
const postRouter = express.Router();

postRouter.get('/', authMiddleware.verifyToken, postController.AllPosts);

module.exports = postRouter;