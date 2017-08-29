'use strict';
var qrcode_model = require('../model/qrcode_model.js');
var bookshelf = require('../model/database');
var od_qrcode_model = bookshelf.model('od_qrcode_model');

var path=require('path');
var qr = require('qr-image');
var fs = require("fs");
var sleep = require('system-sleep');

exports.create_qrcode_dao_fn = function(inputcode, res, result){
    var qr_code = qr.image(inputcode.qr_code_value, { type: 'png' });
    qr_code.pipe(fs.createWriteStream(__dirname+'/imgs/qr_code.png'));
    sleep(10*1000); // sleep for 10 seconds
    var img = fs.readFileSync(__dirname+'/imgs/qr_code.png');
    //res.type('png');
    //qr_svg.pipe(res);
      od_qrcode_model.forge({
                      grn_id: inputcode.grn_id_value,
                      item_id: inputcode.item_id_value,
                      item_qty: inputcode.item_qty_value,
                      qr_code: img,
                      created_on:null,
                      updated_on:null,
                      created_by:inputcode.created_by_value,
                      updated_by:inputcode.updated_by_value,
                      status:inputcode.status_value
                    }).save()
      .then (function (status) {
        fs.unlink(__dirname+'/imgs/qr_code.png');
        result(status);
      })
      .catch(function (err) {
          result(err);
      });

}

exports.fetch_qrcode_dao_fn = function(req,res,result){
  od_qrcode_model.forge({id:req.id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}
