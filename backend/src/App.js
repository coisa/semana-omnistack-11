const express = require('express');

const errorHandler = require('../config/error-handler');
const middlewares = require('../config/middlewares');

module.exports = (process) => {
    process.on('uncaughtException', errorHandler.uncaughtException);
    process.on('unhandledRejection', errorHandler.unhandledRejection);

    const app = middlewares(express());

    return app;
};