var data=[];
var salesid;
var itemid;
Polymer({
  is:"sales-vehicle-process",
      ready:function(){
       alert("salveh");
      },
      getsalesorderFn1:function(salarr){
          salesid=salarr.sal;
          itemid=salarr.item;
      },
      getsalesorderFn:function(veharr){
         data.push({veh:veharr.veh,quan:veharr.quan,sal:salesid,item:itemid});
      },
      saveselectFn:function(){  
       document.querySelector("sales-vehicle-ironajax").getsavebtnFn(data);

      }
  });
