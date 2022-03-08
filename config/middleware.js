// middleware : middl - middl;

const express = require('express');
const config = require('../config/configuration');
const routes = require('../routes');
const templateType = config.env.TEMPLATE_TYPE;
// const templatePath = config.TEMPLATE_PATH;
const middl = express();

// middl.set('views', templatePath);
middl.set('view engine', templateType);
// middl.set('views', '../views');
middl.set('view engine', 'ejs');
middl.use(routes);

module.exports = middl;
