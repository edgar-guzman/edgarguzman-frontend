// pageController : getShop, postShop, putShop, getShopId;
// const config = require('./config');

const getShop = (req, res) => {
  res.send('Get all boards');
};

const postShop = (req, res) => {
  res.send('Get company about page');
};

const putShop = (req, res) => {
  res.send('Get company contact page');
};

const getShopId = (req, res) => {
  res.send('Get company contact page');
};

module.exports = {
  getShop,
  postShop,
  putShop,
  getShopId,
};
