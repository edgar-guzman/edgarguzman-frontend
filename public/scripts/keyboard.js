const pager = require('express').Router();
const pageController = require('../controllers');

pager
    .route('/')
    .get(pageController.getIndex)
    .post((req, res) => {
        res.status(405).send('Not allow to add a board');
    })
    .put((req, res) => {
        res.status(405).send('Not allow to update a board');
    })
    .delete((req, res) => {
        res.status(405).send('Not allow to delete a board');
    });

pager
    .route('/about')
    .get(pageController.getAbout)
    .post((req, res) => {
        res.status(405).send('Not allow to add a board');
    })
    .put((req, res) => {
        res.status(405).send('Not allow to update a board');
    })
    .delete((req, res) => {
        res.status(405).send('Not allow to delete a board');
    });

pager.route('/contact').get(pageController.getContact).post(pageController.postContact).put(pageController.putContact).delete(pageController.deleteContact);

module.exports = pager;
