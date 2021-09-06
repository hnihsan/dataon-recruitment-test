const path = require('path');

const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getAddProduct);

router.get('/new', usersController.getNewProduct);

router.post('/', usersController.postAddProduct);

router.get('/edit/:userId', usersController.getEditProduct);

router.post('/edit/:userId', usersController.postEditProduct);

module.exports = router;