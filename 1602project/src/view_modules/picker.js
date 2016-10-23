define('picker',[],function(){
    'use strict';
    var F7 = new Framework7(),
        _id;
    function picker(para){
        this.obj = para.obj;
        this.column = para.column;
        this.data = para.data;
        this.initValue = para.initValue;
        this.openFunc = para.openFunc;
        this.closeFunc = para.closeFunc;
        this.buttonCloseText = '完成';
        this._split = para._split;   //分割符号
    }
    picker.prototype.threeDimension = function() {
        var data = this.data;
        return {
            province: function (pName) {
                var provinceNames = [],
                    provinceIds = [];
                for (var i = 0; i < data.length; i++) {
                    provinceNames.push(data[i].name);
                    provinceIds.push(data[i].id);

                    if (data[i].name == pName) {
                        _id = data[i].id;
                    }
                }
                return {
                    names: provinceNames,
                    ids: provinceIds,
                    id: _id
                }
            },
            city: function (provinceName, cityName) {
                var cityNames = [],
                    cityIds = [];

                for (var i = 0; i < data.length; i++) {
                    var aCity = data[i].child; // 获取对应省份下的市列表
                    var pName = data[i].name;  // 获取省份名称

                    if (pName == provinceName) {
                        for (var n = 0; n < aCity.length; n++) {
                            cityNames.push(aCity[n].name);
                            cityIds.push(aCity[n].id);

                            if (aCity[n].name == cityName) {
                                _id = aCity[n].id;
                            }
                        }
                    }
                }
                return {
                    names: cityNames,
                    ids: cityIds,
                    id: _id
                }
            },
            county: function (provinceName, cityName, countyName) {
                var countyNames = [],
                    countyIds = [];

                for (var i = 0; i < data.length; i++) {
                    var aCity = data[i].child; // 获取对应省份下的市列表
                    var pName = data[i].name;  // 获取省份名

                    if (pName == provinceName) {
                        for (var n = 0; n < aCity.length; n++) {
                            var aCounty = aCity[n].child; // 获取对应城市下的县列表
                            var cName = aCity[n].name; //获取城市名

                            if (cName == cityName) {
                                for (var m = 0; m < aCounty.length; m++) {
                                    countyNames.push(aCounty[m].name);
                                    countyIds.push(aCounty[m].id);

                                    if (aCounty[m].name == countyName) {
                                        _id = aCounty[m].id;
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    names: countyNames,
                    ids: countyIds,
                    id: _id
                }
            }
        }
    };
    picker.prototype.twoDimension = function(){
        var that = this;
        var keys = [],
            values = [];
        if(that.column == 2 || that.column == 22){
            for(var x in that.data){
                keys.push(x);
                values.push(that.data[x]);
            }
        }
        return {
            key: keys,
            value: values
        }
    };
    picker.prototype.init = function(){
        var that = this;
        var initValue = that.initValue.split(that._split);

        //开启选择器回调方法
        function _open(picker){
            picker.setValue(initValue);

            if(that.openFunc){
                that.openFunc(picker);
            }
        }
        //关闭选择器回调方法
        function _close(picker){
            initValue = picker.displayValue;

            if(that.closeFunc){
                that.closeFunc(picker);
            }
        }

        //单列选择器
        if(that.column == 1){
            that.picker = F7.picker({
                input: '#' + that.obj,
                rotateEffect: true,
                toolbarCloseText: this.buttonCloseText,
                cols: [
                    {
                        textAlign: 'center',
                        values: that.data
                    }
                ],
                onOpen: function(picker){
                    _open(picker);
                },
                onClose: function(picker){
                    _close(picker);
                }
            });
        }

        //双列选择器
        if(that.column == 2){
            that.picker = F7.picker({
                input: '#' + that.obj,
                toolbarCloseText: this.buttonCloseText,
                rotateEffect: true,
                formatValue: function (picker, values) {
                    return values[0] + '-' + values[1];
                },
                cols: [
                    {
                        textAlign: 'center',
                        width: '50%',
                        values: that.twoDimension().key,
                        onChange: function (picker, country) {
                            if(picker.cols[1].replaceValues){
                                picker.cols[1].replaceValues(that.data[country]);
                            }
                        }
                    },
                    {
                        textAlign: 'center',
                        width: '50%',
                        values: that.twoDimension().value[0]
                    }
                ],
                onOpen: function(picker){
                    _open(picker);
                },
                onClose: function(picker){
                    _close(picker);
                }
            });
        }

        //多列选择器
        if(that.column == 3){
            that.picker = F7.picker({
                input: '#' + that.obj,
                toolbarCloseText: this.buttonCloseText,
                rotateEffect: true,
                formatValue: function (picker, values) {
                    if(values[2]){
                        return values[0] + '-' + values[1] + '-' + values[2];
                    }
                    else{
                        return values[0] + '-' + values[1];
                    }
                },
                cols: [
                    {
                        values: that.threeDimension().province().names,
                        width: '33%',
                        textAlign: 'center',
                        onChange: function (picker, displayValue) {
                            if(picker.cols[1].replaceValues){
                                //省id
                                var pId = that.threeDimension().province(displayValue).id;

                                var cityName = that.threeDimension().city(displayValue).names;
                                var countyName = that.threeDimension().county(displayValue, cityName[0]).names;

                                picker.cols[1].replaceValues(cityName);

                                if(countyName.length != 0){
                                    picker.cols[2].replaceValues(countyName);
                                }
                                else{
                                    picker.cols[2].replaceValues(['']);
                                }
                            }
                        }
                    },
                    {
                        values: that.threeDimension().city(initValue[0]).names,
                        width: '34%',
                        textAlign: 'center',
                        onChange: function(picker, displayValue){
                            if(picker.value && picker.cols[2].replaceValues){
                                var provinceName = picker.value[0];
                                var countyName = that.threeDimension().county(provinceName, displayValue).names;
                                if(countyName.length != 0){
                                    picker.cols[2].replaceValues(countyName);
                                }
                                else{
                                    picker.cols[2].replaceValues(['']);
                                }
                            }

                        }
                    },
                    {
                        values: that.threeDimension().county(initValue[0], initValue[1]).names,
                        width: '33%',
                        textAlign: 'center'
                    }
                ],
                onOpen: function(picker){
                    _open(picker);
                },
                onClose: function(picker){
                    _close(picker);
                }
            });
        }

        //以下非联动选择器
        if(that.column == 22){
            that.picker = F7.picker({
                input: '#' + that.obj,
                toolbarCloseText: this.buttonCloseText,
                rotateEffect: true,
                formatValue: function (picker, values) {
                    return values[0] + '/' + values[1];
                },
                cols: [
                    {
                        textAlign: 'center',
                        width: '50%',
                        values: that.twoDimension().value[0]
                    },
                    {
                        textAlign: 'center',
                        width: '50%',
                        values: that.twoDimension().value[1]
                    }
                ],
                onOpen: function(picker){
                    _open(picker);
                },
                onClose: function(picker){
                    _close(picker);
                }
            });
        }
    };

    return picker;
})