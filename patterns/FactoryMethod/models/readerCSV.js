/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "FactoryMethod.readerCSV",
	__extend : "FactoryMethod.ReaderImpl",
	read : function(){
		for (var i=0; i<this.data.length; i++) {
			tipJS.log(this.data[i]);
		}
	},
	data : [
		"foo, 123",
		"bar, 456"
	]
});
