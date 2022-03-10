// pagerController : getIndex, getAbout, getContact;
const config = require('../config/configuration');

const page = {
    title: 'Hello',
    // title: {
    //     HOMEPAGE_TITLE: config.env.PAGE_TITLE.HOMEPAGE,
    //     ABOUT_TITLE: config.env.PAGE_TITLE.ABOUT,
    //     CONTACT_TITLE: config.env.PAGE_TITLE.CONTACT,
    // },
};

const getIndex = (req, res) => {
    res.render(`${config.env.RENDER_PAGES.HOMEPAGE}`, {
        // currentTitle: `${page.title.HOMEPAGE_TITLE}`,
        currentTitle: `${page.title}`,
    });
};

const getAbout = (req, res) => {
    res.render(config.env.RENDER_PAGES.ABOUT, {
        currentTitle: page.title.ABOUT,
    });
};

const getContact = (req, res) => {
    res.render(config.env.RENDER_PAGES.CONTACT, {
        currentTitle: page.title.CONTACT_TITLE,
    });
};

module.exports = {
    getIndex,
    getAbout,
    getContact,
};
