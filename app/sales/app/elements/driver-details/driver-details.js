 (function() {
    'use strict';
  Polymer({
      is: 'driver-details',
	     ready:function(){
		     },
		   getJsondata:function(goods_vehicle_drivername,goods_vehicle_driverphonenumber,goods_vehicle_driverphonenumber2,goods_vehicle_ownername,goods_vehicle_ownerphonenumber)
		     {
    			  this.vehicledrivername=goods_vehicle_drivername;
    				this.vehicledriverphonenumber1=goods_vehicle_driverphonenumber;
    				this.vehicledriverphonenumber2=goods_vehicle_driverphonenumber2;
    				this.vehicleownername=goods_vehicle_ownername;
    			  this.vehicleownerphonenumber=goods_vehicle_ownerphonenumber;
   		   }
     });
  })();
