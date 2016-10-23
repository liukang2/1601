define('csession', [], function(){
	"use strict";
	function cSession(){}
	cSession.prototype.set = function(_key, _value){
		var handler = (this.handler || ''),
			session = sessionStorage.getItem(handler);
		if(!session){
			session = {};
		}
		else{
			session = JSON.parse(session);
		}
		session[_key] = _value;
		session = JSON.stringify(session);
		sessionStorage.setItem(handler, session);
	};

	cSession.prototype.get = function(_key){
		var handler = (this.handler || ''),
			val = '',
			session = sessionStorage.getItem(handler);
		if(session){
			session = JSON.parse(session);
			val = session[_key];
		}
		return val;
	};

	cSession.prototype.remove = function(_key){
		var handler = (this.handler || ''),
			session = sessionStorage.getItem(handler);
		if(session){
			session = JSON.parse(session);
			delete(session[_key]);
			session = JSON.stringify(session);
			sessionStorage.setItem(handler, session);
		}
	};

	cSession.prototype.clear = function(){
		var handler = (this.handler || '');
		sessionStorage.clear(handler);
	};
	return cSession;
});