'use strict';
var bookshelf = require('../model/database');
var path = require('path');
var barcode = require('barcode');

exports.create_barcode_dao_fn = function(req, res, result){
//   var Barc = require('barcode-generator')
//     ,barc = new Barc()
//     ,fs = require('fs');
//
// //create a 300x200 px image with the barcode 1234
// var buf = barc.code128('1234', 300, 200);
// fs.writeFile(__dirname + '/example.png', buf, function(){
//     console.log('wrote it');
// });
    var code39 = barcode('code39', {
        data: "it works",
        width: 400,
        height: 100,
    });
    var outfile = path.join(__dirname, 'imgs', 'mycode.png')
    code39.saveImage(outfile, function (err) {
        if (err) throw err;

        console.log('File has been written!');
    });

}

exports.fetch_barcode_dao_fn = function(req,res,result){
  // dpmt_model_new.forge({department_id:req.department_id}).fetch()
  // .then (function (status) {
  //     result(status)
  // })
  // .catch(function (err) {
  //   result(err)
  // });
  console.log( " request "+req.body);
}
