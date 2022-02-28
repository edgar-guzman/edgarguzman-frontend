const router = require('express').Router();
const pageRoute = require('./pagerRoute');
const shopRoute = require('./shopperRoute');

router.use('/shop', shopRoute);
router.use('/', pageRoute);

module.exports = router;
