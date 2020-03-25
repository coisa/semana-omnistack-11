const express = require('express');
const router = require('./routes');

module.exports = (app) => {
    app.use(express.json());
    app.use(router);

    return app;
};