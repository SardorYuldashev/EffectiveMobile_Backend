const express = require('express');
const { isLoggedIn } = require('../../shared/auth');
const { getActivity } = require('./_controllers');

const router = express.Router();

router.get('/activity/:id', isLoggedIn, getActivity);

module.exports = router;