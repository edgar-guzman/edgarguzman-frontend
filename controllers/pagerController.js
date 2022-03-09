// pageController : getIndex, getAbout, getContact, postContact, putContact, deleteContact;
const config = require('../config/configuration');

const page = {
    title: {
        HOMEPAGE_PAGER: `${config.env.PAGES_TITLE.HOMEPAGE}`,
        ABOUT_PAGER: `${config.env.PAGES_TITLE.ABOUT}`,
        CONTACT_PAGER: `${config.env.PAGES_TITLE.CONTACT}`,
    },
};

const getIndex = (req, res) => {
    res.render(config.env.RENDER_PAGES.HOMEPAGE, {
        currentTitle: page.title.HOMEPAGE_PAGER,
    });
};

const getAbout = (req, res) => {
    res.render(config.env.RENDER_PAGES.ABOUT, {
        currentTitle: page.title.ABOUT_PAGER,
    });
};

const getContact = (req, res) => {
    res.render(config.env.RENDER_PAGES.CONTACT, {
        currentTitle: page.title.CONTACT_PAGER,
    });
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
