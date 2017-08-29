var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');

//   // *************fetch range flag 1 values**************
//
//   exports.Rangequalitycheckbycondition=function(qualityid_get,callback){
//   connection.query("select t1.item_id,group_concat(t1.range_flag_value) as value,t2.item_name from od_quality_parameter_id_range_flag_mapping as t1 join md_procurement_item_detail as t2 on t1.item_id=t2.item_id  where quality_parameter_id = '"+ qualityid_get +"' group by item_id",function(err,rows){
// // console.log(err);
//       if(!err)
//       {
// // console.log(rows);
//   return callback(rows);
//       }
//     else{
//         return callback("reject");
//     }
//       });
//       }
//

  // *************fetch range flag 1 values**************

  exports.Rangequalitycheckbycondition1=function(qualityid_get,callback){
  connection.query("select range_flag_value from od_quality_parameter_id_range_flag_mapping  where quality_parameter_id = '"+ qualityid_get +"'",function(err,rows){
// console.log(err);
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

// **********item name list new js*********
exports.itemlisturlistname=function(qualityid,callback){
connection.query("SELECT md_procurement_item_detail.item_id, UPPER(md_procurement_item_detail.item_name) as item_name from md_procurement_item_detail WHERE NOT EXISTS (SELECT t2.item_id FROM config_quality_parameter_type_flag_detail as  t2 WHERE md_procurement_item_detail.item_id = t2.item_id and   t2.quality_parameter_id='"+qualityid+"')",function(err,rows){
  //  console.log(rows);
   if(!err)
   {
    return callback(rows);
  }
  else{
      return callback("reject");
  }
    });
}
