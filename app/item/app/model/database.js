'use strict';
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    port     : '3307',
    user     : 'wkadmin',
    password : 'password123',
    database : 'deverpapp',
    charset  : 'utf8'
  }
}), bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
