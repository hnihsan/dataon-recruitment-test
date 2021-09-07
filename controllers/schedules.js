const Schedule = require('../models').Schedule
const User = require('../models').User
const Room = require('../models').Room
const { Op } = require("sequelize");

exports.getUpcomingScheduleList = async (req, res, next) => {
  const schedules = await Schedule.findAll({
    where: {
      start_time: {
        [Op.gte]: Date.now(),
      }
    },
    order: [
      ['updated_at', 'DESC']
    ],
    include: [User, Room]
  });
  console.log(schedules)

  res.render('schedules/index', {schedules: schedules});
};

exports.getHistoryScheduleList = async (req, res, next) => {
  const schedules = await Schedule.findAll({
    where: {
      end_time: {
        [Op.lt]: Date.now(),
      }
    },
    order: [
      ['updated_at', 'DESC']
    ],
    include: [User, Room]
  });
  console.log(schedules)

  res.render('schedules/history', {schedules: schedules});
};

exports.getNewSchedule = async (req, res, next) => {
  const users = await User.findAll()
  const rooms = await Room.findAll()
  res.render('schedules/new', {users: users, rooms: rooms});
};

exports.postAddSchedule = async (req, res, next) => {
  const schedule = await Schedule.create({
    user_id: req.body.user_id,
    room_id: req.body.room_id,
    description: req.body.description,
    start_time: req.body.start_at,
    end_time: req.body.end_at,
  })

  console.log(schedule)
  res.redirect('/schedules');
};

exports.postDeleteSchedule = async (req, res, next) => {
  const schedule = await Schedule.findByPk(req.params.scheduleId);
  await schedule.destroy()
  res.redirect('/schedules')
};