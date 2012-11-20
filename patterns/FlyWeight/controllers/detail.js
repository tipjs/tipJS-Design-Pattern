/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "FlyWeight.detail",
	invoke:function(itemID){
		tipJS.debug(this.name + ".invoke");

		document.getElementById("contents").innerHTML = "";
		var itemPool = this.loadModel("ItemPool", true);
		var tplOption = {
			url:"./tpl/detail.html",
			data:itemPool.getItem(itemID),
			renderTo:"contents"
		};
		this.renderTemplate(tplOption);
	}
});
