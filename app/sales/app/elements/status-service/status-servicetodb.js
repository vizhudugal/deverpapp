var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');

 exports.statusservice=function(status,status1,callback){
  connection.query("select * from od_sales_sales_order_detail where status in('"+status+"','"+status1+"')",function(err,data){
     if(!err){        
          return callback(data);
      }
      else{
          return callback("no data");
      }
        });
    }
