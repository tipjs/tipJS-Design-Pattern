/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "AbstractFactory.DaoFactoryImpl",
	createItemDao:function(){
		throw 'You must implement read method';
	},
	createOrderDao:function(){
		throw 'You must implement read method';
	}
});
