const express = require('express');
const userController = require('../controllers/users');
const authMiddleware = require('../middleware/authMiddleware');
const userRouter = express.Router();
userRouter.post('/signup', userController.signup);
userRouter.post('/signin', userController.signin);
userRouter.get('/getUser', authMiddleware.verifyToken, userController.getUser)
module.exports = userRouter;