const express = require('express');
const httpValidator = require('../../shared/http-validator');
const { getActivitySchema, } = require('./_schemas');
const listActivity = require('./list-activity');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getActivity = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, query: req.query }, getActivitySchema);

    const data = await listActivity({ id: req.params.id, ...req.query });

    res.status(200).json({ ...data });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getActivity
};