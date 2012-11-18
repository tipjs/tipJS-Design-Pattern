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
	invoke:function(params){
		tipJS.debug(this.name + ".invoke");

		var url = this.getUrl();
		
		var rssBuilder = this.loadModel("RssBuilder");
		var newsDirector = this.loadModel("NewsDirector");
		newsDirector.init(rssBuilder, url);
		
		var newsList = newsDirector.getNews();
		this.draw( newsList );
	},
	draw : function( newsList ) {
		document.getElementById("contents").innerHTML = "";
		
		var displayType = this.getDisplayType();
		this.renderTemplate({
			url : "./tpl/" + displayType + ".html",
			data : newsList,
			renderTo : "contents"
		});
	},
	getUrl:function(){
		var urls = document.getElementsByName("url");
		for (var i=0; i<urls.length; i++) {
			if (urls[i].checked) {
				return urls[i].value;
			}
		}
	},
	getDisplayType:function(){
		var types = document.getElementsByName("type");
		for (var i=0; i<types.length; i++) {
			if (types[i].checked) {
				return types[i].value;
			}
		}
	}
});
