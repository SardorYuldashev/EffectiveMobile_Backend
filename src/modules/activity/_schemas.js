const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.getActivitySchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  query: Joi.object({
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["id"])
  }),
};