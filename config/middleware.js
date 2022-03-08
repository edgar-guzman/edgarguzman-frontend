// middleware : middl - middl;

const express = require('express');
const routes = require('../routes');
const middl = express();

middl.use(routes);

module.exports = middl;
