/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "Facade.order1",
	invoke:function(params){
		tipJS.debug(this.name + ".invoke");
		
		var order = this.loadModel("Order");
		var itemDao = this.loadModel("ItemDAO", true);
		
		var orderItemVO = this.loadModel("orderItemVO");
		orderItemVO.init(itemDao.getItemById("00001"), 1);
		order.addItem( orderItemVO );
		
		orderItemVO = this.loadModel("orderItemVO");
		orderItemVO.init(itemDao.getItemById("00002"), 2);
		order.addItem( orderItemVO );
		
		orderItemVO = this.loadModel("orderItemVO");
		orderItemVO.init(itemDao.getItemById("00003"), 1);
		order.addItem( orderItemVO );
		
		this.loadModel("OrderManager").order(order);
	}
});
