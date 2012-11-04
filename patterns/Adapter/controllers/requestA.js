/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "Adapter.requestA",
	invoke:function(params){
		tipJS.debug(this.name + ".invoke");
		
		var adapter = this.loadModel("Adapter");
		document.getElementById("contentsA").innerHTML = adapter.requestA();
	}
});
