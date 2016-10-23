define('app', ['stores','models', 'headerTpl'], function(Stores, Models, HeaderTpl){
    'use strict';
    var webapp = Backbone.WEBAPP;
    var myApp = {
        maskLayer: null,
        loading: null,
        toast: null,
        popBox: null,
        popBoxSingle: null,
        vStore: new Stores.TempViewStore(),
        tStore: new Stores.TemGlobalStore(),
        gStore: new Stores.GlobalStore(),
        //页头模板
        header: function(_obj){
            var hView,
                param = {
                    'title': '',
                    'btnText': '',
                    'btnClass': '',
                    "backHandler": ''
                },
                obj = $.extend(param, _obj || {});
            var headerView = Backbone.View.extend({
                initialize: function(){

                },
                el: "header",
                template: _.template(HeaderTpl),
                events: {},
                render: function(){
                    var that = this,
                        sHTML = that.template({title: obj.title, btnClass: obj.btnClass, btnText: obj.btnText});
                    that.$el.html(sHTML);
                    that.eventsHandler();
                },
                eventsHandler: function(){
                    var that = this;
                    that.$el.find('.back').on('click', function(){
                        if(param.backHandler){
                            param.backHandler();
                        }
                        else{
                            history.back();
                        }
                    });
                }
            });

            if(webapp.hView){
                webapp.hView.$el.html('');
                webapp.hView = null;
            }
            hView = new headerView();
            hView.render();
            webapp.hView = hView;
            return hView;
        },
        //更新页头文本
        updateHeaderText: function(_str){
            $("header").find("h2").html(_str);
        },
        //站内不刷新跳转
        jump: function(_str, _params){
            if(_params && typeof _params == 'object'){
                Backbone.trigger('routerchange', _params);
            }
            Backbone.WEBAPP.router.navigate(_str, {trigger: true});
        },
        //站内刷新跳转
        jumpRef: function(_str){
            var str = "/" + _str;
            if(_str == ""){
                str = "";
            }
            var url = 'http://'+location.host + str;
            location.href= url;
        },
        //站外跳转
        jumpTo: function(_url){
            window.location.href = _url;
        },
        //验证访问令牌
        checkAccessToken: function(_aToken){
            var checkAccessTokenModel = new Models.checkAccessTokenModel(_aToken),
                result = false;
            checkAccessTokenModel.async = false;
            checkAccessTokenModel.execute(function(response){
                if(response.status == "1" && response.data.checkResult == "1"){
                    var data = {
                        phone: response.data.phone,
                        page: response.data.page,
                        amount: response.data.amount,
                        backUrl: response.data.backUrl,
                        backGoodsUrl: response.data.backGoodsUrl,
                        merchantsNo: response.data.merchantsNo,
                        orderInfo: {
                            yhOrderNo: response.data.yhOrderNo,
                            periods: response.data.periods,
                            interest: response.data.interest,
                            monthlyFee: response.data.monthlyFee,
                            firstRefundDate: response.data.firstRefundDate
                        }
                    }
                    myApp.gStore.set('_ListingData', data);
                    result = true;
                }
                else{
                    result = false;
                }
            });
            return result;
        },
        //获取第三方传递的清单数据
        getListingData: function(){
            var data = myApp.gStore.get("_ListingData");
            if(data){
                return data;
            }
            else{
                return {};
            }
        },
        //是否登录
        isLoginTest: function(){
            var _code = myApp.getAuth();
            if(_code){
                return true;
            }
            else{
                return false;
            }
        },
        //接口请求失败
        queryError: function(response){
            if(response.error == "40000000"){
                myApp.makePopBox({
                    "num": 1,
                    "title": "登录超时，请重新登录！",
                    "tAlign": "center",
                    "certainText": "确定",
                    "close": false,
                    "certain": function(){
                        myApp.removeAuth();
                        myApp.jump("Login");
                        return false;
                    }
                });
                myApp.popBoxSingle.show();
                myApp.loading.hide();
            }
            else{
                myApp.toast.show(response.msg, true);
            }
        },
        //存储用户信息
        setAuth: function(_code, _phone){
            myApp.gStore.set("_code", _code);
            myApp.gStore.set("_phone", _phone);
            myApp.isLogin = true;
        },
        //获取用户信息
        getAuth: function(){
            return myApp.gStore.get("_code");
        },
        //获取用户Phone
        getPhone: function(){
            return myApp.gStore.get("_phone");
        },
        //删除用户信息
        removeAuth: function(){
            myApp.gStore.remove("_code");
            myApp.gStore.remove("_ListingData");
            myApp.gStore.remove("_status");
            myApp.isLogin = false;
        },
        //验证手机号
        checkTelPhone: function(_phone){
            if(/^1[3|4|5|7|8]\d{9}$/.test(_phone)){
                return true;
            }
            else{
                return false;
            }
        },
        //验证固定电话格式
        checkMobPhone: function(_phone){
            if(/^((\d{3,4}\-)|)((\d{7,8}\-)|)((\d{1,8})|)$/.test(_phone)){
                return true;
            }
            else{
                return false;
            }
        },
        //验证密码，6-10位数字与字母组合密码
        checkPassword: function(_pwd){
            if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(_pwd)){
                return true;
            }
            else{
                return false;
            }
        },
        //设置cookie
        setCookie: function(_name,_value,_expiredays) {
            var exdate=new Date(),
                hostname = location.hostname;
            exdate.setDate(exdate.getTime()+_expiredays);
            document.cookie=_name+ "=" +escape(_value)+((_expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/;domain="+hostname;
        },
        //获取cookie
        getCookie: function(_name){
            var name = _name + "=",
                ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    return unescape(c.substring(name.length, c.length));
                }
            }
            return "";
        },
        //清除cookie
        clearCookie: function(_name) {
            myApp.setCookie(_name, "", -1);
        },
        //是否为微信环境
        isWeChat: function (){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
                return true;
            }
            else{
                return false;
            }
        },
        //获取ID
        getID: function() {
            var _id = /[A-Za-z0-9+=]+$/.exec(location.pathname)
            if(_id){
                return _id[0];
            }
            else{
                return '';
            }
        },
        //获取联动选择ID
        setPickerId: function(aName, bName, cName, obj, data){
            //获取第一级选项id
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == aName) {
                    obj.attr('data-fid', data[i].id);
                    break;
                }
            }
            //获取第二级选项id
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == aName) {
                    var bNames = data[i].child;
                    for (var n = 0; n < bNames.length; n++) {
                        if (bNames[n].name == bName) {
                            obj.attr('data-sid', bNames[n].id);
                            break;
                        }
                    }
                }
            }
            //获取第三级选项id
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == aName) {
                    var bNames = data[i].child;
                    for (var n = 0; n < bNames.length; n++) {
                        if (bNames[n].name == bName) {
                            var cNames = bNames[n].child;
                            for (var m = 0; m < cNames.length; m++) {
                                if (cNames[m].name == cName) {
                                    obj.attr('data-tid', cNames[m].id);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },
        //获取链接中指定的key值
        getQueryParameter: function(_key) {
            _key = _key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
            var match = location.search.match(new RegExp("[?&]" + _key + "=([^&]+)(&|$)"));
            return match && decodeURIComponent(match[1].replace(/\+/g, " "));
        },
        //身份证位数验证
        checkIdCard: function(idCard){
            var flag = false,
                reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(reg.test(idCard)){
                flag = true;
            }
            else{
                flag = false;
            }
            return flag;
        },
        //手机号中间四位转*
        getPhoneStar: function(_phone){
            return _phone.substr(0, 3) + '****' + _phone.substr(7);
        },
        //验证结果提示
        makeToast: function(_obj){
            var obj = {
                    "time": 3000,
                    "title": ""
                },
                timer =0,
                ToastView = null;
            obj = $.extend(obj, _obj || {});
            ToastView = Backbone.View.extend({
                initialize: function(){},
                el: "#toastLayer",
                events: {},
                render: function(){
                    var that = this,
                        sHTML = that.makeTemplate();
                    $("body").append(sHTML);
                    that.$el = $("#toastLayer");
                    that.eventsHandler();
                },
                makeTemplate: function(){
                    var sHtml = '<div id="toastLayer" class="pop-toast">'+obj.title+'</div>';
                    return sHtml;
                },
                eventsHandler: function(){
                    var that = this;
                    that.$el.on('click', function(){
                        that.hide();
                    });
                },
                show: function(_str, _err){
                    var that = this;
                    if(_str){
                        that.$el.html(_str);
                    }
                    if(_err){
                        if(!that.$el.hasClass("toast-error")){
                            that.$el.addClass("toast-error");
                        }
                    }
                    else{
                        if(that.$el.hasClass("toast-error")){
                            that.$el.removeClass("toast-error");
                        }
                    }
                    if(that.$el.css("display") == "none"){
                        that.$el.show();
                        that.$el.removeClass("ani-fade-oup").addClass("ani-fade-idn");
                        if(obj.time > 0){
                            timer = setTimeout(function(){
                                clearTimeout(timer);
                                that.$el.hide();
                            }, obj.time);
                        }
                    }
                },
                hide: function(){
                    var that = this;
                    if(obj.time > 0){
                        clearTimeout(timer);
                    }
                    that.$el.removeClass("ani-fade-idn").addClass("ani-fade-oup");
                    timer = setTimeout(function(){
                        clearTimeout(timer);
                        that.$el.hide();
                    }, 600);
                }
            });
            if(myApp.toast){
                return false;
            }
            myApp.toast = new ToastView();
            myApp.toast.render();
        },
        //面板提示
        makePopBox: function(_obj){
            var obj = {
                    "num": 2,
                    "title": "",
                    "tAlign": "left",
                    "cancelText": "取消",
                    "certainText": "确定",
                    "close": false,
                    "cancel": function(){},
                    "certain": function(){}
                },
                PopBoxView = null,
                _el='';
            obj = $.extend(obj, _obj || {});

            if(obj.num == 2){
                _el = "#popBox";
            }
            else{
                _el = "#popBoxSingle";
            }
            PopBoxView = Backbone.View.extend({
                initialize: function(){},
                el: _el,
                events: {},
                render: function(){
                    var that = this,
                        sHTML = that.makeTemplate();
                    $("body").append(sHTML);
                    if(obj.num == 2){
                        that.$el = $("#popBox");
                    }
                    else{
                        that.$el = $("#popBoxSingle");
                    }
                    that.eventsHandler();
                },
                makeTemplate: function(){
                    var sHtml = '',
                        closeHtml = '',
                        _str = '';
                    if(obj.close){
                        closeHtml = '<i id="close" class="icon-close"></i>';
                        _str = 'has';
                    }
                    switch(obj.num){
                        case 2:
                            sHtml = '<div class="pop-box-layer pop-box" id="popBox" style="display: none;">' +
                                        '<div class="container">' +
                                            '<div class="content" style="text-align: '+ obj.tAlign +'">'+obj.title+'</div>' +
                                            '<div class="button">' +
                                                '<span id="cancel">'+obj.cancelText+'</span>' +
                                                '<span id="certain">'+obj.certainText+'</span>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';
                            break;
                        case 1:
                            sHtml = '<div class="pop-box-layer pop-box-single '+ _str +'" id="popBoxSingle" style="display: none;">' +
                                        '<div class="container">' +
                                            '<div class="content" style="text-align: '+ obj.tAlign +'">'+obj.title+'</div>' +
                                            '<div class="button">' +
                                                '<span id="certain">'+obj.certainText+'</span>' +
                                            '</div>' +
                                            closeHtml +
                                        '</div>' +
                                    '</div>';
                            break;
                    }
                    return sHtml;
                },
                eventsHandler:function(){
                    var that = this;
                    that.$el.find("#cancel").on('click', function(e){
                        e.stopPropagation();
                        that.hide();
                        obj.cancel();
                    });
                    that.$el.find("#certain").on('click', function(e){
                        e.stopPropagation();
                        that.hide();
                        obj.certain();
                    });
                    that.$el.find("#close").on('click', function(e){
                        e.stopPropagation();
                        that.hide();
                    });
                },
                show: function(_tip){
                    var that = this;
                    if(_tip){
                        that.$el.find(".content").html(_tip);
                    }
                    myApp.maskLayer.show();
                    that.$el.show();
                    that.$el.removeClass("ani-popbox-out").addClass("ani-popbox-in");
                },
                hide: function(){
                    var that = this;
                    that.$el.removeClass("ani-popbox-in").addClass("ani-popbox-out");
                    var timer = setTimeout(function(){
                        clearTimeout(timer);
                        myApp.maskLayer.hide();
                        that.$el.hide();
                    }, 200);
                }
            });
            if(obj.num == 2){
                if(myApp.popBox){
                    myApp.popBox.remove();
                    myApp.popBox = null;
                }
                myApp.popBox = new PopBoxView();
                myApp.popBox.render();
            }
            else{
                if(myApp.popBoxSingle){
                    myApp.popBoxSingle.remove();
                    myApp.popBoxSingle = null;
                }
                myApp.popBoxSingle = new PopBoxView();
                myApp.popBoxSingle.render();
            }
        },
        //引用第三方插件（调取相册或相机）
        addCameraJS: function(items){
            var oBody = document.getElementsByTagName('body')[0];
            var _script = null;
            for(var i=0;i<items.length;i++){
                _script = document.createElement('script');
                _script.src = Models.resourceUrl + '/js/camera/' + items[i] + '.js';
                oBody.appendChild(_script);
            }
        },
        //获取pathname中/后参数
        locaHandler: function(){
            var pn = '';
            pn = location.pathname.replace(/\//,'');
            return pn;
        },
        getUrlPara: function(){
            var locationSearch = location.search;
            var oRequest = {};
            if (locationSearch.indexOf("?") != -1) {
                var str = locationSearch.substr(1);
                var strings = str.split("&");
                for(var i=0;i<strings.length;i++){
                    oRequest[strings[i].split("=")[0]] = unescape(strings[i].split("=")[1]);
                }
            }
            return oRequest;
        },
        //RSA加密
        RSAPublicKey: function(){
            var key;
            key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCF4W4XVNEIBB7rEdntI5xHd2kZX/KGLo5mLRt4XVMfSo/GNCHAapvoqP6jfrZsiSc0iCcQy3Qd/NnJEoy2nAsDNUoeuuDkvCM6g5kfKR5gb0TbI4AWRRV/gNmnivAtzTC4F1D2lf6q3s0gmRcOBzj91S06CYlEbhjByt7Y4IPHDwIDAQAB";
            return key;
        }
    };
    //显示（隐藏）加载遮罩层
    myApp.mask = {
        show: function(){
            myApp.loading.show();
            myApp.maskLayer.show();
        },
        hide: function(){
            myApp.loading.hide();
            myApp.maskLayer.hide();
        }
    }
    myApp.isLogin = myApp.isLoginTest();
    //遮罩图层
    myApp.maskLayer = $("#maskLayer");
    //加载中
    myApp.loading = $("#loadingLayer");
    myApp.compute = $("#computeLayer");
    myApp.makeToast({
        "time": 3000
    });
    //myApp.removeAuth();
    return myApp;

    //RSA加密
    //var encrypt = new JSEncrypt();
    //encrypt.setPublicKey(myApp.RSAPublicKey());
    //var encrypted = encrypt.encrypt("翔，u r the best!");
});