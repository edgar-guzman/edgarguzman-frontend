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

        // // res.render();
        SHOP: 'shop/index',
        SHOP_ID: 'shop/shopID',
        // CONTACT: 'pages/contact',

        // res.rest();
        REST_POST: 'Not allow to add a board',
        REST_PUT: 'Not allow to update a board',
        REST_DELETE: 'Not allow to delete a board',
    },
};

module.exports = pagfig;
