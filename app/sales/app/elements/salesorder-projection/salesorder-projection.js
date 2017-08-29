(function() {
  'use strict';
    var item;
    var item1;
    var item2;
    var item5;
    var item_id;
    var customer_id="";
    var customer_name="";
    var customer_location="";
    var supplier_name="";
    var supplier_id="";
    var status="Projection";
    var status1="Orderplaced";
    var autogenid;
    var pro="";
    var salesid="";
    var check;
  Polymer({
    is: 'salesorder-projection',
        ready:function(){
        },
        projectionback:function(arr){
          pro=arr;
          alert(JSON.stringify(pro));
          document.querySelector('salesorder-projection').value=pro[0].customer_name;
          document.querySelector('salesorder-projection').value1=pro[0].item_name;
          document.querySelector('salesorder-projection').value5=pro[0].city;
          document.querySelector('salesorder-projection').rtons=pro[0].order_quantity;
          document.querySelector('salesorder-projection').rcoils=pro[0].container_quantity;
          document.querySelector('salesorder-projection').min1=pro[0].required_delivery_date;
        },
        checkid:function(e){
          check=e;
        },
        autocompletearr:function(e)
          {
            item=e.detail.response.data;
          },
          functionitem:function(){
            var obj={};
            obj.customer_id=customer_id;
            this.writeparam=obj;
            this.urlname="http://localhost:4000/item";
            this.$.writeajax.generateRequest();
          },
          functionlocation:function(){
            var obj={};
            obj.customer_id=customer_id;
            this.locationparam=obj;
            this.urlname1="http://localhost:4000/customer_location";
            this.$.locationajax.generateRequest();
          },
          autocompletearr1:function(e)
              {
                 item1=e.detail.response.data;
              },
              autocompletearr2:function(e)
                  {
                     item2=e.detail.response.data;

                  },
                  autocompletearr5:function(e)
                      {
                         item5=e.detail.response.data;

                      },
        jsoninfoResponse:function(){
            var labeljsondata=this.jsondata;
            document.querySelector("sales-projection").getJsondata(labeljsondata[0].salesorderid,labeljsondata[0].customername,labeljsondata[0].itemid,labeljsondata[0].itemname,labeljsondata[0].itemdescription,labeljsondata[0].itemspecification,labeljsondata[0].container,labeljsondata[0].quantity,labeljsondata[0].delivered_quantity,labeljsondata[0].status);
          },

          confirm:function () {
            salesid=sessionStorage.getItem('salesorderid');
            var obj={};

            obj.salesid=salesid;
            obj.customerid=this.customer_id;
            obj.itemid=this.itemid;
            obj.description=this.idescription;
            obj.specification=this.ispecification;
            obj.salesorderdate=this.salesdate;
            obj.requireddeliverydate=this.reqdeldate;
            obj.salesstatus="Orderplaced";
            this.updateparam=obj;
            this.$.updateajax.generateRequest();
              console.log(JSON.stringify(this.updateparam,null,1));
            document.querySelector("home-page").FnSetPage("salesprojection-summary");
          },


        salesResponse:function(e){
            // alert(e.detail.response.data);
        },
        salesResponse1:function(e){
            // alert(e.detail.response.status);
        },
        getJsondata:function(salesid,customername,itemid,itemname,itemdescription,itemspecification,container,quantity,dquantity,status){
            this.salesorderid=salesid;
            this.customername=customername;
            this.ItemId=itemid;
            this.Itemname=itemname;
            this.itemdescription=itemdescription;
            this.itemspecification=itemspecification;
            this.container=container;
            this.quantity=quantity;
            this.dquantity=dquantity;
            this.status=status;
      }

  });
})();
