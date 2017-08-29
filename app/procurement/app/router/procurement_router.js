module.exports = function(app){
// supplier----------********
    var create_supplier_contr=require('../supplier/controller/create_supplier_contr.js')
      app.route('/savesupplierdata')
        .post(create_supplier_contr.create_supplier_contr_fn)
    var fetch_supplier_contr=require('../supplier/controller/fetch_supplier_contr.js')
      app.route('/fetchsupplierid')
        .get(fetch_supplier_contr.fetch_supplier_contr_fn)
    var autocomplete_sup_name_contr=require('../supplier/controller/autocomplete_sup_name_contr.js')
      app.route('/autocompletesupplier_name')
        .get(autocomplete_sup_name_contr.autocomplete_sup_name_contr_fn)
    var fetch_sup_item_map_contr=require('../supplier/controller/fetch_sup_item_map_contr.js')
      app.route('/fetch_sup_item_map')
        .get(fetch_sup_item_map_contr.fetch_sup_item_map_contr_fn)
    var save_sup_item_map_contr=require('../supplier/controller/save_sup_item_map_contr.js')
      app.route('/save_sup_item_map')
        .post(save_sup_item_map_contr.save_sup_item_map_contr_fn)
    var create_supplier_account_contr=require('../supplier/controller/create_supplier_account_contr.js')
      app.route('/savesupplieraccountdata')
        .post(create_supplier_account_contr.create_supplier_account_contr_fn)
    var fetch_supplier_account_contr=require('../supplier/controller/fetch_supplier_account_contr.js')
      app.route('/fetchsupplieraccountdata')
        .get(fetch_supplier_account_contr.fetch_supplier_account_contr_fn)
    var create_supplier_tax_contr=require('../supplier/controller/create_supplier_tax_contr.js')
      app.route('/savesuppliertaxdata')
        .post(create_supplier_tax_contr.create_supplier_tax_contr_fn)
    var fetch_supplier_tax_contr=require('../supplier/controller/fetch_supplier_tax_contr.js')
      app.route('/fetchsuppliertaxdata')
        .get(fetch_supplier_tax_contr.fetch_supplier_tax_contr_fn)
    var supplier_fetchall_contr=require('../supplier/controller/supplier_fetchall_contr.js')
        app.route('/fetchallsupplierdata')
          .get(supplier_fetchall_contr.supplier_fetchall_contr_fn)

// purchas_request-----------------******

    var create_p_r_contr=require('../purchase_request/controller/create_p_r_contr.js')
      app.route('/save_p_r_data')
        .post(create_p_r_contr.create_p_r_contr_fn)

    var fetch_p_r_contr=require('../purchase_request/controller/fetch_p_r_contr.js')
      app.route('/fetch_p_r_data')
        .get(fetch_p_r_contr.fetch_p_r_contr_fn)

    var fetch_p_r_itemname_contr=require('../purchase_request/controller/fetch_p_r_itemname_contr.js')
      app.route('/fetch_p_r_itemname_data')
        .get(fetch_p_r_itemname_contr.fetch_p_r_itemname_contr_fn)

    var p_r_act_inact_update_contr=require('../purchase_request/controller/p_r_act_inact_update_contr.js')
      app.route('/p_r_act_inact_update')
        .post(p_r_act_inact_update_contr.p_r_act_inact_update_contr_fn)

    var fetch_p_r_active_state_contr=require('../purchase_request/controller/fetch_p_r_active_state_contr.js')
      app.route('/fetch_p_r_active_state_data')
        .get(fetch_p_r_active_state_contr.fetch_p_r_active_state_contr_fn)
// purchase order__________********
    var fetch_p_o_contr=require('../purchase_order/controller/fetch_p_o_contr.js')
      app.route('/fetch_p_o_data')
        .get(fetch_p_o_contr.fetch_p_o_contr_fn)
    var save_p_o_contr=require('../purchase_order/controller/save_p_o_contr.js')
      app.route('/save_p_o_pdf_data')
        .post(save_p_o_contr.save_p_o_contr_fn);
    var send_mail_p_o_contr=require('../purchase_order/controller/send_mail_p_o_contr.js')
      app.route('/send_mail_p_o_data')
        .post(send_mail_p_o_contr.send_mail_p_o_contr_fn)
    var fetch_p_r_itemname_contr=require('../purchase_request/controller/fetch_p_r_itemname_contr.js')
      app.route('/fetch_p_r_itemname_data')
        .get(fetch_p_r_itemname_contr.fetch_p_r_itemname_contr_fn)
    var fetch_p_o_contr=require('../purchase_order/controller/fetch_p_o_contr.js')
      app.route('/fetch_p_o_data')
        .get(fetch_p_o_contr.fetch_p_o_contr_fn)
    var fetch_item_p_o_no_contr=require('../purchase_order/controller/fetch_item_p_o_no_contr.js')
      app.route('/fetch_item_p_o_no')
        .get(fetch_item_p_o_no_contr.fetch_item_p_o_no_contr_fn)
    var save_p_o_contr=require('../purchase_order/controller/save_p_o_contr.js')
      app.route('/save_p_o_data')
                .post(save_p_o_contr.save_p_o_contr_fn)
    var pricing_strategy_contr=require('../purchase_order/controller/pricing_strategy_contr.js')
      app.route('/pricing_strategy')
        .get(pricing_strategy_contr.pricing_strategy_contr_fn)

    var fetch_p_r_itemname_contr=require('../purchase_request/controller/fetch_p_r_itemname_contr.js')
      app.route('/fetch_p_r_itemname_data')
        .get(fetch_p_r_itemname_contr.fetch_p_r_itemname_contr_fn)
    var fetch_p_o_contr=require('../purchase_order/controller/fetch_p_o_contr.js')
      app.route('/fetch_p_o_data')
        .get(fetch_p_o_contr.fetch_p_o_contr_fn)
    var save_p_o_contr=require('../purchase_order/controller/save_p_o_contr.js')
      app.route('/save_p_o_data')
        .post(save_p_o_contr.save_p_o_contr_fn)

  var fetch_requisition_active_items_contr = require('../requisition/controller/fetch_requisition_active_items_contr.js');
  app.route('/searchitemnames')
  .get(fetch_requisition_active_items_contr.fetch_active_item)

  var create_item_requisition_contr = require('../requisition/controller/create_item_requisition_contr.js');
  app.route('/requisitionsave')
  .post(create_item_requisition_contr.create_item_requisition)

  var fetch_created_pg_fg_requisition_approval_contr = require('../requisition/controller/fetch_created_pg_fg_requisition_approval_contr.js');
  app.route('/requisitionapproval')
  .get(fetch_created_pg_fg_requisition_approval_contr.fetch_created_requisition)

  var requisition_approval_response_contr = require('../requisition/controller/requisition_approval_response_contr.js');
  app.route('/requisitionresponse')
  .post(requisition_approval_response_contr.requisition_response)

  var inventory_supplied_item_reduction_contr = require('../requisition/controller/inventory_supplied_item_reduction_contr.js');
  app.route('/inventoryItemReduction')
  .post(inventory_supplied_item_reduction_contr.inventory_item_reduction)

  var fetch_requisition_selected_items_contr = require('../requisition/controller/fetch_requisition_selected_items_contr.js');
  var fetch_requisition_selected_items_contr = require('../requisition/controller/fetch_requisition_selected_items_contr.js');
  app.route('/searchrequisitionitem')
  .post(fetch_requisition_selected_items_contr.fetch_selected_item)

  var update_requisition_supplied_status_contr = require('../requisition/controller/update_requisition_supplied_status_contr.js');
  app.route('/updateRequisitionSupplyStatus')
  .post(update_requisition_supplied_status_contr.update_requisition_status)
}
