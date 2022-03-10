// middleware : middl - config.middl;

const express = require('express');
const config = require('../config/configuration');
const templateType = config.env.TEMPLATE_TYPE;
const templatePath = config.env.TEMPLATE_PATH;
const templateStatic = config.env.TEMPLATE_STATIC;
const routes = require('../routes');
const path = require('path');
const middl = express();

middl.set('views', `${templatePath}`);
middl.set('view engine', `${templateType}`);
middl.use(express.static(path.join(__dirname, `${templateStatic}`)));

middl.use(routes);

module.exports = middl;
