const knex = require('knex');
const dbConfig = require('../../config/database');

module.exports = knex(dbConfig.sqlite);