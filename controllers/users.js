exports.getAddProduct = (req, res, next) => {
  res.render('users/index');
};

exports.getNewProduct = (req, res, next) => {
  res.render('users/new');
};

exports.postAddProduct = (req, res, next) => {
  res.redirect('/users');
};

exports.getEditProduct = (req, res, next) => {
  res.render('users/edit');
};

exports.postEditProduct = (req, res, next) => {
  res.redirect('/users');
};