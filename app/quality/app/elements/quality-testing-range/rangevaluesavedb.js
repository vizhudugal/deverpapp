var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');
exports.Rangevaluesave=function(qualityid_get,rangevalue,quality_itemid,callback){
  var rangevalueresponse={
    quality_parameter_id:qualityid_get,
    range_flag:rangevalue
  };
  var rangeflagset={
    quality_parameter_id:qualityid_get,
    range_flag:1,
    item_id:quality_itemid
  };

 connection.query("INSERT INTO od_quality_parameter_id_range_flag_mapping SET ?",[rangevalueresponse],function(err,rows){
// console.log("od_quality_parameter_id_range_flag_mapping saving");
   if(!err){
     connection.query("INSERT INTO od_quality_quailty_item_id_mapping SET ?",[rangeflagset],function(err,rows){
      return callback("saved");
        });
  }
  else{
      return callback("reject");
  }
    });
}


// ***************range values Auto complete display*******
exports.Rangevalueslist=function(qualityid_get,callback){
connection.query("select * from od_quality_parameter_id_range_flag_mapping where quality_parameter_id='"+qualityid_get+"'",function(err,rows){
  //  console.log(rows);
   if(rows.length>0){
     
      return callback(rows);
  }
  else{
      return callback("reject");
  }
    });
}


// **********new Range flag values saving*********
exports.Rangeflagsave=function(flagnewvalue,qualityid_get,quality_itemid,callback){
  // console.log("getting");
  var flagresponse={

    quality_parameter_range_value:flagnewvalue,
    quality_parameter_id:qualityid_get,
    item_id:quality_itemid

  };

connection.query("INSERT INTO od_quality_parameter_id_range_mapping SET ?",[flagresponse],function(err,rows){
  //  console.log(rows);
   if(!err){
    //  console.log("inserted");
      return callback("saved");
  }
  else{
      return callback("reject");
  }
    });
}

// **********Range flag values quality-testing-newitem saving*********
exports.Rangeflagsavenewitem=function(flagnewvalue,qualityparamid,itemidgenerate,callback){
  // console.log("getting");
  var flagresponse={

    quality_parameter_range_value:flagnewvalue,
    quality_parameter_id:qualityparamid,
    item_id:itemidgenerate

  };

connection.query("INSERT INTO od_quality_parameter_id_range_mapping SET ?",[flagresponse],function(err,rows){
  //  console.log(rows);
   if(!err){
    //  console.log("inserted");
      return callback("saved");
  }
  else{
      return callback("reject");
  }
    });
}









// ****************range flag value auto complete**************

exports.rangeflagvalueautocomplete=function(quality_itemid,callback){
connection.query("select item_id,range_flag_value from od_quality_parameter_id_range_flag_mapping where item_id='"+quality_itemid+"' ",function(err,rows){
  //  console.log(rows);
   if(!err){
    //  console.log("inserted");
      return callback(rows);
  }
  else{
      return callback("reject");
  }
    });
}

// ****************delete range flag value auto complete**************

exports.deletefunction=function(rangeflagvalue,callback){
  // console.log(rangeflagvalue);
connection.query("delete  from od_quality_parameter_id_range_mapping  where quality_parameter_range_value='"+rangeflagvalue+"'",function(err,rows){
  //  console.log(err);
   if(!err){
    //  console.log("deleted");
      return callback("deleted");
  }
  else{
      return callback("reject");
  }
    });
}

// ****************delete min max itemdetails**************
exports.deleteminmaxdetails=function(itemid,qualityid_get,callback){
connection.query("UPDATE  config_quality_parameter_type_flag_detail SET status='inactive' where item_id='"+itemid+"' and quality_parameter_id='"+qualityid_get+"'",function(err,rows){
   if(!err){
return callback("deleted");

  }
  else{
    return callback("reject");
  }
});
}
