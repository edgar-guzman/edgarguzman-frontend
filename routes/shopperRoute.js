const shopper = require('express').Router();
const shopController = require('../controllers');

shopper
  .route('/')
  .get(shopController.getShop)
  .post((req, res) => {
    res.status(405).send('Not allowed when adding a book');
  })
  .put((req, res) => {
    res.status(405).send('Not allowed when updating a book');
  })
  .delete((req, res) => {
    res.status(405).send('Not allowed when deleting a book');
  });

shopper
  .route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    res.send('Get a board ID, URL: /' + id);
  })
  .post((req, res) => {
    res
      .status(405)
      .send('Not allow when adding a board ID within a existing board ID');
  })
  .put((req, res) => {
    const id = req.params.id;
    res.send('Updated this board ID, URL: /' + id);
  })
  .delete((req, res) => {
    const id = req.params.id;
    res.send('Deleted this board ID, URL: /' + id);
  });

module.exports = shopper;
