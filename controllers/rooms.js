exports.getAddRooms = (req, res, next) => {
  res.render('rooms/index');
};

exports.getNewRooms = (req, res, next) => {
  res.render('rooms/new');
};

exports.postAddRooms = (req, res, next) => {
  res.redirect('/rooms');
};

exports.getEditRooms = (req, res, next) => {
  res.render('rooms/edit');
};

exports.postEditRooms = (req, res, next) => {
  res.redirect('/rooms');
};