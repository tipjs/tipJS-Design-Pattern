/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "FactoryMethod.ReaderFactory",
	getInstance:function(type){
		return this.createReader(type);
	},
	createReader:function(type){
		if (type === "csv") {
			return this.loadModel("readerCSV");
		} else if (type === "json") {
			return this.loadModel("readerJSON");
		}
	}
});
