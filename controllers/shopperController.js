// shopperController : getShop, getShopId, getCart;
const config = require('../config/configuration');

const page = {
    title: {
        SHOP_TITLE: config.env.PAGE_TITLE.SHOP,
        SHOP_ID_TITLE: config.env.PAGE_TITLE.SHOP_ID,
        ADD_TO_CART_TITE: config.env.PAGE_TITLE.ADD_TO_CART,
    },
};

const getShop = (req, res) => {
    res.render(config.env.RENDER_PAGES.SHOP, {
        currentTitle: page.title.SHOP_TITLE,
    });
};

const getShopId = (req, res) => {
    res.render(config.env.RENDER_PAGES.SHOP_ID, {
        currentTitle: page.title.ADD_TO_CART_TITE,
    });
};

const getCart = (req, res) => {
    res.render(config.env.RENDER_PAGES.ADD_TO_CART, {
        currentTitle: page.title.ADD_TO_CART_TITE,
    });
};

module.exports = {
    getShop,
    getShopId,
    getCart,
};
