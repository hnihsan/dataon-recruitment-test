const path = require('path');

const express = require('express');

const scheduleController = require('../controllers/schedules');

const router = express.Router();

// /index => GET
router.get('/', scheduleController.getUpcomingScheduleList);

router.get('/history', scheduleController.getHistoryScheduleList);

router.get('/new', scheduleController.getNewSchedule);

router.post('/', scheduleController.postAddSchedule);

router.post('/delete/:scheduleId', scheduleController.postDeleteSchedule);

module.exports = router;