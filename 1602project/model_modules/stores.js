define('stores', ['cstore', 'csession', 'inherit'], function(cStore, cSession, Inherit){
	"use strict";	
	var s = {};
	//全局localStorage
	s.GlobalStore = Inherit.Class(function(){
		this.handler = "GLOBAL";
	}, cStore);

	//临时全局session
	s.TemGlobalStore = Inherit.Class(function(){
		this.handler = "TEMPGLOBAL";
	}, cSession);

	//临时session
	s.TempViewStore = Inherit.Class(function(){
		this.handler = "TEMPVIEW";
	}, cSession);
	
	return s;
});