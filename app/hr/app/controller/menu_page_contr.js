'use strict';

var menu_page_dao = require('../dao/menu_page_dao.js');

exports.create_menu_page = function(req, res){
  menu_page_dao.create_menu_page_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_menu_page = function(req,res){
  menu_page_dao.fetch_menu_page_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
