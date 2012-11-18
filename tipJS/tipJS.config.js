/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.20
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */
// configuring tipJS
tipJS.config({
	noCache:true,
	noCacheVersion:"1.01",
	noCacheAuto:true,
	noCacheParam:"tipJS",
	charSet:"utf-8",
	developmentHostList:[
		'localhost'
		,'127.0.0.1'
		,'tipjs.com'
	],
	applicationPath:{
		Template : '/tipJS-designPattern/patterns/Template'
		,Singleton : '/tipJS-designPattern/patterns/Singleton'
		,Adapter : '/tipJS-designPattern/patterns/Adapter'
		,FactoryMethod : '/tipJS-designPattern/patterns/FactoryMethod'
		,Facade : '/tipJS-designPattern/patterns/Facade'
		,Builder : '/tipJS-designPattern/patterns/Builder'
		,FlyWeight : '/tipJS-designPattern/patterns/FlyWeight'
	}
});

