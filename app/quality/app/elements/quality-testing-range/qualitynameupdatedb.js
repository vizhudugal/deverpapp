var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');
exports.updatequalityvalues=function(minimumvalue,maximumvalue,qualityid_get,callback){
connection.query("update od_quality_quailty_item_id_value_mapping set minimum_value='"+minimumvalue+"',maximum_value='"+maximumvalue+"'  where quality_parameter_id='"+qualityid_get+"' ",function(err,rows){
    if(!err)
    {
      // console.log("rows");
      return callback("updated");
    }
  else{
      return callback("reject");
  }
    });
}
