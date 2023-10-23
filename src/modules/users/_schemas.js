const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required().min(1),
    last_name: Joi.string().required().min(1),
    gender: Joi.string().valid('male', 'female').required(),
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(4),
  }),
};

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(4),
  }),
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["id"]),
    filters: Joi.object({
      gender: Joi.string().valid('male', 'female'),
    }),
  }),
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

exports.patchUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    first_name: Joi.string().min(1),
    last_name: Joi.string().min(1),
    gender: Joi.string().valid('male', 'female'),
    username: Joi.string().min(3),
    password: Joi.string().min(4),
  }),
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};