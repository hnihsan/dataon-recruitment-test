const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');

const router = express.Router();

// /index => GET
router.get('/', homeController.getHomeIndex);

module.exports = router;