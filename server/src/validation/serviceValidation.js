const Joi = require("joi");

// Create Service (Mentor)
const createServiceSchema = Joi.object({
  serviceName: Joi.string().trim().min(3).required(),
  description: Joi.string().trim().min(10).required(),
  duration: Joi.number().integer().positive().required(),
  price: Joi.number().positive().required(),
});

//   Update Service
const updateServiceSchema = Joi.object({
  serviceName: Joi.string().trim().min(3),
  description: Joi.string().trim().min(10),
  duration: Joi.number().integer().positive(),
  price: Joi.number().positive(),
  active: Joi.boolean(),
}).min(1); // at least one field required

module.exports = {
  createServiceSchema,
  updateServiceSchema,
};
