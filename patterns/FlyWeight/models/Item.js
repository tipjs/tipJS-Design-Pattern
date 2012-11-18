/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "FlyWeight.Item",

	code : null,
	name : null,
	price : null,

	init : function(code, name, price){
		this.code = code;
		this.name = name;
		this.price = price;
	}
});
