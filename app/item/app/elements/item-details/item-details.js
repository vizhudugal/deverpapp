(function() {
  'use strict';
  var item1;
  var autoc_item_name="";
  var autoc_item_id="";
  var itemnames;
  Polymer({
    is: 'item-details',
    jsonlabel:function(itemid,itemname,itemdescription,itemspecification1,itemspecification2,itemcontainer,itemunit,itemgroup,itemtype,itemstatus,itempurchasetype){
      this.itemid=itemid;
      this.itemname=itemname;
      this.itemdescription=itemdescription;
      this.itemspecification1=itemspecification1;
      this.itemspecification2=itemspecification2;
      this.itemcontainer=itemcontainer;
      this.itemunit=itemunit;
      this.itemgroup=itemgroup;
      this.itemtype=itemtype;
      this.itemstatus=itemstatus;
      this.itempurchasetype=itempurchasetype;
    },
    locationdata:function(e){
      var itemdata=e;
      this.selectedtype=itemdata[0].itemtypeid;
      this.itemspec1=itemdata[0].itemspecification1;
      this.selectedcontainer=itemdata[0].containerid;
      this.whlocation=itemdata[0].warehouselocation;
    },
    saveitems:function(){
      var whloc=sessionStorage.getItem("whlocation");
      var obj={};
      // obj.id="";
      obj.name=this.value1;
      obj.description=this.idescription;
      obj.specification1=this.ispecification1;
      obj.specification2=this.ispecification2;
      obj.container=this.selectedcontainer;
      obj.unit=this.selectedunit;
      obj.group=this.selectedgroup;
      obj.type=this.selectedtype;
      obj.itemstatus="Created";
      obj.ptype=this.selectedptype;
      obj.warehouselocation=whloc;
      obj.standarditemtypeid="standard_item_type_id";
      obj.inspectionrequired="Yes";
      obj.createdby="createdby";
      obj.updatedby="updatedby";
      document.querySelector("item-details-ironajax").send(obj);
      document.querySelector('#disablebutton').disabled=false;
      document.querySelector('item-to-addsupplier').selectitem=this.value1;
    },
    searchdetails:function(){
      var obj={};
      obj.name=this.value1;
      document.querySelector("item-details-ironajax").sendresponse(obj);
      document.querySelector('item-to-addsupplier').selectitem=this.value1;
      document.querySelector("#savebutton").style.display="none";
    },
    searchbind:function(items,suppliers){
     this.value1=items[0].item_name;
     this.idescription=items[0].item_description;
     this.ispecification1=items[0].item_specification1;
     this.ispecification2=items[0].item_specification2;
     this.selectedcontainer=items[0].container_type_id;
     this.selectedunit=items[0].unit_of_measure_id;
     this.selectedgroup=items[0].item_group;
     this.selectedtype=items[0].item_type_id;
     this.selectedptype=items[0].item_purchase_type;
     this.suppliers=suppliers;
     document.querySelector('warehouse-details').selectedwh=items[0].warehouse_stores_id;
     document.querySelector('#disablebutton').disabled=false;
    },
    addsupplier:function(){
      document.querySelector('home-page').FnSetPage("call-add-supplier");
      document.querySelector('addsupplier-dynamic').itemid(this.iid);
    },
    supplierid:function(sid){
      this.sid=sid;
    },
    openmapping:function(){
      this.colvar="false";
      this.$.collapse.toggle();
      this.page="item-to-addsupplier";
    },
    expand:function(){
      this.page="";
      if(this.colvar=="true"){
        this.colvar="true";
      }
      else{
        this.colvar="true";
      }
    },
    ContainerData:function(y){
      this.containerNames=y;
    },
    TypeData:function(y){
      this.itemtypeNames=y;
    },
    GroupData:function(y){
      this.itemgroupNames=y;
    },
    UnitofMeasureData:function(y){
      this.itemUnit=y;
    },
    check1:function(x){
        alert("asdf"+x);
    },
    autocompleteitemResponse:function(x){
      itemnames=x;
    },
    autocompletefilter:function(){
      Polymer.Base.async(function () {
        var autocompleteSuggestions = document.querySelector('#itempaperautocompletesuggestions');
        autocompleteSuggestions.source = itemnames;
      });
    }
  });
})();
