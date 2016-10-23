define('cstore', [], function(){
	"use strict";
	function cStore(){}
	cStore.prototype.set = function(_key, _value){
		var handler = (this.handler || ''),
			store = localStorage.getItem(handler);
		if(!store){
			store = {};
		}
		else{
			store = JSON.parse(store);
		}
		store[_key] = _value;
		store = JSON.stringify(store);
		localStorage.setItem(handler, store);
	};

	cStore.prototype.get = function(_key){
		var handler = (this.handler || ''),
			val = '',
			store = localStorage.getItem(handler);
		if(store){
			store = JSON.parse(store);
			val = store[_key];
		}
		return val;
	};

	cStore.prototype.remove = function(_key){
		var handler = (this.handler || ''),
			store = localStorage.getItem(handler);
		if(store){
			store = JSON.parse(store);
			delete(store[_key]);
			store = JSON.stringify(store);
			localStorage.setItem(handler, store);
		}
	};

	cStore.prototype.clear = function(){
		var handler = (this.handler || '');
		localStorage.clear(handler);
	};

	cStore.prototype.init = function(_obj){
		var handler = (this.handler || ''),
			store = localStorage.getItem(handler);
		store = _obj;
		store = JSON.stringify(store);
		localStorage.setItem(handler, store);
	};
	return cStore;
});