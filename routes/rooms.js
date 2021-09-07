const path = require('path');

const express = require('express');

const roomsController = require('../controllers/rooms');

const router = express.Router();

router.get('/', roomsController.getRoomList);

router.get('/:roomId', roomsController.getRoomDetail);

router.get('/new', roomsController.getNewRooms);

router.post('/', roomsController.postAddRooms);

router.get('/edit/:roomId', roomsController.getEditRooms);

router.post('/edit/:roomId', roomsController.postEditRooms);

module.exports = router;