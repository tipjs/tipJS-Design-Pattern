/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Facade.OrderManager",
	
	order : function ( order ) {
		var itemDao = this.loadModel("ItemDAO", true);
		var orderItems = order.getOrderItems();
		for (var i=0; i<orderItems.length; i++) {
			var orderItemVO = orderItems[i];
			var itemVO = orderItemVO.itemVO;
			var amount = orderItemVO.amount;
			var stock = itemDao.getStockById(itemVO.id);
			if (amount > stock) {
				alert("not enough stock : "+itemVO.name);
				return;
			}
		}
		for (var i=0; i<orderItems.length; i++) {
			var orderItemVO = orderItems[i];
			var itemVO = orderItemVO.itemVO;
			var amount = orderItemVO.amount;
			
			itemDao.updateStock(orderItemVO);
		}
		this.loadModel("OrderDAO").createOrder( order );
	}
});
