var fetch_p_o_model=require('../model/p_o_model.js');
var bookshelf = require('../model/database');
var jsonfile=require('jsonfile');
var od_pur_pur_register_extnd_model = bookshelf.model('od_pur_pur_register_extnd_model');
exports.save_p_o_dao_fn= function(req,result){
  var response={purchase_order_number:req.po_number,
                purchase_order_date:req.po_date,
                supplier_id:req.supplier_id,
                po_price:req.per_unit_price,
                item_id:req.item_id,
                purchase_order_type_id:req.item_type_id,
                item_quantity:req.item_quantity,
                reference_id:req.reference_id,
                warehouse_stores_id:req.warehouse_stores_id,
                status:req.status,
                created_by:req.created_by,
                created_on:null,
                updated_by:req.updated_by,
                updated_on:null
              };
              var data=[{
                  purchase_order_number:req.po_number,
                  purchase_order_date:req.po_date,
                  purchase_request_number:req.pr_number,
                  item_quantity:req.item_quantity,
                  unit_of_measure_id:req.unit_of_measure_id,
                  per_unit_price:req.per_unit_price,
                  total_price:req.totalprice,
                  supplier_add1:req.supplier_add1,
                  supplier_add2:req.supplier_add2,
                  suppier_mob_no:req.suppier_mob_no,
                  suppier_email_id:req.suppier_email_id,
                  suppier_city:req.suppier_city,
                  supplier_name:req.supplier_name,
                  itemname:req.itemname,
                  check_status:req.check_status
                }];
// require('fs').readFile('../config/company_address.json','utf8',function(err,data1){
  // console.log("data1"+data1);
  var cmp_address_json=require('../config/company_address.json');
  // console.log("cmp_address_json"+JSON.stringify(cmp_address_json));
                // var cmp_address_json=JSON.parse(data1);
                // console.log("cmp_address_json"+cmp_address_json);
                var pdf = require('html-pdf');
                var content = "<table width='700px' margin-left='10%'><tr><td><img 'src=''file:///D:/erpapp/app/images/salesimage.jpg''' height='100px' width='100px'></td><td><h1>Purchase Order</h1></td></tr></table><br><br><br><br>"
                content += "<table width='700px' border='0'><tr><td>"+cmp_address_json[0].company_name+"</td><td align='right'>Po Date:"+data[0].purchase_order_date+"</td></tr><tr><td>"+cmp_address_json[0].address_1+"</td><td align='right'>Po Number:"+data[0].purchase_order_number+"</td></tr>"
                content += "<tr><td>"+cmp_address_json[0].address_2+"</td></tr><tr><td>"+cmp_address_json[0].company_mailid+"</td></tr><tr><td>"+cmp_address_json[0].phoneno+"</td></tr></table><br><br><br><br><br>"

                content += "<table width='700px' border='0' margin-left='10%'><tr><td>To</td></tr></table><table style='margin-left:5%'>"
                content += "<tr style='margin-left:5%'><td>"+data[0].supplier_name+"</td></tr><tr style='margin-left:5%'><td>"+data[0].supplier_add1+"</td></tr><tr><td style='margin-left:5%'>"+data[0].supplier_add2+"</td></tr><tr style='margin-left:5%'><td>"+data[0].suppier_city+"</td></tr>"
                content += "<tr style='margin-left:5%'><td>"+data[0].suppier_email_id+"</td></tr><tr style='margin-left:5%'><td>"+data[0].suppier_mob_no+"</td></tr></table><br><br><br><br>"


                content += "<table width='700px' border='0' margin-left='10%'><tr><td>S.No</td><td>Item description</td><td>Qty</td><td>UOM</td><td>Rate</td><td>Amount</td></tr>"
                content += "<tr><td>1</td><td>"+data[0].itemname+"</td><td>"+data[0].item_quantity+" "+data[0].unit_of_measure_id+"</td><td></td><td>"+data[0].per_unit_price+"</td><td>"+data[0].total_price+"</td></tr></table><br><br><br><br>"

                content += "<table width='700px' style='margin-left:80%'><tr><td>Total :"+data[0].total_price+"</td></tr></table>"
                pdf.create(content).toFile('D:/erpapp-source-tree/erpapp/app/procurement/app/purchase_order/pdf files/'+data[0].purchase_order_number+'_Purchaseorder.pdf', function(err, res) {
                  if (err) return console.log(err);
                  console.log(res);
                });
              // });
  od_pur_pur_register_extnd_model.forge(response).save()
  .then(function(purchase_order_response){
    console.log(JSON.stringify(purchase_order_response,null,1));
    result(purchase_order_response)
  })
  .catch(function (err) {
    console.error(err);
    result("not insert values")
  });
}
