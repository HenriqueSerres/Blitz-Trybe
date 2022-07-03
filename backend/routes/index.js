const router = require('express').Router();
const loginRouter = require('./login');
const userRouter = require('./user');
const taskRouter = require('./task');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;