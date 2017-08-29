var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');
exports.qualityparameter=function(callback){
connection.query("SELECT *  FROM md_quality_quality_parameter",function(err,rows){
    if(!err)
    {
      // console.log(rows);
      return callback(rows);
    }
  else{
      return callback("reject");
  }
    });
}
