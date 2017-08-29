'use strict';

var knex = require('knex')({
  client: 'mysql',
  // connection: {
  //   host     : '127.0.0.1',
  //   user     : 'root',
  //   password : 'password123',
  //   database : 'test',
  //   charset  : 'utf8'
  // }

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
