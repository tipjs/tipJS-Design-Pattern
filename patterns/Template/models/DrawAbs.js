/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Template.DrawAbs",
	drawHeader : function(){
		document.getElementById("header").innerHTML = "This is Header";
	},
	drawBody : function(){
		throw 'You must implement drawBody method';
	},
	drawFooter : function(){
		document.getElementById("footer").innerHTML = "This is Footer";
	},
	draw : function(){
		this.drawHeader();
		this.drawBody();
		this.drawFooter();
	}
});
