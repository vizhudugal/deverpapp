'use strict';
var bookshelf = require('../model/database');
var fetch_item_dao = require('../dao/fetch_item_dao.js');

exports.fetch_item = function(req,res){
  var Book = bookshelf.Model.extend({
    tableName: 'item_containers',
    pages:function () {
      return this.hasOne(User);
    }
});
var User = bookshelf.Model.extend({
    tableName: 'items',
    books: function() {
        return this.belongsToMany(Book, 'user_book_xref');
    }
});

// query the user using withRelated
return User.where({Item_ID: 1})
.fetch({withRelated:['books']})
.then(function(result) {
    // return only the book
    // return result.toJSON().books;
    console.log(result);
});
};
