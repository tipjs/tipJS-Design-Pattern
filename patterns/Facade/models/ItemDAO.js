/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name : "Facade.ItemDAO",
	getItemById : function( itemId ){
		for (var i=0; i<this._database.length; i++) {
			if (itemId == this._database[i].id) {
				var itemVO = this.loadModel("itemVO");
				itemVO.init(
					this._database[i].id,
					this._database[i].name,
					this._database[i].price
				);
				return itemVO;
			}
		}
		return null;
	},
	getStockById: function( itemId ){
		for (var i=0; i<this._database.length; i++) {
			if (itemId == this._database[i].id) {
				return this._database[i].stock
			}
		}
	},
	updateStock : function(orderItemVO){
		var itemId = orderItemVO.itemVO.id,
			amount = orderItemVO.amount;
		
		for (var i=0; i<this._database.length; i++) {
			if (itemId == this._database[i].id) {
				this._database[i].stock -= amount;
			}
		}
	},
	_database : [
		{id:"00001", name:"item01", price:1000, stock:10},
		{id:"00002", name:"item02", price:2000, stock:10},
		{id:"00003", name:"item03", price:3000, stock:10},
		{id:"00004", name:"item04", price:4000, stock:10},
		{id:"00005", name:"item05", price:5000, stock:10}
	]
});
