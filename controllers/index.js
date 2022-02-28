// controllers
const { getIndex, getAbout, getContact } = require('./pagerController');
const {
  getShop,
  postShop,
  putShop,
  getShopId,
} = require('./shopperController');

module.exports = {
  getIndex,
  getAbout,
  getContact,

  getShop,
  postShop,
  putShop,
  getShopId,
};
