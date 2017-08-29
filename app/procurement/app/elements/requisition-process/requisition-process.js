var iid;
var itemtypeid;
var warehouseid;
var item1;
var autoc_item_name="";
var autoc_item_id="";
var requisitionitemnames;
Polymer({
  is: "requisition-process",
  searchWHLocation:function(){
    document.querySelector("requisition-process-ironajax").searchlocation(this.itemname);
  },
  requisitionlabel:function(requisitionlabel){
    this.typelabel=requisitionlabel[0].itemtype;
    this.namelabel=requisitionlabel[0].itemname;
    this.spec1label=requisitionlabel[0].itemspecification1;
    this.whloclabel=requisitionlabel[0].warehouselocation;
    this.containerlabel=requisitionlabel[0].itemcontainer;
    this.itemquantitylabel=requisitionlabel[0].itemquantity;
  },
  saverequisition:function(){
    // document.querySelector('check-autogenid').call();
    var json={};
    json.iid=this.selecteditemid.value;
    json.selectedtype=itemtypeid;
    json.itemspec1=this.itemspec1;
    json.whlocation=warehouseid;
    json.selectedcontainer=this.selectedcontainer;
    json.itemquantity=this.itemquantity;
    json.requireddate=this.min;
    json.createdby="createdby";
    json.updatedby="updatedby";
    document.querySelector('requisition-process-ironajax').savedata(json);
  },
  searchitem:function(){
    document.querySelector('requisition-process-ironajax').searchitem(this.selecteditemid.value);
  },
  itemdata:function(e){
    iid=e[0].item_id;
    itemtypeid=e[0].item_type_id;
    this.selectedtype=e[0].item_type_name;
    this.itemspec1=e[0].item_specification1;
    this.whlocation=e[0].warehouse_stores_name;
    this.selectedcontainer=e[0].container_name;
    this.unitofmeasure=e[0].unit_of_measure_name;
    warehouseid=e[0].warehouse_stores_id;
  },
  handlerequisitionactiveitems:function(x){
    requisitionitemnames=x;
  },
  autocompleterequisitionfilter:function(){
    Polymer.Base.async(function () {
      var autocompleteSuggestions = document.querySelector('#activeitempaperautocompletesuggestions');
      autocompleteSuggestions.source = requisitionitemnames;
    });
  }
});
