const express = require('express');
const config = require('./config');
let HOSTNAME = config.env.HOSTNAME;
let PORT = config.env.PORT;
const app = express();

app.use(config.middl);

app.listen(PORT, () => {
    console.log(`🚀🗜  @ http://${HOSTNAME}:${PORT}/`);
});
