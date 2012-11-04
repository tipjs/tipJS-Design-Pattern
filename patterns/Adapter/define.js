/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.define({
	noCache:false,
	name:"Adapter",
	controllers:[
		"requestA.js",
		"requestB.js",
		"requestC.js"
	],
	models:[
		"Adaptee.js"
		,"Adapter.js"
		,"requestAImpl.js"
		,"requestBImpl.js"
		,"requestCImpl.js"
	]
});

