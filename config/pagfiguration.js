// pagfiguration : pagfig - pagfig.env;

const pagfig = {
    env: {
        // res.send();
        //   HOMEPAGE: 'Get selected boards',
        //   ABOUT: 'Get company about page',
        //   CONTACT: 'Get company contact page',

        // res.render();
        HOMEPAGE: 'index',
        ABOUT: 'pages/about',
        CONTACT: 'pages/contact',

        // res.render();
        SHOP: 'shop/index',
        SHOP_ID: 'shop/shopID',
        ADD_TO_CART: 'shop/cart',

        // res.rest();
        CONTACT_POST: 'Not allow to add a contact request',
        CONTACT_PUT: 'Not allow to update a contact request',
        CONTACT_DELETE: 'Not allow to delete a contact request',

        // res.rest();
        REST_POST: 'Not allow to add a board',
        REST_PUT: 'Not allow to update a board',
        REST_DELETE: 'Not allow to delete a board',

        // <title></title>
        HOMEPAGE_TITLE: 'Edgar Guzman',
        ABOUT_TITLE: 'About',
        CONTACT_TITLE: 'Contact',

        // res.render();
        SHOP_TITLE: 'Shop',
        SHOP_ID_TITLE: 'shop/shopID',
        ADD_TO_CART_TITLE: 'Shopping Cart',

        // res.rest();
        CONTACT_POST: 'Not allow to add a contact request',
        CONTACT_PUT: 'Not allow to update a contact request',
        CONTACT_DELETE: 'Not allow to delete a contact request',

        // res.rest();
        REST_POST: 'Not allow to add a board',
        REST_PUT: 'Not allow to update a board',
        REST_DELETE: 'Not allow to delete a board',
    },
};

module.exports = pagfig;
