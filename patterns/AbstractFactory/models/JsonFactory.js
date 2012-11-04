/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "AbstractFactory.JsonFactory",
	__extend : "AbstractFactory.DaoFactoryImpl",
	
	createItemDao : function(){
		return this.loadModel("JsonItemDao");
	},
	createOrderDao : function(){
		var jsonOrderDao = this.loadModel("JsonOrderDao");
		jsonOrderDao.init( this.createItemDao() );
		return jsonOrderDao;
	}
});
