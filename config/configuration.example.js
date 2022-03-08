'use strict';

// configuration : config - config.env.PORT;
const pagfig = require('./pagfiguration');

const config = {
    env: {
        PORT: 3000,
        HOSTNAME: 'localhost',
        NODE_ENV: 'dev',

        RENDER_PAGES: {
            // res.send();
            HOMEPAGE: pagfig.env.HOMEPAGE,
            ABOUT: pagfig.env.ABOUT,
            CONTACT: pagfig.env.CONTACT,

            // res.render();
            //   HOMEPAGE: pagfig.env.HOMEPAGE,
            //   ABOUT: pagfig.env.ABOUT,
            //   CONTACT: pagfig.env.CONTACT,

            //   // // res.render();
            //   SHOP: pagfig.env.SHOP,
            //   SHOP_ID: pagfig.env.SHOP_ID,
            //   // CONTACT: pagfig.env.CONTACT,

            // res.rest();
            REST_POST: pagfig.env.REST_POST,
            REST_PUT: pagfig.env.REST_PUT,
            REST_DELETE: pagfig.env.REST_DELETE,
        },
    },
};

module.exports = config;
