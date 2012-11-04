/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.define({
	noCache:false,
	name:"AbstractFactory",
	controllers:[
		"requestCSV.js",
		"requestJSON.js"
	],
	models:[
		"DaoFactoryImpl.js"
		,"JsonFactory.js"
		,"CsvFactory.js"
		,"ItemDaoImpl.js"
		,"OrderDaoImpl.js"
		,"JsonItemDao.js"
		,"JsonOrderDao.js"
		,"CsvItemDao.js"
		,"CsvOrderDao.js"
		,"Item.js"
		,"Order.js"
	]
});

