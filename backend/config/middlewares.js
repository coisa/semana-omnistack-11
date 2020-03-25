module.exports = (app) => {
    const express = require('express');
    const router = require('./routes');

    app.use(express.json());
    app.use(router);

    return app;
};