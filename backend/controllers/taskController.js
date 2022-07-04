const taskService = require('../services/taskService');

const addTask = async (req, res, next) => {
  try {
    const newTask = await taskService.addTask(req.body);
    if (newTask) {
      return res.status(201).json(newTask);
    }    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await taskService.getAllTasks();
    return res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTaskById(id);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const taskUpDate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, status } = req.body;
    const task = await taskService.taskUpDate({ id, content, status });
    console.log(task);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  taskUpDate,
  deleteTask,
};