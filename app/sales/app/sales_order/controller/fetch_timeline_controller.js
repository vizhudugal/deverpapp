'use strict';

var fetch_timeline_dao = require('../dao/fetch_timeline_dao');

exports.fetch_timeline_fn= function(req,res){
  fetch_timeline_dao.fetch_timeline_dao_fn(req.query, res, function(result){
      res.json({data:result});
  });
};
