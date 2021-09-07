const User = require('../models').User

exports.getUserList = async (req, res, next) => {
  const users = await User.findAll({
    attributes: ['id', 'fullname', 'email'],
    order: [
      ['updated_at', 'DESC']
    ]
  });
  console.log(users)
  res.render('users/index', {users: users});
};

exports.getUserDetail = async (req, res, next) => {
  const user = await User.findByPk(req.params.userId);
  console.log(user)
  res.render('users/show', {user: user});
};

exports.getNewUser = (req, res, next) => {
  res.render('users/new');
};

exports.postAddUser = async (req, res, next) => {
  const user = await User.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  })

  res.redirect('/users');
};

exports.getEditUser = async (req, res, next) => {
  const user = await User.findByPk(req.params.userId);
  console.log(user)

  res.render('users/edit', {user: user});
};

exports.postEditUser = async (req, res, next) => {
  const user = await User.findByPk(req.params.userId)

  user.fullname = req.body.fullname
  user.email = req.body.email
  user.password = req.body.password
  await user.save()

  res.redirect('/users');
};