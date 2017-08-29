'use strict';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'wkadmin',
    password : 'password123',
    database : 'deverpapp',
    port : '3307',
    charset  : 'utf8'
  }
}), bookshelf = require('bookshelf')(knex);
// console.log("bookshelf"+bookshelf);
bookshelf.plugin('registry');

module.exports = bookshelf;
