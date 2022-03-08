// pageController : getShop, postShop, putShop, deleteShop, getShopId, postShopId, putShopId, deleteShopId;
const config = require('../../config');

const getShop = (req, res) => {
    res.send('Get all boards');
};

const postShop = (req, res) => {
    res.status(config.env.STATUS_CODE).send(config.env.RENDER_PAGES.REST_POST);
};

const putShop = (req, res) => {
    res.status(config.env.STATUS_CODE).send(config.env.RENDER_PAGES.REST_PUT);
};

const deleteShop = (req, res) => {
    res.status(config.env.STATUS_CODE).send(config.env.RENDER_PAGES.REST_DELETE);
};

const getShopId = (req, res) => {
    const id = req.params.id;
    res.send('Get a board ID, URL: /' + id);
};

const postShopId = (req, res) => {
    res.status(405).send('Not allow when adding a board ID within a existing board ID');
};

const putShopId = (req, res) => {
    const id = req.params.id;
    res.send('Updated this board ID, URL: /' + id);
};

const deleteShopId = (req, res) => {
    const id = req.params.id;
    res.send('Deleted this board ID, URL: /' + id);
};

module.exports = {
    getShop,
    postShop,
    putShop,
    deleteShop,
    getShopId,
    postShopId,
    putShopId,
    deleteShopId,
};
