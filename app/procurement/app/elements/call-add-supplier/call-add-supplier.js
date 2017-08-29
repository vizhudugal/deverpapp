var auto_sup_arr=[];
Polymer({
  is:"call-add-supplier",
  ready:function(){
    this.colvar="true";
  },
  sup_name_auto_comp_fn:function(){
    Polymer.Base.async(function () {
    var autocompleteSuggestions = document.querySelector('#sup_auto_sugg_id');
    autocompleteSuggestions.source =auto_sup_arr;
  });
  },
  clickFN:function(){
    if(this.colvar=="false"){
    this.$.suppliercollapse.toggle();
      }
  else{
    this.colvar="true";
      }
  },
  additemFn:function(){
    this.colvar="false";
    this.$.suppliercollapse.toggle();
    // this.page="supplier-to-additem";
    this.page="item-to-addsupplier";
    document.querySelector("item-to-addsupplier").check();
    document.querySelector("call-add-supplier").passsupplieridFn(this.suid);
  },
  passsupplieridFn:function(data){
    // document.querySelector("supplier-to-additem").getsupplieridFn(this.suid);
  },
  getironpageFn:function(data){
    this.page="item-display";
    document.querySelector("item-display").getdataFn(data);
  },
  // savebuttonFn:function(){
  //   document.querySelector("autogen-id").send("sup");
  // },
  submitFn:function(data){
    document.querySelector('#additemid').disabled=false;
    var postvalue ={
                    "snameval":this.value1,
                    "adval1"  :this.Add1val,
                    "adval2"  :this.Add2val,
                    "adval3"  :this.Add3val,
                    "countryVal":this.selection,
                    "stateVal":this.selectionstate,
                    "citynameval"  :this.Citynameval,
                    "pinval"  :this.Pinval,
                    "mobnumval1"  :this.MobNumberval1,
                    "mobnumval2"  :this.MobNumberval2,
                    "emidval"  :this.EmIDval,
                    "statusval":"created",
                    "created_by":"created_by",
                    "updated_by":"updated_by",
                  };
                  this.suid=this.SupIdval;
          document.querySelector("call-add-supplier-ironajax").to_ironajax(postvalue);
          },
  supplierFun:function(){
    this.$.cardact.toggle();
    },

  labelFn:function(d1){
    this.inputfield=d1;
    },

  getJsondata:function(sid,sname,Ad_1,Ad_2,Ad_3,country,ste,city,pin,mob1,mob2,email,status){
    this.Supid=sid;
    this.SupName=sname;
    this.Add1=Ad_1;
    this.Add2=Ad_2;
    this.Add3=Ad_3;
    this.countryname=country;
    this.State=ste;
    this.Cityname=city;
    this.Pin=pin;
    this.MobNumber1=mob1;
    this.MobNumber2=mob2;
    this.EmID=email;
    this.statuslabel=status;
  },
  datafetchFn:function(data){
    // this.SupIdval=data[0].supplier_id;
    this.value1=data[0].supplier_name;
    this.Add1val=data[0].address_1;
    this.Add2val=data[0].address_2;
    this.Add3val=data[0].address_3;
    this.selection=data[0].country;
    this.selectionstate=data[0].state;
    this.Citynameval=data[0].city;
    this.Pinval=data[0].pincode;
    this.MobNumberval1=data[0].mobile_1;
    this.MobNumberval2=data[0].mobile_2;
    this.EmIDval=data[0].email;
    this.staval=data[0].status;
    this.suid=this.SupIdval;

  },
  getcountryjsondata:function(retrvjsondata){
    this.countryitems=retrvjsondata;
  },
  selectCountryFn:function(){
    document.querySelector("call-add-supplier-ironajax").countryjsoninfo(this.selection);
  },
  getstatejsondata:function(getData){
    this.stateitems=getData;
  },
  searchitemdet:function(){
    if(this.value1!=""){
    document.querySelector("#anchorID").style.display="none";
     document.querySelector('#additemid').disabled=false;
    var obj={supname:this.selectedvalue};
    document.querySelector("call-add-supplier-ironajax").searchsidFN(obj);
  }
  else {
    alert("please enter supplier name");
  }
},
 autocompletearr:function(e)
  {
    // alert(JSON.stringify(e.detail.response.returnval));
    var sup_auto_Data=e.detail.response.returnval;
    for (var i = 0; i < sup_auto_Data.length; i++) {
      auto_sup_arr.push({text:sup_auto_Data[i].supplier_name,value:sup_auto_Data[i].supplier_id});
    }
  },
});
