'use strict';
var bookshelf = require('./database');

var md_hr_menu_page_model = bookshelf.Model.extend({
  tableName: 'md_hr_menu_page',
});
module.exports = bookshelf.model('md_hr_menu_page_model', md_hr_menu_page_model);
