const express = require('express');

const middlewares = require('../config/middlewares');

module.exports = middlewares(express());
