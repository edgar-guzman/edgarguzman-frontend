'use strict';

// pagfiguration : pagfig - pagfig.env.PORT;
// const config = require('./configuration');

const pagfig = {
    env: {
        RENDER_PAGES: {
            // res.send(); /or res.render();
            HOMEPAGE: 'index',
            ABOUT: 'pages/about',
            CONTACT: 'pages/contact',

            // // res.render();
            // SHOP: 'shop/shop',
            // SHOP_ID: 'shop/product',
            // ADD_TO_CART: 'shop/cart',

            // res.rest(); - Contact REST Route
            CONTACT_POST: '',
            CONTACT_PUT: '',
            CONTACT_DELETE: '',

            // res.rest();
            REST_POST: '',
            REST_PUT: '',
            REST_DELETE: '',
        },

        PAGES_TITLE: {
            // res.render();
            HOMEPAGE_TITLE: 'Edgar Guzman',
            ABOUT_TITLE: 'About',
            CONTACT_TITLE: 'Contact',

            // res.render();
            SHOP_TITLE: 'Shop',
            SHOP_ID_TITLE: 'Shopper ID',
            ADD_TO_CART_TITLE: 'Shopping Cart',
        },
    },
};

module.exports = pagfig;
