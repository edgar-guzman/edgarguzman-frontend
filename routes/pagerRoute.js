const pager = require('express').Router();
const pagerController = require('../controllers');

pager
    .route('/')
    .get(pagerController.getIndex)
    .post((req, res) => {
        res.status(405).send('Not allowed when adding a book');
    })
    .put((req, res) => {
        res.status(405).send('Not allowed when updating a book');
    })
    .delete((req, res) => {
        res.status(405).send('Not allowed when deleting a book');
    });

pager
    .route('/about')
    .get(pagerController.getAbout)
    .post((req, res) => {
        res.status(405).send('Not allowed when adding a book');
    })
    .put((req, res) => {
        res.status(405).send('Not allowed when updating a book');
    })
    .delete((req, res) => {
        res.status(405).send('Not allowed when deleting a book');
    });

pager
    .route('/contact')
    .get(pagerController.getContact)
    .post((req, res) => {
        res.status(405).send('Not allowed when adding a book');
    })
    .put((req, res) => {
        res.status(405).send('Not allowed when updating a book');
    })
    .delete((req, res) => {
        res.status(405).send('Not allowed when deleting a book');
    });

module.exports = pager;
