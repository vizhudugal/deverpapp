'use strict';
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'wkadmin',
    password : 'password123',
    database : 'deverpapp',
    charset  : 'utf8',
    port     : '3307'
  }
}), bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
