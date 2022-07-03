const express = require('express');
const userController = require('../../controllers/userController');
const validateUser = require('../../middlewares/userIsValid');
const validateToken = require('../../middlewares/tokenIsValid');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.post('/', validateUser, userController.createUser);
userRouter.delete('/me', validateToken, userController.deleteUserById);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;