const knex = require('knex');

const environment = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
// git remote -v shows the list of remotes you have
// should be origin by default
