var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');

exports.deleteallitemdetail=function(itemid,qualityid_get,callback){
  connection.query("UPDATE  config_quality_parameter_type_flag_detail SET status='inactive' where item_id='"+itemid+"' and quality_parameter_id='"+qualityid_get+"'",function(err,rows){
  console.log(err);
   if(!err){
return callback("deleted");
console.log("deleted");

  }
  else{
    return callback("reject");
  }
});
}
