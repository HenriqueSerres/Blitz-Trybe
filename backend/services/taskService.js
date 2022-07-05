const { Task } = require('../models');
const handleError = require('../utils/handleError');

const addTask = async (body) => {
  const tasks = await Task.create(body);
  
  return tasks;
};

const getAllTasks = async () => {
  const allTasks = await Task.findAll();
  return allTasks;
};

const getTaskById = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) throw handleError('404', 'task does not exist');
  return task;
};

const taskUpDate = async({ id, content, status }) => {
  const upDatedTask = await Task.update(
    {content, status}, { where: { id }}
  );
  return upDatedTask;
}

const deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) throw handleError('404', 'Task does not exist');
  
  await Task.destroy(
    { where: { id } },
  );
    return task;
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  taskUpDate,
  deleteTask,
};