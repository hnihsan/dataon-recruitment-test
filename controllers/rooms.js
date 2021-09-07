const Room = require('../models').Room

exports.getRoomList = async (req, res, next) => {
  const rooms = await Room.findAll({
    order: [
      ['updated_at', 'DESC']
    ]
  });
  console.log(rooms)
  res.render('rooms/index', {rooms: rooms});
};

exports.getRoomDetail = async (req, res, next) => {
  const room = await Room.findByPk(req.params.roomId);
  console.log(room)
  res.render('rooms/show', {room: room});
};

exports.getNewRooms = (req, res, next) => {
  res.render('rooms/new');
};

exports.postAddRooms = async (req, res, next) => {
  const room = await Room.create({
    name: req.body.name,
    capacity: req.body.capacity
  })

  res.redirect('/rooms');
};

exports.getEditRooms = async (req, res, next) => {
  const room = await Room.findByPk(req.params.roomId);
  console.log(room)
  res.render('rooms/edit', {room: room});
};

exports.postEditRooms = async (req, res, next) => {
  const room = await Room.findByPk(req.params.roomId)

  room.name = req.body.name
  room.capacity = req.body.capacity
  await room.save()

  res.redirect('/rooms');
};