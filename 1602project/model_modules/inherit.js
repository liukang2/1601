define('inherit', [], function(){
	var inh = {};
	inh.Class = function(_sub, _sup){
		_sub.prototype = new _sup();
		_sub.prototype.constructor = _sub;
		return _sub;
	};

	return inh;
});