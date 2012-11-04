/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "FactoryMethod.readerJSON",
	__extend : "FactoryMethod.ReaderImpl",
	read : function(){
		for (var i=0; i<this.data.length; i++) {
			tipJS.log(this.data[i].key + ", " +this.data[i].value);
		}
	},
	data : [
		{key:"foo",value:"123"},
		{key:"bar",value:"546"}
	]
});
