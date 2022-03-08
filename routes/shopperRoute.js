const shopper = require('express').Router();
const shopController = require('../controllers');

shopper
  .route('/')
  .get(shopController.getShop)
  .post(shopController.postShop)
  .put(shopController.putShop)
  .delete(shopController.deleteShop);

shopper
  .route('/:id')
  .get(shopController.getShopId)
  .post(shopController.postShopId)
  .put(shopController.putShopId)
  .delete(shopController.deleteShopId);

module.exports = shopper;
