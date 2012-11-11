/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Builder.RssBuilder",
	__extend : "Builder.NewsBuilderImpl",

	getData : function( url ) {
		return this[url];
	},
	parse : function( url ){
		// ... url부터 RSS 가져오는 처리 생략 ...
		var rssData = this.getData(url);
		var newsList = [];
		for (var i=0; i<rssData.items.length; i++) {
			var item = rssData.items[i];
			var news = this.loadModel("News");
			news.init(item.title, item.link, item.description);
			newsList.push( news );
		}
		return newsList;
	},
	"http://site-a.com/rss" : {
		items : [
			{
				title : "site-A News Title 01",
				link : "http://site-a.com/01",
				description : "tipJS News description 01"
			},
			{
				title : "site-A News Title 02",
				link : "http://site-a.com/02",
				description : "tipJS News description 02"
			},
			{
				title : "site-A News Title 03",
				link : "http://site-a.com/03",
				description : "tipJS News description 03"
			}
		]
	},
	"http://tipjs.com/feed" : {
		items : [
			{
				title : "tipJS News Title 01",
				link : "http://tipjs.com/01",
				description : "tipJS News description 01"
			},
			{
				title : "tipJS News Title 02",
				link : "http://tipjs.com/02",
				description : "tipJS News description 02"
			},
			{
				title : "tipJS News Title 03",
				link : "http://tipjs.com/03",
				description : "tipJS News description 03"
			}
		]
	}
});
