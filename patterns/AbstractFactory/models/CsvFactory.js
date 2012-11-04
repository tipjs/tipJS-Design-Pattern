/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "AbstractFactory.CsvFactory",
	__extend : "AbstractFactory.DaoFactoryImpl",
	
	createItemDao : function(){
		return this.loadModel("CsvItemDao");
	},
	createOrderDao : function(){
		return this.loadModel("CsvOrderDao");
	}
});
