/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "FlyWeight.ItemPool",

	_pool : null,
	init : function() {
		this._pool = {};
		var item01 = this.loadModel("Item");
		item01.init("A0001", "MacBook Air 2012", 1000);
		this._pool["A0001"] = item01;
		
		var item02 = this.loadModel("Item");
		item02.init("A0002", "MacBook Pro 2012", 2000);
		this._pool["A0002"] = item02;
		
		var item03 = this.loadModel("Item");
		item03.init("A0003", "MacBook Pro Retina 2012", 3000);
		this._pool["A0003"] = this.loadModel("Item");
	},
	getItem : function(code) {
		return this._pool[code];
	}
});
