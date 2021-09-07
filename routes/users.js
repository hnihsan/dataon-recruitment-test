const path = require('path');

const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getUserList);

router.get('/show/:userId', usersController.getUserDetail);

router.get('/new', usersController.getNewUser);

router.post('/', usersController.postAddUser);

router.get('/edit/:userId', usersController.getEditUser);

router.post('/edit/:userId', usersController.postEditUser);

module.exports = router;