(function() {
'use strict';
var item="";
var qualityid="";
var qualityname="";
var qualityname_getvalue="";
var qualityid_get ="";
var array2="";
var rangearray=[];
var valuerangeresponse2="";
var valuerangeresponse="";
var valuerangeresponsetoggle="";
var itemArrayLength;
var searchString;
var originalArray;
var dataNotFoundFlag=0;
var itemArrayLengthSales;
var searchStringSales;
var originalArraySales;
var dataNotFoundFlagSales=0;
var quality_parameter_id="";
var quality_parameter_name="";
var qualitymultiplevaluearr="";
var quality_arr=[];
var qualityitem;
var autocompqualityarr=[];
Polymer({
is: 'quality-testing',
        ready:function()
        {
          autocompqualityarr=[];
          this.newitembutton=1;
          this.idshow=1;
          this.querySelector('#customerlist').style.visibility='hidden';
        },
        qualityresponse:function(e){
          // alert("raju bhaialert"+JSON.stringify(e.detail.response))
              item=e.detail.response;
              this.originalqualityArray=item;
              this.itemqualityArray= item;
              for (var i = 0; i < item.length; i++) {
                autocompqualityarr.push({text:item[i].quality_parameter_name,value:item[i].quality_parameter_id});
              }

        },
        // Auto complete quality name display
        input_click:function()
        { //alert('clicked');
             this.querySelector('#customerlist').style.visibility='visible';
                if(this.dataNotFoundFlag==1)
                 {
                     this.dataNotFoundFlag=0;
                     this.itemArray="";
                     this.itemArray=this.originalArray;
                     this.querySelector('#customerlist').style.visibility='visible';
                 }
         },
         FnListSelect:function(e)
         {
             this.quality_parameter_name = e.target.selectedItem.textContent.trim();
             this.quality_parameter_id = e.target.selectedItem.value.trim();
             //  alert("Select....."+this.quality_parameter_name+"    "+this.quality_parameter_id);
             sessionStorage.setItem("qualityname_storage",this.quality_parameter_name);
             sessionStorage.setItem("qualityid_storage",this.quality_parameter_id);
             this.textvalue=this.quality_parameter_name;
             this.querySelector('#customerlist').style.visibility='hidden';
             document.querySelector('#customerlist').selected=-1;
    //This is to get the sales order details from the given customer
          },
         FnFilter : function(key,stringSearch,arrayValue)
         {
          //  alert("Key"+key+"    SEarch"+stringSearch+" length"+arrayValue.length);
           var arr=[];
           var flag=0;
           for(var i=0;i<arrayValue.length;i++)
           {
            //  console.log("value  "+arrayValue[i].quality_parameter_name);
               if((arrayValue[i].quality_parameter_name).toUpperCase().indexOf((stringSearch).toUpperCase())!=-1)
                //if((arrayValue[i].quality_parameter_name).startsWith(stringSearch))
               {
                 var filteredObjectArray={"quality_parameter_name":arrayValue[i].quality_parameter_name,"quality_parameter_id":arrayValue[i].quality_parameter_id}
                 arr.push(filteredObjectArray);
               }
           }
           if (arr.length==0)
           {
                 flag=1;
                 var filteredObjectArray={"quality_parameter_name":"NO DATA found!","quality_parameter_id":""}
                 arr.push(filteredObjectArray);
                 document.querySelector('quality-testing').newparameterid();
           }
           //alert(" Filtered Arry "+JSON.stringify(arr));
           arrayValue=arr;
           return {"resArray":arrayValue,"resFlag":flag};
           },
         FnSearchCustomer:function(e){
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
                       this.searchString=(this.textvalue).toUpperCase();
                       this.querySelector('#customerlist').focus();
                       break;
                     }
            case 13:{
                       this.searchString=(this.textvalue).toUpperCase();
                       break;
                     }
             case 37:{
                       this.searchString=(this.textvalue).toUpperCase();
                       this.querySelector('#customerlist').focus();
                       break;
                     }
             case 38:{
                       this.searchString=(this.textvalue).toUpperCase();
                       this.querySelector('#customerlist').focus();
                       break;
                     }
             case 39:{
                       this.searchString=(this.textvalue).toUpperCase();
                       this.querySelector('#customerlist').focus();
                       break;
                     }
             case 40:{
                       this.searchString=(this.textvalue).toUpperCase();
                       this.querySelector('#customerlist').focus();
                       break;
                     }
             default: {
                       this.searchString=this.textvalue+String.fromCharCode(e.keyCode).trim().toUpperCase();
                     }
           }
           var resultValue= this.FnFilter(keyValue,this.searchString,this.itemArray);
           this.itemArray=resultValue.resArray;
           this.dataNotFoundFlag=resultValue.resFlag;
         },
    paperitems:function()
      {
        alert("paperitems");
        alert(JSON.stringify(this.selectedqltyvalue))
        // alert("hii");
        for(var i=0;i<=item.length;i++)
        {
            if(item[i].quality_parameter_flag=="MULTIPLE" || item[i].quality_parameter_flag=="VALUE" )
            {
              var qualityid_storage = this.selectedqltyvalue.value;
              // alert(qualityid_storage);
                  var obj={
                    "quality_parameter_id":qualityid_storage
                  };
              this.qualitymultiplevalueparams=obj;
              alert(JSON.stringify(this.qualitymultiplevalueparams));
              this.$.qualitymultiplevalueid.generateRequest();
            }
            if(item[i].quality_parameter_flag=="RANGE")
            {
            var qualityid_storage = this.selectedqltyvalue.value;
              // alert(qualityid_storage);
                  var obj={
                    "quality_parameter_id":qualityid_storage
                  };
              this.qualityrangeparams=obj;
              alert(JSON.stringify(this.qualityrangeparams));
              this.$.qualityrangeid.generateRequest();
            }
        }
          this.newitembutton=0;
          },
      qualitymultiplevalueresponse:function(e)
      {
        qualitymultiplevaluearr=e.detail.response;
        alert("multiple value"+JSON.stringify(qualitymultiplevaluearr));
        for(var i=0;i<=qualitymultiplevaluearr.length;i++)
        {
            if(qualitymultiplevaluearr[i].multiple_value=="pass")
            {
              this.valuejson=qualitymultiplevaluearr;
            }
            else
            {
              // alert("choice");
              this.choicejson=qualitymultiplevaluearr;
              document.querySelector("quality-testing-choice-value").rangelist(qualitymultiplevaluearr);
            }
        }
        // this.multiplevaluejson=qualitymultiplevaluearr;
      },
      qualityrangeresponse:function(e){
        var qualityrangearr=e.detail.response;
        alert(JSON.stringify(qualityrangearr));
        this.jsondata=qualityrangearr;
        // alert("range "+JSON.stringify(qualityrangearr));
      },

      //to add new items in a list send response to common auto complete at quality testing newitem file
        newitem:function()
        {
          var qualityid_get = sessionStorage.getItem('qualityid_storage');
          var itemobj={};
          itemobj.qualityid=qualityid;
          this.itemlistparams=itemobj;
          // alert(JSON.stringify(this.itemlistparams));
          this.itemlisturl="http://localhost:4000/itemlisturlistname";
          this.$.itemlistajax.generateRequest();
      },
      itemlistresponse:function(e){
        var itemlist=e.detail.response.returnval;
        document.querySelector("quality-testing-process").itemhidden=0;
        document.querySelector("quality-testing-newitem").newitemslistfromqualitytesting(itemlist);
      },
      //back service to get itemname & itemid by qualityid
      qualityitemidback:function(array1){
         array2=array1;
        this.itemqualityservice=array2;
      },
      // ****2 for condition to get 2 different params*********
      qualityserviceback:function(valueresponse){
      var rangearray1=[];
       for(var x=0;x<valueresponse.length;x++){
         rangearray.push({"quality_parameter_type_flag":valueresponse[x].quality_parameter_type_flag,"item_id":valueresponse[x].item_id});
       }
       for(var x=0;x<rangearray.length;x++){
         rangearray1.push({"quality_parameter_type_flag":rangearray[x].quality_parameter_type_flag,"item_id":rangearray[x].item_id});
       }
       this.rangequalityservice=rangearray1;
      },
      flag0serviceback:function(valuerangeresponse){
        this.jsondata=valuerangeresponse;
      },
      flag1serviceback:function(valuerangeresponse1){
         valuerangeresponse2=valuerangeresponse1;
         var element = this.$.flagcontainer.querySelector("*");
          if (element){
          alert(element);
          element.parentNode.removeChild(element);
          var file=document.createElement("quality-rangevalue");
           this.$.flagcontainer.append(file);
          }
       var file=document.createElement("quality-rangevalue");
       this.$.flagcontainer.append(file);
       document.querySelector("quality-rangevalue").rangeflag1back(valuerangeresponse2);
      },
      flag2serviceback:function(valuerangeresponse2){
       valuerangeresponsetoggle=valuerangeresponse2;
       this.togglejsondata=valuerangeresponsetoggle;
     },
     autocompletequalityfilter:function(){
      //  alert(JSON.stringify(autocompqualityarr));
       Polymer.Base.async(function () {
        var autocompleteSuggestions = document.querySelector('#qualityautocompletesuggestions');
        autocompleteSuggestions.source = autocompqualityarr;
      });
     }
});
})();
