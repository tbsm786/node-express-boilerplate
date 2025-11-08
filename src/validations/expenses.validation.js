/**
 * Joi schemas protecting the expenses endpoints.
 * Keeping the schemas small and permissive (e.g., optional description) ensures
 * client payload errors get surfaced early with consistent messaging.
 */
const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().allow('', null),
  }),
};

const updateProduct = {
  body: Joi.object().keys({
    name: Joi.string(),
    price: Joi.number().min(0),
    description: Joi.string().allow('', null),
  }),
};

module.exports = {
  createProduct,
  updateProduct,
};
