const Joi = require('joi');

const POST = Joi.object({
  content: Joi.string().required(),
  status: Joi.string().required(),
});

const validatePostEdit = (req, _res, next) => {
  const { error } = POST.validate(req.body);

  if (error) {
    next({ status: 400, message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validatePostEdit;