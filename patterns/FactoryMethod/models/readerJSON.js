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
			document.getElementById("contents").innerHTML += this.data[i].key;
			document.getElementById("contents").innerHTML += ", ";
			document.getElementById("contents").innerHTML += this.data[i].value;
			document.getElementById("contents").innerHTML += "<br/>";
		}
	},
	data : [
		{key:"foo",value:"123"},
		{key:"bar",value:"546"}
	]
});
