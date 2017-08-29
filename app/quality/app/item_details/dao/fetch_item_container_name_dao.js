var fetch_item_details = require('../model/item_model');
var bookshelf = require('../model/database');
// var fetch_item_details_model = bookshelf.model('item_model');
// var fetch_item_contact_details_model = bookshelf.model('contact_model');

exports.fetch_item_container_name_dao_fn = function(item,res,result){
console.log("console"+JSON.stringify(item));
  bookshelf.knex('md_item_container_name as t1').select('t1.container_name','t1.container_type_id')
  .innerJoin('md_procurement_item as t2', 't2.container_type_id', 't1.container_type_id')
  .where({'t2.item_name':item.itemname})


.then (function (item) {
  res.json(item)
  // console.log("item.length"+item.length);
  // console.log("item.length"+JSON.stringify(item[1],null,1));
    // console.log("item"+JSON.stringify(item[0],null,1));
    // var array=[];
    // for(var i=0;i<item.length;i++){
    //
    //   array.push({"text":item[i].container_name,"value":item[i].item_name});
    // }
    // // console.log("response inside server "+item);
    // console.log("array"+JSON.stringify(array));
    //  result(array)
})
.catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
    console.log(err);

});
}
