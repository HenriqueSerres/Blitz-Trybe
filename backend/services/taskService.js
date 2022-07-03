const { User, Task } = require('../models');
const handleError = require('../utils/handleError');

const addTask = async ({ userId }) => {
  const tasks = await Task.create({ where: { id: userId } });
  
  return tasks;
};

const getAllTasks = async () => {
  const allTasks = await Task.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Task, as: 'tasks', through: { attributes: [] } }],
  });
  return allTasks;
};

const getTaskById = async (id) => {
  const task = await Task.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Task, as: 'tasks', through: { attributes: [] } }],
  });
  if (!task) throw handleError('404', 'task does not exist');
  return task;
};

const taskUpDate = async ({ id, email, content }) => {
  const user = await User.findOne({ where: { email } });
  if (user.dataValues.id !== Number(id)) {
    throw handleError('401', 'Unauthorized user');
  }
  await Task.update(
    { content },
    { where: { id } },
  );
    const editedTask = await getTaskById(id);
    return editedTask;
};

const deleteTask = async ({ id, email }) => {
  const task = await Task.findByPk(id);
  if (!task) throw handleError('404', 'Task does not exist');
  const user = await User.findOne({ where: { email } });
  if (user.dataValues.id !== task.dataValues.userId) throw handleError('401', 'Unauthorized user');
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