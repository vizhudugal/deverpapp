(function() {
'use strict';
var dataNotFoundFlag=0;
var dataNotFoundFlagSales=0;
var item;
var searchString;
var originalArray;
var item_name;
var item_id;

 Polymer({
is: 'quality-parameter-new',
ready:function(){
  alert("hi");
},
      addnewparam:function(){
        var obj={
          "quality_parameter_name":this.qualityparamvalue
        };
        this.qualityparams=obj;
        alert(JSON.stringify(this.qualityparams));
        this.$.qualityparamid.generateRequest();
      },
      qualityparamresponse:function(e){
        var qualityparamarr=e.detail.response;
        alert(JSON.stringify(qualityparamarr));
        document.querySelector("home-page").FnSetPage("quality-testing");
      },
      itemautocomplete:function(e)
        {
          itemresponse=e.detail.response;
         //  alert(JSON.stringify(itemresponse));
          this.originalArray=itemresponse;
          this.itemArray= itemresponse;
         //  for(var i=0;i<=itemresponse.length;i++)
         //  {
         //    itemautocompletearr.push({"text":itemresponse[i].item_name,"value":itemresponse[i].item_id});
         //  }
        },
      input_item_click:function()
        { //alert('clicked');
             this.querySelector('#itemlist').style.visibility='visible';
                if(this.dataNotFoundFlag==1)
                 {
                     this.dataNotFoundFlag=0;
                     this.itemArray="";
                     this.itemArray=this.originalArray;
                     this.querySelector('#itemlist').style.visibility='visible';
                 }
         },
         FnListitemSelect:function(e)
         {
             this.item_name = e.target.selectedItem.textContent.trim();
             this.item_id = e.target.selectedItem.value.trim();
             //  alert("Select....."+this.item_name+"    "+this.item_id);
            sessionStorage.setItem("itemname_storage",this.item_name);
            sessionStorage.setItem("itemid_storage",this.item_id);
             this.itemtextvalue=this.item_name;
             this.querySelector('#itemlist').style.visibility='hidden';
             document.querySelector('#itemlist').selected=-1;
        //This is to get the sales order details from the given customer
          },
         FnitemFilter : function(key,stringSearch,arrayValue)
         {
          //  alert("Key"+key+"    SEarch"+stringSearch+" length"+arrayValue.length);
           var arr=[];
           var flag=0;
           for(var i=0;i<arrayValue.length;i++)
           {
            //  console.log("value  "+arrayValue[i].item_name);
               if((arrayValue[i].item_name).toUpperCase().indexOf((stringSearch).toUpperCase())!=-1)
                //if((arrayValue[i].item_name).startsWith(stringSearch))
               {
                 var filteredObjectArray={"item_name":arrayValue[i].item_name,"item_id":arrayValue[i].item_id}
                 arr.push(filteredObjectArray);
               }
           }
           if (arr.length==0)
           {
                 flag=1;
                 var filteredObjectArray={"item_name":"NO DATA found!","item_id":""}
                 arr.push(filteredObjectArray);
                //  document.querySelector('quality-testing').newid();
           }
           //alert(" Filtered Arry "+JSON.stringify(arr));
           arrayValue=arr;
           return {"resArray":arrayValue,"resFlag":flag};
           },
         FnSearchItem:function(e){
           var keyValue=e.keyCode;
           var searchString;
           this.itemArray=this.originalArray;
           switch(e.keyCode){
             case 8: {
                       if(this.searchString.length>0){
                         this.searchString=(((this.searchString).substring(0,(this.searchString.length-1))).trim()).toUpperCase();
                         break;
                       }
                     }
             case 9:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       this.querySelector('#itemlist').focus();
                       break;
                     }
            case 13:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       break;
                     }
             case 37:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       this.querySelector('#itemlist').focus();
                       break;
                     }
             case 38:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       this.querySelector('#itemlist').focus();
                       break;
                     }
             case 39:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       this.querySelector('#itemlist').focus();
                       break;
                     }
             case 40:{
                       this.searchString=(this.itemtextvalue).toUpperCase();
                       this.querySelector('#itemlist').focus();
                       break;
                     }
             default: {
                       this.searchString=this.itemtextvalue+String.fromCharCode(e.keyCode).trim().toUpperCase();
                     }
           }
           var resultValue= this.FnitemFilter(keyValue,this.searchString,this.itemArray);
           this.itemArray=resultValue.resArray;
           this.dataNotFoundFlag=resultValue.resFlag;
         }
});
})();
