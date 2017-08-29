
var qrcode_dao = require('../dao/qrcode_dao.js');

exports.create_qrcode = function(req, res){
  qrcode_dao.create_qrcode_dao_fn(req.query, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_qrcode = function(req,res){
  qrcode_dao.fetch_qrcode_dao_fn(req.query, res, function(result){
    //console.log( "data.length"+JSON.stringify(qr_code.data));
    //saveImage(result.qr_code.data);
    if(result==null){
      res.json({"returnval":"Invalid!"});
    } else {
    res.json({"returnval":result});
  }
  });
  function saveImage(data){

  }
};
