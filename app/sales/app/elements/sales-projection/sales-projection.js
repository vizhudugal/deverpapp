var customer;
var customerlocation;
var itemname;

Polymer({
is: 'sales-projection',
        created:function()
        {

        },
       customerfn:function(){
         Polymer.Base.async(function () {
           var autocompleteSuggestions = document.querySelector('#customer_autocomplete');
           autocompleteSuggestions.source = customer;
       })
     },
     locationfn:function(){
       Polymer.Base.async(function () {
         var autocompleteSuggestionsloc = document.querySelector('#location_autocomplete');
         autocompleteSuggestionsloc.source = customerlocation;
     })
   },
   itemfn:function(){
     Polymer.Base.async(function () {
       var autocompleteSuggestionsitem = document.querySelector('#item_autocomplete');
       autocompleteSuggestionsitem.source = itemname;
   })
 },
   custfn:function(){
     var obj1={};
     obj1.customername=this.customername;
     this.itemparams=obj1;
     this.$.itemid.generateRequest();
      var obj={};
      obj.customername=this.customername;
      this.locparams=obj;
      this.$.locid.generateRequest();
   },

   customerresponse:function(e){
      customer=e.detail.response.data;
   },
   itemresponse:function(e){
        itemname=e.detail.response.data;

   },
   customerlocationresponse:function(e){
         customerlocation=e.detail.response.data;
    },
    saveitemsfn1:function(e){
      var obj={};
      obj.customerid=this.selectedCustomerid.value;
      obj.itemid=this.selectedItemid.value;
      obj.description=this.idescription;
      obj.specification=this.ispecification;
      obj.orderquantity=this.orderquantity;
      obj.containerquantity=this.containerquantity;
      obj.salesorderdate=this.salesdate;
      obj.requireddeliverydate=this.reqdeldate;
      obj.salesstatus="Projection";
      this.writeparam=obj;
      this.$.insertajax.generateRequest();
    },
    containerfunction:function()
    {
        var obj={};
        obj.itemname=this.itemname;
        this.containerparameter=obj;
        this.$.containerajax.generateRequest();
    },
    quantityfunction:function()
    {
      var obj={};
      obj.itemname=this.itemname;
      this.quantityparameter=obj;
      this.$.quantityajax.generateRequest();
    },
    containerresponse:function(e)
     {

        var containervalues=e.detail.response;
        this.containeridvalue=e.detail.response[0].container_name;
     },
     quantityresponse:function(e)
     {
       var unitofmeasurevalues=e.detail.response;
       this.qtyidvalue=e.detail.response[0].unit_of_measure_name;
     },
     salesresponse:function(e){
       alert(e.detail.response.status);
     }

});
