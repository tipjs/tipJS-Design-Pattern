/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Adapter.Adapter",
	__extend : [
		"Adapter.requestAImpl",
		"Adapter.requestBImpl",
		"Adapter.requestCImpl"
	],
	requestA : function(){
		return this.loadModel("Adaptee").getResponse();
	},
	requestB : function(){
		return this.loadModel("Adaptee").getResponse();
	},
	requestC : function(){
		return this.loadModel("Adaptee").getResponse();
	}
});
