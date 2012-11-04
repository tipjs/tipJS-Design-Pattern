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
	name:"FactoryMethod",
	controllers:[
		"requestCSV.js",
		"requestJSON.js"
	],
	models:[
		"ReaderFactory.js"
		,"ReaderImpl.js"
		,"readerCSV.js"
		,"readerJSON.js"
	]
});

