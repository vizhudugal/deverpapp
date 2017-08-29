
var customerautocomplete;
var customerlocation;
var itemname;

Polymer({
is: 'sales-order',
        ready:function()
        {
          this.dropdowndivision=1;
          this.copySalesOrderdivision=1;
        },

       customerfn:function(){
         Polymer.Base.async(function () {
           var autocompleteSuggestions = document.querySelector('#customer_autocomplete');
           autocompleteSuggestions.source = customerautocomplete;

       })
       this.fetchBillAddress();
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
      customerautocomplete=e.detail.response.data;
      alert("on-response"+JSON.stringify(e.detail.response.data));

   },
   itemresponse:function(e){
        itemname=e.detail.response.data;

   },
    customerlocationresponse:function(e){
         customerlocation=e.detail.response.data;
    },
    saveitemsfn1:function(e){

      var obj={};
      obj.customername=this.customername;
      obj.itemname=this.itemname;
      obj.description=this.idescription;
      obj.specification=this.ispecification;
      obj.orderquantity=this.orderquantity;
      obj.containerquantity=this.containerquantity;
      obj.deliveredquantity=this.dqty;
      obj.salesorderdate=this.salesdate;
      obj.requireddeliverydate=this.reqdeldate;
      obj.status="Orderplaced";
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
     salesresponse:function(){
     },
     fetchBillAddress:function(){
       var element = this.$.customerbilladdressdisplaydivision.querySelector("*");
       if (element){
         element.parentNode.removeChild(element);
       }
       var file=document.createElement("get-customer-bill-address");
       this.$.customerbilladdressdisplaydivision.append(file);
       document.querySelector('get-customer-bill-address').getcustomernameBill(this.customername);

       var element1 = this.$.customershipaddressdisplaydivision.querySelector("*");
       if (element1){
         element1.parentNode.removeChild(element1);
       }
       var file1=document.createElement("get-customer-ship-address");
       this.$.customershipaddressdisplaydivision.append(file1);
       document.querySelector('get-customer-ship-address').getcustomernameShip(this.customername);
       this.copySalesOrderdivision=0;
     },
     copySalesOrder:function(){
       if(this.checkvalue==1){
         var jsonbject={};
         jsonbject.customername=this.customername;
         this.copycustomername=jsonbject;
         this.$.fetchsalesid.generateRequest();
         this.dropdowndivision=0;
       }
       else {
         this.dropdowndivision=1;
       }
     },
     handleSalesidResponse:function(x){
       console.log("aa"+JSON.stringify(x.detail.response.data));
       this.salesidvalues=x.detail.response.data;
     },
     getsalesorderdetails:function(){
       var jsonbject={};
       jsonbject.salesid=this.selectedsalesid;
       this.salesid=jsonbject;
       this.$.fetchsalesdetails.generateRequest();
     },
     handleSalesDetailsResponse:function(x){
       var salesorderdata=x.detail.response.data;
       console.log(JSON.stringify(salesorderdata,null,1));
       this.itemname=salesorderdata[0].item_name;
       this.orderquantity=salesorderdata[0].order_quantity;
       this.customerlocation=salesorderdata[0].city;
       this.idescription=salesorderdata[0].item_description;
       this.ispecification=salesorderdata[0].item_specification;
       this.containerquantity=salesorderdata[0].container_quantity;
       this.reqdeldate=salesorderdata[0].required_delivery_date;
       document.querySelector('get-customer-bill-address').billdropdownvalue=salesorderdata[0].bill_street_name+","+salesorderdata[0].bill_city_name+","+salesorderdata[0].bill_state_name+","+salesorderdata[0].bill_country_name+","+salesorderdata[0].bill_pincode;
       document.querySelector('get-customer-bill-address').selectedbillid=salesorderdata[0].billing_id;
       document.querySelector('get-customer-ship-address').shipdropdownvalue=salesorderdata[0].ship_street_name+","+salesorderdata[0].ship_city_name+","+salesorderdata[0].ship_state_name+","+salesorderdata[0].ship_country_name+","+salesorderdata[0].ship_pincode;
       console.log("get-customer-ship-address"+salesorderdata[0].ship_street_name+","+salesorderdata[0].ship_city_name+","+salesorderdata[0].ship_state_name+","+salesorderdata[0].ship_country_name+","+salesorderdata[0].ship_pincode);
      //  alert(document.querySelector('get-customer-ship-address').shipdropdownvalue);
       document.querySelector('get-customer-ship-address').selectedshipid=salesorderdata[0].shipping_id;
     }

});
