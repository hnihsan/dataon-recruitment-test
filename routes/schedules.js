const path = require('path');

const express = require('express');

const scheduleController = require('../controllers/schedules');

const router = express.Router();

// /index => GET
router.get('/', scheduleController.getScheduleList);

module.exports = router;