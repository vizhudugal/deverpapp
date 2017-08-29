var express    = require("express");
var mysql      = require('mysql');
var jsonfile=require('jsonfile');

exports.fetch1=function(callback){
connection.query("SELECT distinct od_sales_sales_order_detail.salesorder_id,od_sales_sales_order_detail.salesorder_date,od_sales_sales_order_detail.customer_id,od_sales_sales_order_detail.item_id,od_sales_sales_order_detail.container_quantity,od_sales_sales_order_detail.order_quantity,od_sales_sales_order_detail.required_delivery_date,od_sales_sales_order_detail.status,od_sales_sales_order_detail.delivered_quantity,md_sales_customer_detail.customer_name,md_sales_customer_detail.city,md_sales_finishedgoods_item_detail.item_name FROM od_sales_sales_order_detail JOIN md_sales_customer_detail ON (od_sales_sales_order_detail.customer_id = md_sales_customer_detail.customer_id) left JOIN md_sales_finishedgoods_item_detail ON (md_sales_finishedgoods_item_detail.item_id = od_sales_sales_order_detail.item_id) where od_sales_sales_order_detail.status = 'Projection'",function(err,rows){
  if(rows.length>0){
    return callback(rows);
  }
  else{
  return callback("reject");
    }
  });
}

exports.salespro=function(salesorder_id,callback){
connection.query("SELECT distinct md_sales_customer_detail.customer_name,md_sales_finishedgoods_item_detail.item_name,md_sales_customer_detail.city,od_sales_sales_order_detail.order_quantity,od_sales_sales_order_detail.container_quantity,od_sales_sales_order_detail.required_delivery_date FROM od_sales_sales_order_detail JOIN md_sales_customer_detail ON (od_sales_sales_order_detail.customer_id=md_sales_customer_detail.customer_id) left JOIN md_sales_finishedgoods_item_detail ON (md_sales_finishedgoods_item_detail.item_id = od_sales_sales_order_detail.item_id) where od_sales_sales_order_detail.salesorder_id='"+salesorder_id+"'",function(err,rows){  
  if(rows.length>0){
    return callback(rows);
  }
  else{
  return callback("reject");
    }
  });
}
