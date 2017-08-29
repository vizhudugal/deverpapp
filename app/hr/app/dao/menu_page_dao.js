'use strict';

var menu_page_model = require('../model/menu_page_model.js');
var bookshelf = require('../model/database');
var menu_page_model_new = bookshelf.model('md_hr_menu_page_model');

exports.create_menu_page_dao_fn = function(menu, res, result){
  console.log("Menupage DAO");
  menu_page_model_new.forge({
                  ui_component: menu.ui_component_value,
                  ui_menuname: menu.ui_menuname_value,
                  created_on:menu.created_on_value,
                  updated_on:menu.updated_on_value,
                  created_by:menu.created_by_value,
                  updated_by:menu.updated_by_value,
                  status:menu.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_menu_page_dao_fn = function(req,res,result){
console.log("req.menu_id"+JSON.stringify(req.menu_id));
  menu_page_model_new.forge({menu_id:req.menu_id}).fetch()
  .then (function (status) {
      result(status);
  })
  .catch(function (err) {
      result(err)
  });
}
