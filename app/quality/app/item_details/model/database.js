'use strict';
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    port     : '3307',
    user     : 'wkadmin',
    password : 'password123',
    database : 'test',
    charset  : 'utf8'
  }
}), bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
// var mysql = require('mysql');
// var connection;
//   require('fs').readFile('../config/getconnection.json','utf8',function(err,data){
//     dbjson=JSON.parse(data);
//     global.connection=mysql.createConnection({
//       host:dbjson[0].host,
//       port:dbjson[0].port,
//       user:dbjson[0].user,
//       password:dbjson[0].password,
//       database:dbjson[0].database
//     });
//     global.connection.connect(function(err){
//       if(!err){
//         console.log("Connected with database");
//       }
//       else {
//         console.log("Failed to connect with database!");
//       }
//     });
//   });
