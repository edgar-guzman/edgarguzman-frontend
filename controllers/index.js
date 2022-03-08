// controllers
const { getIndex, getAbout, getContact, postContact, putContact, deleteContact } = require('./pagerController');
const { getShop, postShop, putShop, deleteShop, getShopId, postShopId, putShopId, deleteShopId } = require('./shopperController');

module.exports = {
    getIndex,
    getAbout,
    getContact,
    postContact,
    putContact,
    deleteContact,

    getShop,
    postShop,
    putShop,
    deleteShop,
    getShopId,
    postShopId,
    putShopId,
    deleteShopId,
};
