(function() {
  'use strict';
  var togglevalue="";
  Polymer({
  is: 'quality-testing-toggle-value',
    ready:function(){
      // alert("toggle");
      this.saveactive=true;
      this.deleteitem=true;
    },
    deleteall:function(){
      // alert("hi");
      var qualityid_get = sessionStorage.getItem('qualityid_storage');
      var obj={};
      obj.itemid=this.itemid;
      obj.qualityid_get=qualityid_get;
      this.deleteparams=obj;
      // alert(JSON.stringify(this.deleteparams));
      this.deleteurl="http://localhost:4000/deletetoggledetail";
      this.$.deleteallid.generateRequest();
    },
//     deleteresponse:function(e){
//       var deletearr=e.detail.response.returnval;
//       alert(JSON.stringify(deletearr));
//       document.querySelector("quality-testing-toggle-value").deleteremove();
//
//     },
//     deleteremove:function(){
//       var element = this.$.wholecard.querySelector("*");
//       if (element) {
//           element.parentNode.removeChild(element);
//       }
//     },
    updateicon:function(){
      this.deleteitem=false;
      this.saveactive=false;
    },
  saveall:function()
  {
   this.togglevalue=this.togglevalueactive;
   if(this.togglevalueactive==true)
   {
     this.togglevalueactive="pass";
     togglevalue=this.togglevalueactive;
     var qualityid_storage = sessionStorage.getItem('qualityid_storage');
       var obj={
         "quality_strat_id":"3",
         "multiple_value":togglevalue,
         "quality_parameter_id":qualityid_storage,
         "status":"active"
               };
        this.updateparams=obj;
       alert(JSON.stringify(this.updateparams));
       this.$.updateid.generateRequest();
   }else
   {
     this.togglevalueactive="fail";
     togglevalue=this.togglevalueactive;
     var qualityid_storage = sessionStorage.getItem('qualityid_storage');
     var obj={
       "quality_strat_id":"3",
       "multiple_value":togglevalue,
       "quality_parameter_id":qualityid_storage,
       "status":"active"
             };
      this.updateparams=obj;
     alert(JSON.stringify(this.updateparams));
     this.$.updateid.generateRequest();
   }
 },
 updatecomplete:function(e){
  var updatecomplete=e.detail.response;
  alert(JSON.stringify(updatecomplete));
  this.saveactive=true;
  this.deleteitem=true;
}


});
})();
