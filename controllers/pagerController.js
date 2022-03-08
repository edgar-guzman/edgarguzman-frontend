// pageController : getIndex, getAbout, getContact, postContact, putContact, deleteContact;
const config = require('../config/configuration');

const getIndex = (req, res) => {
    // res.send(config.env.RENDER_PAGES.HOMEPAGE);
    res.render(config.env.RENDER_PAGES.HOMEPAGE);
};

const getAbout = (req, res) => {
    res.send(config.env.RENDER_PAGES.ABOUT);
};

const getContact = (req, res) => {
    res.send(config.env.RENDER_PAGES.CONTACT);
};

const postContact = (req, res) => {
    res.send(config.env.RENDER_PAGES.REST_POST);
};

const putContact = (req, res) => {
    res.send(config.env.RENDER_PAGES.REST_PUT);
};

const deleteContact = (req, res) => {
    res.send(config.env.RENDER_PAGES.REST_DELETE);
};

module.exports = {
    getIndex,
    getAbout,
    getContact,
    postContact,
    putContact,
    deleteContact,
};
