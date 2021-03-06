const path = require('path');

const express = require('express');

const sessionController = require('../controllers/session');

const router = express.Router();

// /index => GET
router.get('/login', sessionController.getLogin);

module.exports = router;