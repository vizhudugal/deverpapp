
var barcode_dao = require('../dao/barcode_dao.js');

exports.create_barcode = function(req, res){
  barcode_dao.create_barcode_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_barcode = function(req,res){
  barcode_dao.fetch_barcode_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
