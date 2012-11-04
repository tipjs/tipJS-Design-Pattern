/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Facade.Order",
	
	_orderItems : [],
	addItem : function (orderItemVO) {
		this._orderItems.push( orderItemVO );
	},
	getOrderItems : function (){
		return this._orderItems;
	}
});
