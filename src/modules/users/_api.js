const express = require('express');
const { isLoggedIn } = require('../../shared/auth');
const { getUsers, postUser, loginUser, getUser, patchUser, deleteUser, getMe, logout } = require('./_controllers');

const router = express.Router();

router.post('/users/login', loginUser);
router.get('/users/logout', isLoggedIn, logout);
router.post('/users', postUser);
router.get('/users', isLoggedIn, getUsers);
router.get('/users/me', isLoggedIn, getMe);
router.get('/users/:id', isLoggedIn, getUser);
router.patch('/users/:id', isLoggedIn, patchUser);
router.delete('/users/:id', isLoggedIn, deleteUser);

module.exports = router;