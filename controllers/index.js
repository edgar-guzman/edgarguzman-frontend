// pagerController/shopperController : { getIndex, getAbout, getContact, getShop, getShopId, getCart };
const { getIndex, getAbout, getContact } = require('./pagerController');
const { getShop, getShopId, getCart } = require('./shopperController');

module.exports = {
    getIndex,
    getAbout,
    getContact,

    getShop,
    getShopId,
    getCart,
};
