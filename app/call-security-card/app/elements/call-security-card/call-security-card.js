(function() {
   'use strict';
    var arr=[];
    var dombindcard_data;
   Polymer({
     is:"call-security-card",
      ready:function(){
      },
      testFn:function(){
        // this.salesorderdata=arr;
        // arr=[];
        this.salesorderdata=dombindcard_data;
      },
      // savesecurityjsonFn:function(){
      //   var data={
      //       invNum:this.invoiceNumVal,
      //       saleid:this.salesorderidVal,
      //       invDate:this.invoiceDateVal,
      //       delqunty:this.deliverquantityVal,
      //       vehouttime:this.vehicleouttimeVal
      //     };
      //   document.querySelector("call-security-card-ironajax").savesecurityFn(data);
      // },
      vehNumSearchFn:function(){
        var data={searchvehiclenum:this.selection};
        alert(this.selection);
        document.querySelector("call-security-card-ironajax").searchidFn(data);
      },
      securityresponseFn1:function(obj){
        arr.push(obj);
      },
      getvehnoFn:function(data){
        this.vehicleNumdata=data;
      },
      bindsaleoredercard:function(data){
        dombindcard_data=data;
      }
    });
})();
