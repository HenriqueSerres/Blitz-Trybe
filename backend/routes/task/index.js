const express = require('express');
const taskController = require('../../controllers/taskController');
const validateToken = require('../../middlewares/tokenIsValid');
const validateTask = require('../../middlewares/taskValidate');
const validateTaskEdit = require('../../middlewares/updateTaskValidate');

const taskRouter = express.Router();

taskRouter.post('/', validateToken, validateTask, taskController.addtask);
taskRouter.get('/', validateToken, taskController.getAllTasks);
taskRouter.get('/:id', validateToken, taskController.getTaskById);
taskRouter.put('/:id', validateToken, validateTaskEdit, taskController.taskUpDate);
taskRouter.delete('/:id', validateToken, taskController.deleteTask);

module.exports = taskRouter;