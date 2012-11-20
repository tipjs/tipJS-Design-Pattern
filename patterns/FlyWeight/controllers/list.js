/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "FlyWeight.list",
	invoke:function(params){
		tipJS.debug(this.name + ".invoke");
		
		document.getElementById("contents").innerHTML = "";
		var itemPool = this.loadModel("ItemPool", true);
		var tplOption = {
			url:"./tpl/list.html",
			data : itemPool.getItemList(),
			renderTo:"contents"
		};
		this.renderTemplate(tplOption);
	}
});
