var item1;
var supplier_name="";
var supplier_id="";
var tablename;
var customerid;
var copyBillAddress;

Polymer({
  is:"call-add-customer",
  ready:function(){

    this.searchaddresshide=1;
    this.colvar=true;
  },

  customerfn:function(){

 Polymer.Base.async(function () {
    var autocompleteSuggestions = document.querySelector('#customer_autocomplete');
    autocompleteSuggestions.source = item1;

})
},

  clickFN:function(){
    if(this.colvar=="false"){
    this.$.suppliercollapse.toggle();
  }
  else{
  this.colvar="true";
  }
  },
  searchitemdet:function(){
    if(this.value1!=""){
    document.querySelector("#anchorID").style.display="none";
     document.querySelector('#additemid').disabled=false;
    var obj={supname:this.value1};
    document.querySelector("call-add-customer-ironajax").searchsidFN(obj);
  }
  else {

    this.$.billShipButtonid.disabled=true;
    alert("please enter valid customer_name");
  }
  },
  additemFn:function(){
    this.colvar="false";
    this.$.suppliercollapse.toggle();
    this.page="customer-to-additem";
    document.querySelector("customer-to-additem").check();
    document.querySelector("customer-to-additem").getsupId=this.cuid;
  },
  savebuttonFn:function(){

    document.querySelector('#additemid').disabled=false;
    var country=sessionStorage.getItem('countrycode');
    var state=sessionStorage.getItem('statecode');
    var city=sessionStorage.getItem('city');
    var pincode=sessionStorage.getItem('pincode');
    var street=sessionStorage.getItem('street');

    var postvalue ={
                    "sidval":data,
                    "snameval":this.customername,
                    "adval1"  :this.Add1val,
                    "adval2"  :this.Add2val,
                    "adval3"  :this.Add3val,
                    "buildingno":this.buildingnoval,
                    "buildingname":this.buildingnameval,
                    "district":this.districtval,
                    "countryVal":country,
                    "stateVal":state,
                    "streetname":street,
                    "citynameval"  :city,
                    "pinval"  :pincode,
                    "mobnumval1"  :this.MobNumberval1,
                    "mobnumval2"  :this.MobNumberval2,
                    "emidval"  :this.EmIDval,
                    "statusval":"Created"
                  };
                  this.cuid=this.value1;
          document.querySelector("call-add-customer-ironajax").to_ironajax(postvalue);

  },
  submitFn:function(data){

          },
          datafetchFn:function(data){

            customerid=data[0].customer_id;
            this.value1=data[0].customer_id;
            this.value1=data[0].customer_name;
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
            this.cuid=this.value1;
          },
          getironpageFn:function(data){
            this.page="item-display";
            document.querySelector("item-display").getdataFn(data);
          },
  supplierFun:function(){
    this.$.cardact.toggle();
    },

  labelFn:function(d1){
    this.inputfield=d1;
    },
  getJsondata:function(sid,sname,Ad_1,Ad_2,Ad_3,buildingno,buildingname,district,country,ste,city,pin,mob1,mob2,email,status){
    this.Supid=sid;
    this.SupName=sname;
    this.Add1=Ad_1;
    this.Add2=Ad_2;
    this.Add3=Ad_3;
    this.buildingno=buildingno;
    this.buildingname=buildingname;
    this.districtlabel=district;
    this.countryname=country;
    this.State=ste;
    this.Cityname=city;
    this.Pin=pin;
    this.MobNumber1=mob1;
    this.MobNumber2=mob2;
    this.EmID=email;
    this.statuslabel=status;
  },
  getcountryjsondata:function(retrvjsondata){
    this.countryitems=retrvjsondata;
  },
  selectCountryFn:function(){
    document.querySelector("call-add-customer-ironajax").countryjsoninfo(this.selection);
  },
  getstatejsondata:function(getData){
    this.stateitems=getData;
  },

     autocompletearr:function(e)
    {
      item1=e.detail.response.data;
      document.querySelector('billing-address').autocompleteValueBind(e.detail.response.data);
      document.querySelector('shipping-address').autocompleteValueBind(e.detail.response.data);
    },
    check:function(data){
      tablename=data;
    },
    addBillShipAddress:function(){
      this.page="billing";
      document.querySelector('#billcustomername').value=this.customername;
    },
    saveBillShipAddress:function(){
      // document.querySelector('check-autogenid').call();
      var billjsonobj={};
      var shipjsonobj={};
      var billemail=document.querySelector('#billemail').value;
      var billcountry=document.querySelector('#billaddressid').ccode;
      var billstate=document.querySelector('#billaddressid').scode;
      var billcity=document.querySelector('#billaddressid').cityname;
      var billstreet=document.querySelector('#billaddressid').streetname;
      var billpincodeno=document.querySelector('#billaddressid').pincode;
      var billmobile=document.querySelector('#billmobile').value;
      var billautocustomerid=document.querySelector('billing-address').selectedCustomerID.value;
      var shipautocustomerid=document.querySelector('shipping-address').selectedCustomerID.value;
      // billjsonobj.billid="bill"+id;
      billjsonobj.billcustomerid=billautocustomerid;
      billjsonobj.billemail=billemail;
      billjsonobj.billcountry=billcountry;
      billjsonobj.billstate=billstate;
      billjsonobj.billcity=billcity;
      billjsonobj.billstreet=billstreet;
      billjsonobj.billpincodeno=billpincodeno;
      billjsonobj.billmobile=billmobile;
      billjsonobj.createdby="Createdby";
      billjsonobj.updatedby="Updatedby";
      if(this.checkvalue==true){
        copyBillAddress=1;
        shipjsonobj={shipid:billjsonobj.billcustomerid,
                     shipemail:billjsonobj.billemail,
                     shipcountry:billjsonobj.billcountry,
                     shipstate:billjsonobj.billstate,
                     shipcity:billjsonobj.billcity,
                     shipstreet:billjsonobj.billstreet,
                     shippincodeno:billjsonobj.billpincodeno,
                     shipmobile:billjsonobj.billmobile,
                     "copyBillAddress":copyBillAddress,
                     "createdby":"Createdby",
                     "updatedby":"Updatedby"};
      }
      else{
        copyBillAddress=0;

        var shipemail=document.querySelector('#shipemail').value;
        var shipcountry=document.querySelector('#shipaddressid').ccode;
        var shipstate=document.querySelector('#shipaddressid').scode;
        var shipcity=document.querySelector('#shipaddressid').cityname;
        var shipstreet=document.querySelector('#shipaddressid').streetname;
        var shippincodeno=document.querySelector('#shipaddressid').pincode;
        var shipmobile=document.querySelector('#shipmobile').value;

        shipjsonobj.shipid=shipautocustomerid;
        shipjsonobj.shipemail=shipemail;
        shipjsonobj.shipcountry=shipcountry;
        shipjsonobj.shipstate=shipstate;
        shipjsonobj.shipcity=shipcity;
        shipjsonobj.shipstreet=shipstreet;
        shipjsonobj.shippincodeno=shippincodeno;
        shipjsonobj.shipmobile=shipmobile;
        shipjsonobj.copyBillAddress=copyBillAddress;
        shipjsonobj.createdby="Createdby";
        shipjsonobj.updatedby="Updatedby";
      }
      document.querySelector('call-add-customer-ironajax').bindBilldata(billjsonobj);
      document.querySelector('call-add-customer-ironajax').bindShipdata(shipjsonobj);
    },
    save:function(id){

    },
    newBillShipAddress:function(){
      document.querySelector('#billemail').value="";
      document.querySelector('#billaddressid').countryvalue="";
      document.querySelector('#billaddressid').statevalue="";
      document.querySelector('#billaddressid').cityname="";
      document.querySelector('#billaddressid').streetname="";
      document.querySelector('#billaddressid').pincode="";
      document.querySelector('#billmobile').value="";

      document.querySelector('#shipcustomername').value="";
      document.querySelector('#shipemail').value="";
      document.querySelector('#shipaddressid').countryvalue="";
      document.querySelector('#shipaddressid').statevalue="";
      document.querySelector('#shipaddressid').cityname="";
      document.querySelector('#shipaddressid').streetname="";
      document.querySelector('#shipaddressid').pincode="";
      document.querySelector('#shipmobile').value="";
    },
    fadeShip:function(){
      if(this.checkvalue==true){

        $('#shiptag').fadeOut();

      }
      else{

        $('#shiptag').fadeIn();

      }
    },
    billShipButton:function(x){
      if(x.length>0){
        document.querySelector('#billShipButtonid').disabled=false;
      }
      if(x=="please enter valid customername") {
        document.querySelector('#billShipButtonid').disabled=true;
      }
      if(x=="Saved!") {
        document.querySelector('#billShipButtonid').disabled=false;
      }
    },
    searchcustomerbill:function(){
      var jsonobject={};
      jsonobject.searchcustomername=this.searchcustomername;
      document.querySelector('call-add-customer-ironajax').searchdatabind(jsonobject);
    },
    allbillingaddress:function(x){
      this.searchaddresshide=0;
      this.customerallbilladdress=x;
    },
    searchcustomership:function(){
      var jsonobject={};
      jsonobject.searchshipcustomername=this.searchshipcustomername;
      document.querySelector('call-add-customer-ironajax').searchshipdata(jsonobject);
    },
    allshippingingaddress:function(x){
      this.searchaddresshide=0;
      this.customerallshipaddress=x;
    }
  
});
