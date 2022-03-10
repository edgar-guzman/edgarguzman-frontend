const router = require('express').Router();
const pageRoute = require('./pagerRoute');
const shopRoute = require('./shopperRoute');

router.use('/', pageRoute);
router.use('/shop', shopRoute);

module.exports = router;
