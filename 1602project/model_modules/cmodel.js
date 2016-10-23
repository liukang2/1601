define('cmodel', [], function(){
	"use strict";
	function cModel(){}
	cModel.prototype.execute = function(_succHandler, _errHandler){
		var t = this,
            _async = true;
        if(this.async == false){
            _async = false;
        }
		$.ajax({
            async: _async,
			url: this.url || "",
			type: this.method,
			data: this.param,
			dataType: this.dataType,
			contentType: this.contentType,
			cache : this.cache,
			processData: this.processData,
			success: function(_data){
				if(t.dataType == "string"){
					_data = JSON.parse(_data);
				}
				_succHandler(_data);
			},
			error: function(_xhr, _type){
				console.log(_type)
				if(_errHandler){
					_errHandler(_type);
				}
			}
		});
	};
	return cModel;
});