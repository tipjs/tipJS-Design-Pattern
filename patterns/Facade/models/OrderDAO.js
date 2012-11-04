/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Facade.OrderDAO",
	
	createOrder: function( order ){
		tipJS.log("regist order list");
		tipJS.echo(order);
		var orderItems = order.getOrderItems();
		for (var i=0; i< orderItems.length; i++) {
			tipJS.log("regist order #" + (i+1));
			var orderItemVO = orderItems[i];
			tipJS.log("item id    : " + orderItemVO.itemVO.id);
			tipJS.log("item name  : " + orderItemVO.itemVO.name);
			tipJS.log("item price : " + orderItemVO.itemVO.price);
			tipJS.log("item amount : " + orderItemVO.amount);
			tipJS.log("item total price : " + (orderItemVO.itemVO.price * orderItemVO.amount));
		}
	}
	
});
