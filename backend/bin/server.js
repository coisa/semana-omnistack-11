const express = require('express');

const errorHandler = require('../config/error-handler');
const middlewares = require('../config/middlewares');

process.on('uncaughtException', errorHandler.uncaughtException);
process.on('unhandledRejection', errorHandler.unhandledRejection);

const app = middlewares(express());

app.listen(process.env.PORT || 3333);