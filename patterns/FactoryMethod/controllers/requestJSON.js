/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "FactoryMethod.requestJSON",
	invoke:function(params){
		tipJS.debug(this.name + ".invoke");
		
		var readerFactory = this.loadModel("ReaderFactory");
		var reader = readerFactory.getInstance("json");
		reader.read();
	}
});
