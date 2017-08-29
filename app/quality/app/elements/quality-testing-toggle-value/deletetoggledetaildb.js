var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');

exports.deletetoggledetail=function(itemid,qualityid_get,callback){
connection.query("UPDATE  config_quality_parameter_type_flag_detail SET status='inactive' where item_id='"+itemid+"' and quality_parameter_id='"+qualityid_get+"'",function(err,rows){
   if(!err)
   {
     return callback("deleted");
  }
  else
  {
    return callback("reject");
  }
});
}
exports.updatetogglevalue=function(itemid,togglevalueactive,qualityid_get,callback){
connection.query("UPDATE  od_quality_parameter_id_toggle_mapping SET toggle_value='"+togglevalueactive+"' where item_id='"+itemid+"' and quality_parameter_id='"+qualityid_get+"'",function(err,rows){
   if(!err)
   {
     return callback("updated!");
  }
  else
  {
    return callback("reject");
  }
});
}
