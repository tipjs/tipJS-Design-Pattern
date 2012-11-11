/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Builder.NewsDirector",

	_builder : null,
	_url : null,
	init : function(builder, url) {
		this._builder = builder;
		this._url = url;
	},
	getNews : function() {
		var newsList = this._builder.parse(this._url);
		return newsList;
	}
});
