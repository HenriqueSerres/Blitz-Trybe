const taskService = require('../services/taskService');

const addTask = async (req, res, next) => {
  try {
    const { content, status } = req.body;
    const { id } = req.user.data;
    const newTask = await taskService.addTask({ userId: id, content, status });
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
    const task = await taskService.getPostById(id);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const taskUpDate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.user.data;
    const { title, content } = req.body;
    const post = await taskService.postUpDate({ id, email, title, content });
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.user.data;
    await taskService.deletePost({ id, email });
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