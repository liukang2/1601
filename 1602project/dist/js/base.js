webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12),module,__webpack_require__(2),__webpack_require__(16),__webpack_require__(18),__webpack_require__(20),__webpack_require__(22),__webpack_require__(24),__webpack_require__(26),__webpack_require__(28),__webpack_require__(30),__webpack_require__(32),__webpack_require__(34),__webpack_require__(36),__webpack_require__(38),__webpack_require__(40),__webpack_require__(1),__webpack_require__(42),__webpack_require__(44),__webpack_require__(46),__webpack_require__(48),__webpack_require__(50),__webpack_require__(52),__webpack_require__(54),__webpack_require__(56),__webpack_require__(58),__webpack_require__(60),__webpack_require__(62),__webpack_require__(64),__webpack_require__(66),__webpack_require__(68)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Lib,Module,App,Login,Register,RegisterFast,FindPassword,UserInformation,IdentityInfo,JobInfo,ContactInfo,CreditCard,AddCreditCard,MobileSupplyName,ModifyServicePassword,InternetInfo,DwellingInfo,MoreContact,Evidence,EvidenceJob,EvidenceDegree,LimitNotEnough,ActivationFail,ActivationSuccess,PaySuccess,My,OrderDetail,Repayment,RepaymentDetail,Go,Protocol){
	    "use strict";
	    var router,rule,
	        lastView = null,
	        Router = Backbone.Router.extend({
	            initialize: function(){
	                Backbone.on('routerchange', this.routerChangeHandler, this);
	            },
	            routes: {
	                'Login': 'login',
	                'Register': 'register',
	                'Register/Fast': 'registerfast',
	                'FindPassword': 'findpassword',
	                'Activation': 'userinformation',
	                'MyInfo': 'userinformation',
	                'Identity': 'identityinfo',
	                'Jobs': 'jobinfo',
	                'Contact': 'contactinfo',
	                'CreditCard': 'creditcard',
	                'AddCreditCard/:cardId': 'addcreditcard',
	                'MobileSupplyName': 'mobilesupplyname',
	                'ModifyServicePassword': 'modifyservicepassword',
	                'Internet': 'internetinfo',
	                'Dwelling': 'dwellinginfo',
	                'MoreContact': 'morecontact',
	                'Evidence': 'evidence',
	                'Evidence/Job': 'evidencejob',
	                'Evidence/Edu': 'evidencedegree',
	                'LimitNotEnough': 'limitnotenough',
	                'ActivationFail/HasOrder': 'activationfail',
	                'ActivationFail/NoOrder': 'activationfail',
	                'ActivationSuccess/HasOrder': 'activationsuccess',
	                'ActivationSuccess/NoOrder': 'activationsuccess',
	                'PaySuccess': 'paysuccess',
	                'My': 'my',
	                'OrderDetail': 'orderdetail',
	                'Repayment': 'repayment',
	                'Repayment/Detail': 'repaymentdetail',
	                'Protocol/:pid': 'protocol',
	                'Go': 'go',
	                '': 'login'
	            },
	            params: null,
	            login: function(){
	                this.hideHandler();
	                lastView = new Login();
	                lastView.render();
	            },
	            register: function(){
	                this.hideHandler();
	                lastView = new Register();
	                lastView.render();
	            },
	            registerfast: function(){
	                this.hideHandler();
	                lastView = new RegisterFast();
	                lastView.render();
	            },
	            findpassword: function(){
	                this.hideHandler();
	                lastView = new FindPassword();
	                lastView.render();
	            },
	            userinformation: function(){
	                this.hideHandler();
	                lastView = new UserInformation();
	                lastView.render();
	            },
	            identityinfo: function(){
	                this.hideHandler();
	                lastView = new IdentityInfo();
	                lastView.render();
	            },
	            jobinfo: function(){
	                this.hideHandler();
	                lastView = new JobInfo();
	                lastView.render();
	            },
	            contactinfo: function(){
	                this.hideHandler();
	                lastView = new ContactInfo();
	                lastView.render();
	            },
	            creditcard: function(){
	                this.hideHandler();
	                lastView = new CreditCard();
	                lastView.render();
	            },
	            addcreditcard: function(){
	                this.hideHandler();
	                lastView = new AddCreditCard();
	                lastView.render();
	            },
	            mobilesupplyname: function(){
	                this.hideHandler();
	                lastView = new MobileSupplyName();
	                lastView.render();
	            },
	            modifyservicepassword: function(){
	                this.hideHandler();
	                lastView = new ModifyServicePassword();
	                lastView.render();
	            },
	            internetinfo: function(){
	                this.hideHandler();
	                lastView = new InternetInfo();
	                lastView.render();
	            },
	            dwellinginfo: function(){
	                this.hideHandler();
	                lastView = new DwellingInfo();
	                lastView.render();
	            },
	            morecontact: function(){
	                this.hideHandler();
	                lastView = new MoreContact();
	                lastView.render();
	            },
	            evidence: function(){
	                this.hideHandler();
	                lastView = new Evidence();
	                lastView.render();
	            },
	            evidencejob: function(){
	                this.hideHandler();
	                lastView = new EvidenceJob();
	                lastView.render();
	            },
	            evidencedegree: function(){
	                this.hideHandler();
	                lastView = new EvidenceDegree();
	                lastView.render();
	            },
	            limitnotenough: function(){
	                this.hideHandler();
	                lastView = new LimitNotEnough();
	                lastView.render();
	            },
	            activationfail: function(){
	                this.hideHandler();
	                lastView = new ActivationFail();
	                lastView.render();
	            },
	            activationsuccess: function(){
	                this.hideHandler();
	                lastView = new ActivationSuccess();
	                lastView.render();
	            },
	            paysuccess: function(){
	                this.hideHandler();
	                lastView = new PaySuccess();
	                lastView.render();
	            },
	            my: function(){
	                this.hideHandler();
	                lastView = new My();
	                lastView.render();
	            },
	            orderdetail: function(){
	                this.hideHandler();
	                lastView = new OrderDetail();
	                lastView.render();
	            },
	            repayment: function(){
	                this.hideHandler();
	                lastView = new Repayment();
	                lastView.render();
	            },
	            repaymentdetail: function(){
	                this.hideHandler();
	                lastView = new RepaymentDetail();
	                lastView.render();
	            },
	            go: function(){
	                this.hideHandler();
	                lastView = new Go();
	                lastView.render();
	            },
	            protocol: function(){
	                this.hideHandler();
	                lastView = new Protocol();
	                lastView.render();
	            },
	            routerChangeHandler: function(_params){
	                this.params = _params;
	            },
	            hideHandler: function(){
	                if(lastView){
	                    lastView.$el.html('');
	                    lastView.hide();
	                }
	                $(window).scrollTop(0);
	            }
	        });

	    router = new Router();
	    Backbone.WEBAPP = {router: router};
	    if(run()){
	        return false;
	    }
	    Backbone.history.start({pushState: true});

	    function run(){
	        rule = App.locaHandler();
	        //除以下页面不需登录，其它页面均先登录
	        if(rule == 'Go' || rule == 'Login' || rule == 'Register' || rule == 'FindPassword' || rule == 'Protocol/Service' || rule == 'Protocol/Private' || rule == 'Protocol/YHFQ'){
	            return false;
	        }
	        else{
	            if(!App.isLogin){
	                App.jumpRef("Login");
	                return true;
	            }
	        }
	        return false;
	    }

	    $(window).on("orientationchange", function() {
	        location.reload();
	    });

	    //REM页面适配
	    var _android = navigator.userAgent.match(/linux/i)||navigator.userAgent.match(/android/i)||navigator.platform.match(/android/i) ? true : false;
	    var _iOS = navigator.userAgent.match(/(ipod|ipad|iphone)/i) ? true : false;
	    (function (doc, win) {
	        var docEl = doc.documentElement,
	            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	            recalc = function () {
	                var clientWidth = docEl.clientWidth;
	                if (!clientWidth) return;
	                if(_android || _iOS){
	                    clientWidth = clientWidth;
	                }
	                else{
	                    clientWidth = 420;
	                }
	                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	            };
	        if (!doc.addEventListener) return;
	        win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
	    })(document, window);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,dwellinginfoTpl){
	    'use strict';
	    var oButton,
	        getLiveInfoModel=null,subLiveInfoModel=null,pageOptionModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            getLiveInfoModel = new Models.getLiveInfoModel(App.getAuth());
	            subLiveInfoModel = new Models.subLiveInfoModel();
	            pageOptionModel = new Models.pageOptionModel();
	            App.header({
	                'title': '居住信息'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(dwellinginfoTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();

	            var that = this;
	            getLiveInfoModel.execute(function(response){
	                if(response.status == '1'){
	                    var mainData = response.data;
	                    var sHTML = that.template({data: mainData});
	                    that.$el.html(sHTML);
	                    //住房性质
	                    pageOptionModel.execute(function(_data){
	                        var liveType = new Picker({
	                            obj: 'liveType',
	                            column: 1,
	                            data: _data.liveType,
	                            initValue: mainData.liveType || "自购",
	                            closeFunc: function(picker){
	                                that.$el.find("#liveType").attr('data-value', picker.value[0]);
	                            }
	                        });
	                        liveType.init();
	                    });

	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            oButton = that.$el.find(".action");

	            //引用第三方插件（调取相册或相机）
	            App.addCameraJS(['mobileFix','exif', 'lrz']);
	            var input = $('.upload-pic input');
	            input.on('change', function(){
	                var oDiv = $(this).next();
	                lrz(this.files[0], {width: 400}, function (results) {
	                    var img = new Image();
	                    img.src = results.base64;
	                    oDiv.html(img);
	                });
	            });

	            oButton.on("click", function(e){
	                e.stopPropagation();
	                var v1 = that.$el.find("#liveType").attr("data-value"),
	                    v2 = that.$el.find("#telphone").val(),
	                    f1 = that.$el.find("#livePicUrl img").attr("src") || "";
	                var param = {
	                    code: App.getAuth(),
	                    liveType: v1,
	                    liveTel: v2,
	                    proveFile: that._replace(f1)
	                }
	                console.log(param);
	                subLiveInfoModel.param = param;
	                subLiveInfoModel.execute(function(response){
	                    if(response.status == "1"){
	                        App.toast.show("数据保存成功", true);
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            })
	        },
	        _replace: function(imgData){
	            return imgData.replace(/^data:image\/(png|jpeg);base64,/, "");
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3),__webpack_require__(7), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Stores, Models, HeaderTpl){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(cStore, cSession, Inherit){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
		var inh = {};
		inh.Class = function(_sub, _sup){
			_sub.prototype = new _sup();
			_sub.prototype.constructor = _sub;
			return _sub;
		};

		return inh;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(cModel, Inherit){
		"use strict";
		var environment = 'pro',
			baseUrl= '',
			resourceUrl = '';

	    //不同的环境调配置
		switch(environment){
	        case 'dev':
	            baseUrl = "http://localhost/openapi";
	            resourceUrl = "http://192.168.1.83/yhfq_h5/dist";
	            break;
			case 'pro':
				baseUrl = "/openapi";
				resourceUrl = "http://192.168.1.103/dist";
				break;
		}	
		var m = {};

	    //demo
	    m.demoModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/test";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);

	    //获取访问应花token
	    m.getAccessTokenModel = Inherit.Class(function(){
	        this.url = baseUrl + "/auth/getAccessToken";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    //验证授权token并返回有关第三方请求数据
	    m.checkAccessTokenModel = Inherit.Class(function(_aToken){
	        this.url = baseUrl + "/auth/checkAccessToken";
	        this.method = "post";
	        this.param = "accessToken="+_aToken;
	        this.dataType = 'json';
	    }, cModel);
	    //登录code和手机号是否匹配
	    m.isCodeMatchPhoneModel = Inherit.Class(function(_code,_phone){
	        this.url = baseUrl + "/user/isCodeMatchPhone";
	        this.method = "get";
	        this.param = "code="+_code+"&phone="+_phone;
	        this.dataType = 'json';
	    }, cModel);



	    // 用户登录
	    m.userLoginModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/login";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 用户注册
	    m.userRegisterModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/register";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 忘记密码
	    m.resetPasswordPwdModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/resetPassword";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 发送短信验证码
	    m.phoneCodeModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/sendSmsVerify";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 图形验证码
	    m.imgCodeModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/getVerifyCodeRequest";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取我的应花资料状态
	    m.myDataStatusModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getMyDataStatus";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);


	    // 获取身份认证信息
	    m.getIdentityModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getIdentity";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交身份认证信息
	    m.subIdentityInfoModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subIdentityInfo";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 获取获取借记卡列表
	    m.getDebitBankCardModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getDebitBankCard";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);


	    // 获取工作信息
	    m.getJobInfoModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getJobInfo";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交工作信息
	    m.subJobInfoModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subJobInfo";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取联系人信息
	    m.getContractModel = Inherit.Class(function(_code, _type){
	        this.url = baseUrl + "/member/getContract";
	        this.method = "post";
	        this.param = "code="+_code+"&type="+_type;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交联系人信息
	    m.subContractModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subContract";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取芝麻分
	    m.getZmfModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getZmf";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 芝麻分认证
	    m.authorizeZmfModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/authorizeZmf";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 跳过芝麻认证
	    m.skipZmfAuthorizeModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/skipZmfAuthorize";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);


	    // 获取互联网信息
	    m.getInternetInfoModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getInternetInfo";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交互联网信息
	    m.subInternetInfoModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subInternetInfo";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取居住信息
	    m.getLiveInfoModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getLiveInfo";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交居住信息
	    m.subLiveInfoModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subLiveInfo";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取证明材料
	    m.getProveInfoModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getProveInfo";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 提交工作证明
	    m.subJobProveModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subJobProve";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 提交学历证明
	    m.subEduProveModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subEduProve";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 获取信用卡信息
	    m.getCreditBankCardModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/getCreditBankCard";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    // 添加信用卡信息
	    m.subCreditcardModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/subCreditBankCard";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    // 更新信用卡信息
	    m.updateCreditcardModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/updateCreditBankCard";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 手机运营商认证请求
	    m.authOperatorTokenModel = Inherit.Class(function(_code){
	        this.async = false;
	        this.url = baseUrl + "/member/authOperatorToken";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);
	    m.authOperatorModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/authOperator";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    //重置密码请求
	    m.resetOperatorPwdReqModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/resetOperatorPwdReq";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);
	    m.submitOperatorResetPwdModel = Inherit.Class(function(){
	        this.url = baseUrl + "/member/submitOperatorResetPwd";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);


	    // 激活应花额度
	    m.activationMyLimitModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/member/activationMyLimit";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);

	    // 应花分期下单
	    m.installmentOrderModel = Inherit.Class(function(){
	        this.url = baseUrl + "/order/installmentOrder";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);

	    // 获取我的应花额度及订单状态
	    m.myLimitOrderModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/user/getMyLimitOrder";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);

	    // 获取我的应花待还款账单
	    m.getMyBillModel = Inherit.Class(function(_code){
	        this.url = baseUrl + "/order/getMyBill";
	        this.method = "post";
	        this.param = "code="+_code;
	        this.dataType = 'json';
	    }, cModel);

	    // 获取订单详情
	    m.getOrderDetailModel = Inherit.Class(function(_code,_oid){
	        this.url = baseUrl + "/order/getOrderDetail";
	        this.method = "get";
	        this.param = "code="+_code+"&yhOrderNo="+_oid;
	        this.dataType = 'json';
	    }, cModel);

	    // 获取订单详情
	    m.getOrderDetailModel = Inherit.Class(function(_code,_oid){
	        this.url = baseUrl + "/order/getOrderDetail";
	        this.method = "get";
	        this.param = "code="+_code+"&yhOrderNo="+_oid;
	        this.dataType = 'json';
	    }, cModel);

	    // 获取协议值
	    m.repayModel = Inherit.Class(function(){
	        this.url = baseUrl + "/pay/repay";
	        this.method = "post";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);

		// 获取选择器数据
		m.pageOptionModel = Inherit.Class(function(){
	        //this.url = "http://192.168.1.83:8088/webs/yhfq_h5/d_api/optionData";
	        this.url = resourceUrl + "/data/optionData";
	        this.method = "get";
	        this.param = "";
	        this.dataType = 'json';
		}, cModel);

	    // 获取地区数据
	    m.addressModel = Inherit.Class(function(){
	        //this.url = "http://192.168.1.83:8088/webs/yhfq_h5/d_api/addressData";
	        this.url = resourceUrl + "/data/addressData";
	        this.method = "get";
	        this.param = "";
	        this.dataType = 'json';
	    }, cModel);

		m.baseUrl = baseUrl;
		m.resourceUrl = resourceUrl;

		return m;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"header\">\r\n    <a class=\"back\" href=\"javascript:;\"><i class=\"icon icon-back\"></i></a>\r\n    <h2><%=title%></h2>\r\n    <%if(btnClass && btnText){%>\r\n    <a class=\"btn <%=btnClass%>\" href=\"javascript:;\"><%=btnText%></a>\r\n    <%}%>\r\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"dwelling-info\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>住房性质</label>\r\n                <p><input id=\"liveType\" value=\"<%=data.liveType%>\" data-value=\"<%=data.liveType%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>住址电话</label>\r\n                <p><input id=\"telphone\" type=\"number\" value=\"<%=data.tel%>\" placeholder=\"输入你的住宅电话\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>证明材料</label>\r\n                <div class=\"upload-pic clear\">\r\n                    <span class=\"t\">图片格式，例如：租房合同、房产证、门牌号等照片。</span>\r\n                    <div class=\"pic\">\r\n                        <input type=\"file\" capture=\"camera\" />\r\n                        <div id=\"livePicUrl\" class=\"report\">\r\n                            <%if(data.livePicUrl){%>\r\n                            <img src=\"<%=data.livePicUrl%>\"/>\r\n                            <%}%>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, FastClick){
	    "use strict";
	    Backbone.WEBAPP = {router:null};
	    FastClick.attach(document.body);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    //try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.Zepto || root.ender));
	  }

	})(function(root, Backbone, _, Zepto) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      var hasChanged;
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	        hasChanged = true;
	      }
	      return hasChanged ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        //self start
	        // if(match[1] == 'click' && ('ontouchstart' in document.documentElement)){
	        //   match[1] = 'touchend';
	        // }
	        //self end
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.2
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.2';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var isArrayLike = function(collection) {
	    var length = collection != null && collection.length;
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, 'length').length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = list && list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    var i = 0, length = array && array.length;
	    if (typeof isSorted == 'number') {
	      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	    } else if (isSorted && length) {
	      i = _.sortedIndex(array, item);
	      return array[i] === item ? i : -1;
	    }
	    if (item !== item) {
	      return _.findIndex(slice.call(array, i), _.isNaN);
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    var idx = array ? array.length : 0;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    if (item !== item) {
	      return _.findLastIndex(slice.call(array, 0, idx), _.isNaN);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = array != null && array.length;
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createIndexFinder(1);

	  _.findLastIndex = createIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of 
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	  
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }

	  window["_"] = _;
	}.call(this));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,loginTpl){
	    'use strict';
	    var uPhone,uPwd,loginBtn,_channel,
	        userLoginModel=null,myLimitOrderModel=null,
	        getAccessTokenModel=null;

	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            userLoginModel = new Models.userLoginModel();
	            getAccessTokenModel = new Models.getAccessTokenModel();
	            _channel = App.getQueryParameter("channel");
	            App.header({
	                'title': '应花登录',
	                'btnText': '注册',
	                'btnClass': 'action'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(loginTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this,
	                sHTML = that.template();
	            that.$el.html(sHTML);
	            uPhone = that.$el.find('#userPhone');
	            uPwd = that.$el.find('#password'),
	            loginBtn = that.$el.find('#loginBtn');

	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;

	            //登录
	            loginBtn.on('click', function(e){
	                e.stopPropagation();
	                //加密
	                //var encrypt = new JSEncrypt();
	                //encrypt.setPublicKey(App.RSAPublicKey());
	                //var encrypted = encrypt.encrypt("u r the best!");
	                if(that.validate()){
	                    App.mask.show();
	                    var phone = uPhone.val(),
	                        pwd = $.md5(uPwd.val()),
	                        merchantsNo = App.getListingData().merchantsNo,
	                        _fromPage = App.getListingData().page,
	                        param = {};

	                    //是否允许商户直接登录
	                    if(_channel){
	                        param = {
	                            userName: phone,
	                            password: pwd,
	                            merchantsNo: merchantsNo,
	                            chanel: _channel
	                        }
	                    }
	                    else{
	                        param = {
	                            userName: phone,
	                            password: pwd,
	                            merchantsNo: merchantsNo
	                        }
	                    }
	                    userLoginModel.param = param;
	                    userLoginModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            //存储code及phone
	                            App.setAuth(response.data.code, phone);
	                            //源自支付页面
	                            if(_fromPage == "pay"){
	                                that.isActivation();
	                            }
	                            else{
	                                App.jumpRef('My');
	                                return false;
	                            }
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    });
	                }
	            });
	            //注册
	            $('.action').on('click', function(){
	                App.jump('Register');
	                return false;
	            });
	            //找回密码
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump(pageName);
	                    return false;
	                }
	            });
	        },
	        validate: function(){
	            var phone = uPhone.val(),
	                pwd = uPwd.val();
	            if(!App.checkTelPhone(phone)){
	                App.toast.show("请输入正确的手机号", true);
	                return false;
	            }
	            if(!pwd){
	                App.toast.show("密码不能为空", true);
	                return false;
	            }
	            return true;
	        },
	        isActivation: function(){
	            myLimitOrderModel = new Models.myLimitOrderModel(App.getAuth());
	            myLimitOrderModel.async = false;
	            myLimitOrderModel.execute(function(response){
	                if(response.status == "1"){
	                    App.gStore.set("userLimit", response.data.limit);
	                    //是否激活应花分期
	                    if(response.data.isActivation == "0"){
	                        App.jumpRef('Activation');
	                        return false;
	                    }
	                    else{
	                        //是否有执行订单
	                        if(App.getListingData().orderInfo.yhOrderNo){
	                            //应花额度>订单额度
	                            if(Number(response.data.limit) > Number(App.getListingData().amount)){
	                                App.jumpRef('ActivationSuccess/HasOrder');
	                                return false;
	                            }
	                            else{
	                                App.jumpRef('LimitNotEnough');
	                                return false;
	                            }
	                        }
	                        else{
	                            App.jumpRef('ActivationSuccess/NoOrder');
	                            return false;
	                        }
	                    }
	                }
	                else{
	                    App.toast.show(response.msg, true);
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>账号</label>\r\n                <p><input id=\"userPhone\" type=\"tel\" maxlength=\"11\" placeholder=\"输入您的应花分期账号\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>密码</label>\r\n                <p><input id=\"password\" type=\"password\" placeholder=\"输入登录密码\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <p class=\"t\">原手机贷账号、应花商城账号、应花分期付款账号是通用的，可以直接登录。</p>\r\n    <div class=\"button\"><button id=\"loginBtn\">登录</button></div>\r\n    <p class=\"f\"><a data-page=\"FindPassword\" href=\"javascript:;\">忘记密码？</a></p>\r\n</div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,registerTpl){
	    'use strict';
	    var oPhone,oPwd,oImgCode,oPhoneCode,regBtn,imgCodeBtn,phoneCodeBtn,
	        imgkey="",timer=null,countdown=30,
	        userRegisterModel=null,imgCodeModel=null,phoneCodeModel=null;

	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            userRegisterModel = new Models.userRegisterModel();
	            imgCodeModel = new Models.imgCodeModel();
	            phoneCodeModel = new Models.phoneCodeModel();
	            App.header({
	                'title': '应花注册',
	                'btnText': '登录',
	                'btnClass': 'action'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(registerTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            var sHTML = that.template({url: Models.resourceUrl});
	            that.$el.html(sHTML);
	            oPhone = that.$el.find('#userPhone');
	            oPwd = that.$el.find('#password');
	            oImgCode = that.$el.find('#imgCode');
	            oPhoneCode = that.$el.find('#phoneCode'),
	            regBtn = that.$el.find('#regBtn'),
	            imgCodeBtn = that.$el.find('#imgCodeBtn'),
	            phoneCodeBtn = that.$el.find('#phoneCodeBtn');

	            that.eventsHandler();
	            that.getImgCode();
	        },
	        hide: function(){
	            App.mask.show();
	            clearTimeout(timer);
	        },
	        eventsHandler: function(){
	            var that = this;
	            //注册
	            regBtn.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    App.mask.show();
	                    var phone = oPhone.val(),
	                        pwd = $.md5(oPwd.val()),
	                        ivCode = oImgCode.val(),
	                        smsCode = oPhoneCode.val(),
	                        _fromPage = App.getListingData().page;

	                    var param = {
	                        userName: phone,
	                        password: pwd,
	                        smsCode: smsCode,
	                        imgVerifyCode: ivCode,
	                        imgKey: imgkey
	                    };
	                    userRegisterModel.param = param;
	                    userRegisterModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            //存储code及phone
	                            App.setAuth(response.data.code, phone);
	                            //源自个人中心
	                            if(_fromPage == "personal"){
	                                App.jumpRef("My");
	                                return false;
	                            }
	                            //源自支付页面
	                            else if(_fromPage == "pay"){
	                                App.jumpRef("Activation");
	                                return false;
	                            }
	                            else{
	                                App.jumpRef("Login");
	                                return false;
	                            }
	                        }
	                        else{
	                            App.toast.show(response.msg, true);
	                        }
	                    });
	                }
	            });
	            //登录
	            $('.action').on('click', function(e){
	                e.stopPropagation();
	                App.jump('Login');
	                return false;
	            });
	            //刷新图形验证码
	            imgCodeBtn.on('click', function(e){
	                e.stopPropagation();
	                that.getImgCode();
	            });
	            //发送验证码
	            phoneCodeBtn.on('click', function(e){
	                e.stopPropagation();
	                var phone = oPhone.val(),
	                    $this = $(this),
	                    status = $this.attr('data-use');
	                if(App.checkTelPhone(phone)){
	                    if(status == "Y"){
	                        phoneCodeModel.param = "phoneNum="+phone+"&smsCode=smscode";
	                        phoneCodeModel.execute(function(response){
	                            if(response.status == "1"){
	                                //开启倒计时
	                                that.countDownTime($this);
	                                $this.addClass('disabled');
	                                $this.attr('data-use', 'N');
	                            }
	                            else{
	                                App.toast.show(response.msg, true);
	                            }
	                        });
	                    }
	                }
	                else{
	                    App.toast.show("请输入正确的手机号码", true);
	                }
	            });
	            //相关协议
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump('Protocol/'+pageName);
	                    return false;
	                }
	            });
	        },
	        validate: function(){
	            var phone = oPhone.val(),
	                pwd = oPwd.val(),
	                iCode = oImgCode.val(),
	                pCode = oPhoneCode.val();
	            if(!App.checkTelPhone(phone)){
	                App.toast.show("请输入正确的手机号", true);
	                return false;
	            }
	            if(!App.checkPassword(pwd)){
	                App.toast.show("密码格式或长度有误", true);
	                return false;
	            }
	            if(!iCode){
	                App.toast.show("图形验证码不能为空", true);
	                return false;
	            }
	            if(!pCode){
	                App.toast.show("手机验证码不能为空", true);
	                return false;
	            }
	            return true;
	        },
	        getImgCode: function(){
	            imgCodeBtn.find("img").attr({"src": Models.resourceUrl + '/img/default_code.png'});
	            imgCodeModel.execute(function(response){
	                if(response.status == "1"){
	                    var str = Models.baseUrl+"/member/getVerifyCode?imgKey="+response.data;
	                    imgkey = response.data;
	                    imgCodeBtn.find("img").attr({"src": str});
	                }
	                else{
	                    App.toast.show(response.msg, true);
	                }
	            });
	        },
	        countDownTime: function(obj){
	            //清除倒计时
	            clearTimeout(timer);

	            var that = this;
	            if (countdown == 0) {
	                obj.removeClass('disabled').html('获取验证码').attr('data-use', 'Y');
	                countdown = 30;
	                return false;
	            }
	            else{
	                obj.addClass('disabled').html('还剩' + countdown + '秒').attr('data-use', 'N');
	                countdown--;
	            }
	            timer = setTimeout(function(){
	                that.countDownTime(obj)
	            }, 1000);
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<%if(url){%>\r\n<div class=\"register login\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <p><input id=\"userPhone\" type=\"tel\" maxlength=\"11\" placeholder=\"请输入您的手机号\"/></p>\r\n            </li>\r\n            <li>\r\n                <p><input id=\"password\" type=\"password\" maxlength=\"10\" placeholder=\"输入6-10位英文数字组合密码\"/></p>\r\n            </li>\r\n            <li>\r\n                <div id=\"imgCodeBtn\" class=\"pic-code clear\"><img src=\"<%=url%>dist/img/default_code.png\" style=\"width:100%;height:100%\"/></div>\r\n                <p><input id=\"imgCode\" type=\"text\" placeholder=\"请输入上图图形验证码\"/></p>\r\n            </li>\r\n            <li>\r\n                <p><input id=\"phoneCode\" type=\"tel\" maxlength=\"6\" placeholder=\"输入短信验证码\"/></p>\r\n                <span id=\"phoneCodeBtn\" data-use=\"Y\" class=\"phone-code\">获取验证码</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <p class=\"t\">注册成功后，该账号在应花商城、应花分期付款、手机贷中均可使用。</p>\r\n    <div class=\"button\"><button id=\"regBtn\">注册</button></div>\r\n    <p class=\"x\">点击注册表示阅读并同意<a data-page=\"Protocol/Register\">《注册服务协议》</a>、<a data-page=\"Protocol/Private\">《隐私政策》</a>。</p>\r\n</div>\r\n<%}%>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(21)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,registerfastTpl){
	    'use strict';
	    var registerModel = null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            App.header({
	                'title': '应花注册',
	                'btnClass': 'action',
	                'btnText': '登录'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(registerfastTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            var sHTML = that.template();
	            that.$el.html(sHTML);
	            that.eventsHandler();

	            App.loading.hide();
	            App.maskLayer.hide();
	        },
	        hide: function(){

	        },
	        eventsHandler: function(){
	            var that = this;
	            //登录
	            $('.action').on('click', function(){
	                App.jump('Login');
	                return false;
	            });
	            //相关协议
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump('protocol/'+pageName);
	                    return false;
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>应花账号</label>\r\n                <p><input id=\"user-phone\" type=\"tel\" maxlength=\"11\" readonly value=\"18321268749\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>设置密码</label>\r\n                <p><input id=\"password\" type=\"password\" maxlength=\"10\" placeholder=\"输入6-10位英文数字组合密码\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <p class=\"t\">注册成功后，该账号在应花商城、应花分期付款、手机贷中均可使用。</p>\r\n    <div class=\"button\"><button id=\"register-button\">注册</button></div>\r\n    <p class=\"x\">点击注册表示阅读并同意<a data-page=\"Service\">《注册服务协议》</a>、<a data-page=\"Private\">《隐私政策》</a>、<a data-page=\"YHFQ\">《应花分期协议》</a>。</p>\r\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,findpasswordTpl){
	    'use strict';
	    var oPhone,oPwd,oImgCode,oPhoneCode,forgetPwdBtn,imgCodeBtn,phoneCodeBtn,
	        imgkey="",timer=null,countdown=30,
	        resetPasswordPwdModel=null,imgCodeModel=null,phoneCodeModel=null;

	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            resetPasswordPwdModel = new Models.resetPasswordPwdModel();
	            imgCodeModel = new Models.imgCodeModel();
	            phoneCodeModel = new Models.phoneCodeModel();
	            App.header({
	                'title': '忘记密码'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(findpasswordTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            var sHTML = that.template({url: Models.resourceUrl});
	            that.$el.html(sHTML);
	            oPhone = that.$el.find('#userPhone');
	            oPwd = that.$el.find('#password');
	            oImgCode = that.$el.find('#imgCode');
	            oPhoneCode = that.$el.find('#phoneCode'),
	            forgetPwdBtn = that.$el.find('#forgetPwdBtn'),
	            imgCodeBtn = that.$el.find('#imgCodeBtn'),
	            phoneCodeBtn = that.$el.find('#phoneCodeBtn');

	            that.eventsHandler();
	            that.getImgCode();
	        },
	        hide: function(){
	            App.mask.show();
	            clearTimeout(timer);
	        },
	        eventsHandler: function(){
	            var that = this;
	            //找回密码
	            forgetPwdBtn.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    var phone = oPhone.val(),
	                        pwd = $.md5(oPwd.val()),
	                        ivCode = oImgCode.val(),
	                        smsCode = oPhoneCode.val(),
	                        _page = App.gStore.get('_page');

	                    var param = {
	                        userName: phone,
	                        newPassword: pwd,
	                        smsCode: smsCode,
	                        imgVerifyCode: ivCode,
	                        imgKey: imgkey
	                    };
	                    resetPasswordPwdModel.param = param;
	                    resetPasswordPwdModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            App.jump("Login");
	                            return false;
	                        }
	                        else{
	                            App.toast.show(response.msg, true);
	                        }
	                    });
	                }
	            });
	            //刷新图形验证码
	            imgCodeBtn.on('click', function(e){
	                e.stopPropagation();
	                that.getImgCode();
	            });
	            //发送验证码
	            phoneCodeBtn.on('click', function(e){
	                e.stopPropagation();
	                var phone = oPhone.val(),
	                    $this = $(this),
	                    status = $this.attr('data-use');
	                if(App.checkTelPhone(phone)){
	                    if(status == "Y"){
	                        phoneCodeModel.param = ("phoneNum="+phone+"&smsCode=resetpwcode");
	                        phoneCodeModel.execute(function(response){
	                            if(response.status == "1"){
	                                //开启倒计时
	                                that.countDownTime($this);
	                                $this.addClass('disabled');
	                                $this.attr('data-use', 'N');
	                            }
	                            else{
	                                App.toast.show(response.msg, true);
	                            }
	                        });
	                    }
	                }
	                else{
	                    App.toast.show("请输入正确的手机号码", true);
	                }
	            });
	        },
	        validate: function(){
	            var phone = oPhone.val(),
	                pwd = oPwd.val(),
	                iCode = oImgCode.val(),
	                pCode = oPhoneCode.val();
	            if(!App.checkTelPhone(phone)){
	                App.toast.show("请输入正确的手机号", true);
	                return false;
	            }
	            if(!App.checkPassword(pwd)){
	                App.toast.show("密码格式或长度有误", true);
	                return false;
	            }
	            if(!iCode){
	                App.toast.show("图形验证码不能为空", true);
	                return false;
	            }
	            if(!pCode){
	                App.toast.show("手机验证码不能为空", true);
	                return false;
	            }
	            return true;
	        },
	        getImgCode: function(){
	            imgCodeBtn.find("img").attr({"src": Models.resourceUrl + '/img/default_code.png'});
	            imgCodeModel.execute(function(response){
	                if(response.status == "1"){
	                    var str = Models.baseUrl+"/member/getVerifyCode?imgKey="+response.data;
	                    imgkey = response.data;
	                    imgCodeBtn.find("img").attr({"src": str});
	                }
	                else{
	                    App.toast.show(response.msg, true);
	                }
	            });
	        },
	        countDownTime: function(obj){
	            //清除倒计时
	            clearTimeout(timer);

	            var that = this;
	            if (countdown == 0) {
	                obj.removeClass('disabled').html('获取验证码').attr('data-use', 'Y');
	                countdown = 30;
	                return false;
	            }
	            else{
	                obj.addClass('disabled').html('还剩' + countdown + '秒').attr('data-use', 'N');
	                countdown--;
	            }
	            timer = setTimeout(function(){
	                that.countDownTime(obj)
	            }, 1000);
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<%if(url){%>\r\n<div class=\"register login\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <p><input id=\"userPhone\" type=\"tel\" maxlength=\"11\" placeholder=\"请输入您的手机号\"/></p>\r\n            </li>\r\n            <li>\r\n                <p><input id=\"password\" type=\"password\" maxlength=\"10\" placeholder=\"输入新的6-10位英文数字组合密码\"/></p>\r\n            </li>\r\n            <li>\r\n                <div id=\"imgCodeBtn\" class=\"pic-code clear\"><img src=\"<%=url%>dist/img/default_code.png\" style=\"width:100%;height:100%\"/></div>\r\n                <p><input id=\"imgCode\" type=\"text\" placeholder=\"请输入上图图形验证码\"/></p>\r\n            </li>\r\n            <li>\r\n                <p><input id=\"phoneCode\" type=\"tel\" placeholder=\"输入短信验证码\"/></p>\r\n                <span id=\"phoneCodeBtn\" data-use=\"Y\" class=\"phone-code\">获取验证码</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"button\"><button id=\"forgetPwdBtn\">确认</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,userinformationTpl){
	    'use strict';
	    var myData,count,_timer,
	        myDataStatusModel=null,getZmfModel=null,authorizeZmfModel=null,skipZmfAuthorizeModel=null,activationMyLimitModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            var _code = App.getAuth();
	            myDataStatusModel = new Models.myDataStatusModel(_code);
	            getZmfModel = new Models.getZmfModel(_code);
	            authorizeZmfModel = new Models.authorizeZmfModel(_code);
	            skipZmfAuthorizeModel = new Models.skipZmfAuthorizeModel(_code);
	            activationMyLimitModel = new Models.activationMyLimitModel(_code);
	            count = App.gStore.get("_count_");
	            App.header({
	                'title': "我的应花资料"
	            });
	        },
	        el: "#mainBody",
	        template: _.template(userinformationTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this,
	                limit = App.gStore.get("userLimit");
	            //获取资料状态
	            myDataStatusModel.execute(function(response){
	                if(response.status == "1"){
	                    myData = response.data;
	                    if(response.data.isActivation == "0"){
	                        App.updateHeaderText("激活应花额度");
	                    }
	                    if(response.data.sesameStatus == "2"){
	                        App.gStore.set("_count_", "2");
	                    }
	                    myData.limit = parseInt(limit);

	                    var sHTML = that.template({data: myData});
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                _fromPage = App.getListingData().page,
	                _orderAmount = App.getListingData().amount;

	            //页面转场
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                //芝麻分认证
	                if(pageName == 'SesameCredit'){
	                    that.sesameCredit();
	                }
	                //
	                else{
	                    App.jump(pageName);
	                    return false;
	                }
	            });

	            //激活额度
	            var animation = {
	                show: function(){
	                    App.compute.show();
	                    App.maskLayer.show();
	                    $('html').css('overflow-y', 'hidden');
	                },
	                hide: function(){
	                    App.compute.hide();
	                    App.maskLayer.hide();
	                    $('html').css('overflow-y', 'scroll');
	                }
	            }
	            function loading(){
	                animation.show();
	                var _t = 60;
	                clearInterval(_timer);
	                _timer = setInterval(function(){
	                    _t--;
	                    if(_t == 0){
	                        animation.hide();
	                        App.makePopBox({
	                            "num": 2,
	                            "title": "系统繁忙，您的应花分期正在开通中，请稍作等待",
	                            "tAlign": "center",
	                            "cancelText": "我的应花",
	                            "certainText": "继续等待",
	                            "close": false,
	                            "cancel": function(){
	                                //do something
	                                //App.jump("My");
	                            },
	                            "certain": function(){
	                                loading();
	                            }
	                        });
	                        App.popBox.show();
	                        App.maskLayer.show();
	                    }
	                }, 1000);
	            }
	            that.$el.find('.action').on('click', function(){
	                loading();
	                //开始计算额度
	                activationMyLimitModel.execute(function(response){
	                    clearInterval(_timer);
	                    if(response.status == '1'){
	                        //保存用户额度
	                        App.gStore.set("userLimit", response.data.limitAmount);

	                        if(_fromPage == "pay"){
	                            if(Number(response.data.limit) == 0){
	                                App.jumpRef("ActivationFail/NoOrder");
	                                return false;
	                            }
	                            //足额
	                            else if(Number(response.data.limit) > Number(_orderAmount)){
	                                App.jumpRef("ActivationSuccess/HasOrder");
	                                return false;
	                            }
	                            //不足额
	                            else{
	                                App.jumpRef("LimitNotEnough");
	                                return false;
	                            }
	                        }
	                        else{
	                            if(Number(response.data.limit) == 0){
	                                App.jumpRef("ActivationFail/NoOrder");
	                                return false;
	                            }
	                            else{
	                                App.jumpRef("ActivationSuccess/NoOrder");
	                                return false;
	                            }
	                        }
	                    }
	                    else{
	                        animation.hide();
	                        App.queryError(response);
	                    }
	                });
	            });
	        },
	        sesameCredit: function(){
	            //去认证
	            function authorize(){
	                authorizeZmfModel.execute(function(response){
	                    if(response.status == "1"){
	                        App.jumpTo(response.data.url);
	                        return false;
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            }
	            //跳过认证
	            function skipAuthorize(){
	                skipZmfAuthorizeModel.execute(function(response){
	                    if(response.status == "1"){
	                        location.reload();
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            }

	            if(count != "2"){
	                App.makePopBox({
	                    "num": 2,
	                    "title": "进入芝麻分认证？",
	                    "tAlign": "center",
	                    "cancelText": "否",
	                    "certainText": "去认证",
	                    "cancel": function(){},
	                    "certain": function(){
	                        authorize();
	                        App.gStore.set("_count_", "o.o");
	                    }
	                });
	            }
	            else{
	                App.makePopBox({
	                    "num": 2,
	                    "title": "可跳过或者进行芝麻分认证",
	                    "tAlign": "center",
	                    "cancelText": "跳过",
	                    "certainText": "去认证",
	                    "cancel": function(){
	                        skipAuthorize()
	                    },
	                    "certain": function(){
	                        authorize();
	                    }
	                });
	            }
	            App.popBox.show();
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<%if(data.isActivation == \"0\"){%>\r\n<p class=\"open-tips\">您的资料越完善，您获得的应花分期额度将越高。</p>\r\n<%}%>\r\n\r\n<%function _v(s){var r;if(s=='0'){r='待完善'} else if(s=='1'){r='已完善'} else{r='去填写'}; return r;}%>\r\n\r\n<div class=\"open-service\">\r\n    <div class=\"menu-block\">\r\n        <ul>\r\n            <li>\r\n                <a data-page=\"Identity\" href=\"javascript:;\">\r\n                    <label>身份认证</label>\r\n                    <span><%=_v(data.identityStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"menu-block\">\r\n        <div class=\"hd\">\r\n            <h3>必填资料</h3>\r\n        </div>\r\n        <ul>\r\n            <li>\r\n                <a data-page=\"Jobs\" href=\"javascript:;\">\r\n                    <label>工作信息</label>\r\n                    <span><%=_v(data.jobinfoStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"Contact\" href=\"javascript:;\">\r\n                    <label>联系信息</label>\r\n                    <span><%=_v(data.mainContactStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"SesameCredit\" href=\"javascript:;\">\r\n                    <label>芝麻信用</label>\r\n                    <%if(data.sesameStatus == '0'){%>\r\n                    <span>去认证</span>\r\n                    <%}else if(data.sesameStatus == '2'){%>\r\n                    <span>暂时跳过，去认证</span>\r\n                    <%}else{%>\r\n                    <span class=\"blue\"><%=data.sesame%>分</span>\r\n                    <%}%>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <%if(data.isActivation == \"0\" || data.limit == 0){%>\r\n    <div class=\"open-button\">\r\n        <button class=\"action\">激活额度</button>\r\n        <p>激活应花额度前，请确保您的资料已经充分完善。</p>\r\n    </div>\r\n    <%}%>\r\n    <div class=\"menu-block\">\r\n        <div class=\"hd\">\r\n            <h3>补充资料</h3>\r\n            <p>获得更高额度和审核通过率</p>\r\n        </div>\r\n        <ul>\r\n            <li>\r\n                <a data-page=\"CreditCard\" href=\"javascript:;\">\r\n                    <label>信用卡</label>\r\n                    <span><%=_v(data.creditCardStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"MobileSupplyName\" href=\"javascript:;\">\r\n                    <label>手机运营商认证</label>\r\n                    <span><%=_v(data.operatorStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"Internet\" href=\"javascript:;\">\r\n                    <label>互联网信息</label>\r\n                    <span><%=_v(data.internetStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"Dwelling\" href=\"javascript:;\">\r\n                    <label>居住信息</label>\r\n                    <span><%=_v(data.liveinfoStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"MoreContact\" href=\"javascript:;\">\r\n                    <label>补充联系人</label>\r\n                    <span><%=_v(data.minorContactStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"Evidence\" href=\"javascript:;\">\r\n                    <label>证明材料</label>\r\n                    <span><%=_v(data.proveStatus)%></span>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(27)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,identityinfoTpl){
	    'use strict';
	    var oRealName,oCardId,oArea,oAddress,oEdu,oMarital,oBankName,oCardNum,oPhone,pData={},mainData={},pName,cName,dName,
	        getIdentityModel=null,subIdentityInfoModel=null,getDebitBankCardModel=null,pageOptionModel=null,addressModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            var _code = App.getAuth();
	            pageOptionModel = new Models.pageOptionModel();
	            addressModel = new Models.addressModel();
	            getIdentityModel = new Models.getIdentityModel(_code);
	            getDebitBankCardModel = new Models.getDebitBankCardModel(_code);
	            subIdentityInfoModel = new Models.subIdentityInfoModel();
	            App.header({
	                'title': '身份认证',
	                'btnClass': 'action',
	                'btnText': '提交'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(identityinfoTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getIdentityModel.async = false;
	            getIdentityModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    if(response.data){
	                        pName = response.data.addressProvinceName ? response.data.addressProvinceName : "北京";
	                        cName = response.data.addressCityName ? response.data.addressCityName : "北京市";
	                        dName = response.data.addressDistrictName ? response.data.addressDistrictName : "东城区";
	                        pData = {
	                            area: pName + '-' + cName + '-' + dName,
	                            edu: response.data.edu || "本科",
	                            marital: response.data.marriage || "未婚",
	                            bankName: response.data.bankName || "中国工商银行"
	                        };
	                        mainData._base = response.data;
	                        mainData._base.pcd = pData.area;
	                    }
	                    else{
	                        pName = "北京";
	                        cName = "北京市";
	                        dName = "东城区";
	                        pData = {
	                            area: pName + '-' + cName + '-' + dName,
	                            edu: "本科",
	                            marital: "未婚",
	                            bankName: "中国工商银行"
	                        };
	                        mainData._base = {};
	                    }
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	            //获取银行卡信息
	            getDebitBankCardModel.async = false;
	            getDebitBankCardModel.execute(function(response){
	                if(response.status == '1'){
	                    if(response.data){
	                        mainData._bank = response.data[0] || "";
	                        pData.bankName = response.data[0].bankName || "中国工商银行";
	                    }
	                    else{
	                        mainData._bank = "";
	                        pData.bankName = "中国工商银行";
	                    }
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	            var sHTML = that.template({data:mainData});
	            that.$el.html(sHTML);
	            //获取元素标签
	            oRealName = that.$el.find('#realName');
	            oCardId = that.$el.find('#cardId');
	            oArea = that.$el.find('#area');
	            oAddress = that.$el.find('#address');
	            oEdu = that.$el.find('#edu');
	            oMarital = that.$el.find('#marital');
	            oBankName = that.$el.find('.bankName');
	            oCardNum = that.$el.find('#cardNum');
	            oPhone = that.$el.find('#phone');

	            that.picker(pData);
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                oButton = $('.action');

	            oButton.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    var realName = oRealName.val(),
	                        cardId = oCardId.val(),
	                        provinceId = oArea.attr('data-fid'),
	                        cityId = oArea.attr('data-sid'),
	                        districtId = oArea.attr('data-tid'),
	                        edu = oEdu.attr('data-value'),
	                        address = oAddress.val(),
	                        marital = oMarital.attr('data-value'),
	                        bankName = oBankName.attr('data-value'),
	                        cardNum = oCardNum.val(),
	                        phone = oPhone.val();

	                    var param = {
	                        code: App.getAuth(),
	                        realName: realName,
	                        cardId: cardId,
	                        addressProvince: provinceId,
	                        addressCity: cityId,
	                        addressDistrict: districtId,
	                        address: address,
	                        edu: edu,
	                        marital: marital,
	                        bankName: bankName,
	                        cardNum: cardNum,
	                        phoneNum: phone
	                    }
	                    subIdentityInfoModel.param = param;
	                    subIdentityInfoModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            App.toast.show("数据保存成功", true);
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    })
	                }
	            });
	        },
	        validate: function(){
	            var realName = oRealName.val(),
	                cardId = oCardId.val(),
	                provinceId = oArea.attr('data-fid'),
	                cityId = oArea.attr('data-sid'),
	                districtId = oArea.attr('data-tid'),
	                address = oAddress.val(),
	                edu = oEdu.attr('data-value'),
	                marital = oMarital.attr('data-value'),
	                bankName = oBankName.attr('data-value'),
	                cardNum = oCardNum.val(),
	                phone = oPhone.val();
	            if(!realName){
	                App.toast.show('真实姓名不能为空', true);
	                return false;
	            }
	            else if(!App.checkIdCard(cardId)){
	                App.toast.show('身份证号码不能为空', true);
	                return false;
	            }
	            else if(!provinceId && !cityId && !districtId){
	                App.toast.show('选择常住地址', true);
	                return false;
	            }
	            else if(!address){
	                App.toast.show('街道地址不能为空', true);
	                return false;
	            }
	            else if(!edu){
	                App.toast.show('选择您的学历', true);
	                return false;
	            }
	            else if(!marital){
	                App.toast.show('选择您的婚姻状况', true);
	                return false;
	            }
	            else if(!bankName){
	                App.toast.show('选择您的开户行', true);
	                return false;
	            }
	            else if(!cardNum){
	                App.toast.show('银行卡号不能为空', true);
	                return false;
	            }
	            else if(!App.checkTelPhone(phone)){
	                App.toast.show('手机号输入有误，请重新输入', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        },
	        picker: function(pData){
	            pageOptionModel.execute(function(_data){
	                //学历
	                var edu = new Picker({
	                    obj: 'edu',
	                    column: 1,
	                    data: _data.edu,
	                    initValue: pData.edu,
	                    closeFunc: function(picker){
	                        oEdu.attr('data-value', picker.displayValue[0]);
	                    }
	                });
	                edu.init();

	                //婚姻
	                var marital = new Picker({
	                    obj: 'marital',
	                    column: 1,
	                    data: _data.marital,
	                    initValue: pData.marital,
	                    closeFunc: function(picker){
	                        oMarital.attr('data-value', picker.displayValue[0]);
	                    }
	                });
	                marital.init();

	                //开户行
	                var bankName = new Picker({
	                    obj: 'bankName',
	                    column: 1,
	                    data: _data.bankName,
	                    initValue: pData.bankName,
	                    closeFunc: function(picker){
	                        oBankName.attr('data-value', picker.displayValue[0]);
	                    }
	                });
	                bankName.init();
	            });
	            addressModel.execute(function(_data){
	                //地区信息
	                var area = new Picker({
	                    obj: 'area',
	                    column: 3,
	                    data: _data,
	                    _split: "-",
	                    initValue: pData.area,
	                    closeFunc: function(picker){
	                        var pName = picker.value[0],
	                            cName = picker.value[1],
	                            dName = picker.value[2];
	                        App.setPickerId(pName, cName, dName, oArea, this.data);
	                    }
	                });
	                area.init();
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"identity-info\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>姓名</label>\r\n                <p>\r\n                    <%if(data._base.realName){%>\r\n                    <input id=\"realName\" type=\"text\" value=\"<%=data._base.realName%>\" readonly placeholder=\"输入您的真实姓名\"/>\r\n                    <%}else{%>\r\n                    <input id=\"realName\" type=\"text\" placeholder=\"输入您的真实姓名\"/>\r\n                    <%}%>\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <label>身份证号</label>\r\n                <p>\r\n                    <%if(data._base.cardId){%>\r\n                    <input id=\"cardId\" type=\"text\" value=\"<%=data._base.cardId%>\" readonly placeholder=\"输入您的身份证号码\"/>\r\n                    <%}else{%>\r\n                    <input id=\"cardId\" type=\"text\" placeholder=\"输入您的身份证号码\"/>\r\n                    <%}%>\r\n                </p>\r\n            </li>\r\n            <li class=\"no\">\r\n                <label>常住地址</label>\r\n                <p><input id=\"area\" type=\"text\" value=\"<%=data._base.pcd%>\" data-fid=\"<%=data._base.addressProvince%>\" data-sid=\"<%=data._base.addressCity%>\" data-tid=\"<%=data._base.addressDistrict%>\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <p><textarea id=\"address\" placeholder=\"街道详细地址\"><%=data._base.address%></textarea></p>\r\n            </li>\r\n            <li>\r\n                <label>学历</label>\r\n                <p><input id=\"edu\" type=\"text\" value=\"<%=data._base.edu%>\" data-value=\"<%=data._base.edu%>\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>婚姻</label>\r\n                <p><input id=\"marital\" type=\"text\" value=\"<%=data._base.marriage%>\" data-value=\"<%=data._base.marriage%>\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <h3>请填写您的收款银行卡</h3>\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>开户行</label>\r\n                <p>\r\n                    <%if(data._bank.bankName){%>\r\n                    <input class=\"bankName\" type=\"text\" value=\"<%=data._bank.bankName%>\" data-value=\"<%=data._bank.bankName%>\" readonly placeholder=\"请选择\"/>\r\n                    <%}else{%>\r\n                    <input id=\"bankName\" class=\"bankName\" type=\"text\" readonly placeholder=\"请选择\"/>\r\n                    <%}%>\r\n                </p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>银行卡</label>\r\n                <p>\r\n                    <%if(data._bank.cardNum){%>\r\n                    <input id=\"cardNum\" type=\"number\" value=\"<%=data._bank.cardNum%>\" readonly placeholder=\"输入本人借记卡号码\"/>\r\n                    <%}else{%>\r\n                    <input id=\"cardNum\" type=\"number\" placeholder=\"输入本人借记卡号码\"/>\r\n                    <%}%>\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <label>预留手机</label>\r\n                <p>\r\n                    <%if(data._bank.phoneNum){%>\r\n                    <input id=\"phone\" type=\"tel\" value=\"<%=data._bank.phoneNum%>\" readonly maxlength=\"11\" placeholder=\"输入银行预留手机号\"/>\r\n                    <%}else{%>\r\n                    <input id=\"phone\" type=\"tel\" maxlength=\"11\" placeholder=\"输入银行预留手机号\"/>\r\n                    <%}%>\r\n                </p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,jobinfoTpl){
	    'use strict';
	    var oCompanyName,oArea,oJobAddress,oCompanyTel,oIncome,mainData={},pData={},pName,cName,dName,
	        getJobInfoModel=null,subJobInfoModel=null,pageOptionModel=null,addressModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            var _code = App.getAuth();
	            pageOptionModel = new Models.pageOptionModel();
	            addressModel = new Models.addressModel();
	            getJobInfoModel = new Models.getJobInfoModel(_code);
	            subJobInfoModel = new Models.subJobInfoModel();
	            App.header({
	                'title': '工作信息',
	                'btnClass': 'action',
	                'btnText': '提交'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(jobinfoTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getJobInfoModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    if(response.data){
	                        pName = response.data.addressProvinceName ? response.data.addressProvinceName : "北京";
	                        cName = response.data.addressCityName ? response.data.addressCityName : "北京市";
	                        dName = response.data.addressDistrictName ? response.data.addressDistrictName : "东城区";
	                        pData = {
	                            area: pName + '-' + cName + '-' + dName,
	                            income: response.data.income || "2000元以下"
	                        };
	                        mainData = response.data;
	                        mainData.pcd = pData.area;
	                    }
	                    else{
	                        pName = "北京";
	                        cName = "北京市";
	                        dName = "东城区";
	                        pData = {
	                            area: pName + '-' + cName + '-' + dName,
	                            income: "2000元以下"
	                        };
	                    }
	                    var sHTML = that.template({data: mainData})
	                    that.$el.html(sHTML);
	                    //获取元素标签
	                    oCompanyName = that.$el.find('#companyName');
	                    oArea = that.$el.find('#area');
	                    oJobAddress = that.$el.find('#jobAddress');
	                    oCompanyTel = that.$el.find('#companyTel');
	                    oIncome = that.$el.find('#income');

	                    that.picker(pData);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });

	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                oButton = $('.action');

	            oButton.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    App.mask.show();
	                    var companyName = oCompanyName.val(),
	                        companyTel = oCompanyTel.val(),
	                        income = oIncome.attr('data-value'),
	                        provinceId = oArea.attr('data-fid'),
	                        cityId = oArea.attr('data-sid'),
	                        districtId = oArea.attr('data-tid'),
	                        jobAddress = oJobAddress.val();

	                    var param = {
	                        code: App.getAuth(),
	                        name: companyName,
	                        tel: companyTel,
	                        income: income,
	                        address: jobAddress,
	                        addressProvince: provinceId,
	                        addressCity: cityId,
	                        addressDistrict: districtId
	                    }
	                    subJobInfoModel.param = param;
	                    subJobInfoModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            App.toast.show("数据保存成功", true);
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    });
	                }
	            })
	        },
	        validate: function(){
	            var vCompanyName = oCompanyName.val(),
	                vCompanyTel = oCompanyTel.val(),
	                vIncome = oIncome.attr('data-value'),
	                vProvinceId = oArea.attr('data-fid'),
	                vCityId = oArea.attr('data-sid'),
	                vDistrictId = oArea.attr('data-tid'),
	                vJobAddress = oJobAddress.val();
	            if(!vCompanyName){
	                App.toast.show('单位名称不能为空', true);
	                return false;
	            }
	            else if(!App.checkMobPhone(vCompanyTel)){
	                App.toast.show('电话格式输入有误', true);
	                return false;
	            }
	            else if(!vIncome){
	                App.toast.show('请选择您的月收入额', true);
	                return false;
	            }
	            else if(!vProvinceId && !vCityId && !vDistrictId){
	                App.toast.show('请选择单位地址', true);
	                return false;
	            }
	            else if(!vJobAddress){
	                App.toast.show('街道地址不能为空', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        },
	        picker: function(pData){
	            pageOptionModel.execute(function(_data){
	                //月均收入
	                var income = new Picker({
	                    obj: 'income',
	                    column: 1,
	                    data: _data.income,
	                    initValue: pData.income,
	                    closeFunc: function(picker){
	                        oIncome.attr('data-value', picker.displayValue[0]);
	                    }
	                });
	                income.init();
	            });
	            addressModel.execute(function(_data){
	                //地区信息
	                var area = new Picker({
	                    obj: 'area',
	                    column: 3,
	                    data: _data,
	                    _split: "-",
	                    initValue: pData.area,
	                    closeFunc: function(picker){
	                        var pName = picker.value[0],
	                            cName = picker.value[1],
	                            dName = picker.value[2];
	                        App.setPickerId(pName, cName, dName, oArea, this.data);
	                    }
	                });
	                area.init();
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"job-info\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>单位名称</label>\r\n                <p><input id=\"companyName\" value=\"<%=data.name%>\" type=\"text\" placeholder=\"输入您的单位名称\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>单位电话</label>\r\n                <p><input id=\"companyTel\" value=\"<%=data.tel%>\" type=\"text\" placeholder=\"区号-电话号码-分机号\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>月均收入</label>\r\n                <p><input id=\"income\" value=\"<%=data.income%>\" data-value=\"<%=data.income%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li class=\"no\">\r\n                <label>单位地址</label>\r\n                <p><input id=\"area\" type=\"text\" value=\"<%=data.pcd%>\" data-fid=\"<%=data.addressProvince%>\" data-sid=\"<%=data.addressCity%>\" data-tid=\"<%=data.addressDistrict%>\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <p><textarea id=\"jobAddress\" placeholder=\"街道详细地址\"><%=data.jobAddress%></textarea></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(31)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,contactinfoTpl){
	    'use strict';
	    var _code,oContract1,oRelation1,oPhone1,
	        oContract2,oRelation2,oPhone2,
	        mainData={},pData={},
	        getContractModel=null,subContractModel=null,pageOptionModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            _code = App.getAuth();
	            pageOptionModel = new Models.pageOptionModel();
	            getContractModel = new Models.getContractModel(_code, "main");
	            subContractModel = new Models.subContractModel();
	            App.header({
	                'title': '联系信息',
	                'btnClass': 'action',
	                'btnText': '提交'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(contactinfoTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getContractModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    if(response.data){
	                        mainData = response.data;
	                        pData = {
	                            relation1: response.data.linkman1Relation || "配偶",
	                            relation2: response.data.linkman2Relation || "配偶"
	                        };
	                    }
	                    else{
	                        mainData.data = {};
	                        pData = {
	                            relation1: "配偶",
	                            relation2: "配偶"
	                        }
	                    }
	                    var sHTML = that.template({data: mainData});
	                    that.$el.html(sHTML);
	                    //获取元素标签
	                    oContract1 = that.$el.find('#contract1');
	                    oRelation1 = that.$el.find('#relation1');
	                    oPhone1 = that.$el.find('#phone1');
	                    oContract2 = that.$el.find('#contract2');
	                    oRelation2 = that.$el.find('#relation2');
	                    oPhone2 = that.$el.find('#phone2');

	                    that.picker(pData);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                oButton = $('.action');
	            //提交保存
	            oButton.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    App.mask.show();
	                    var _contract1 = oContract1.val(),
	                        _relation1 = oRelation1.attr('data-value'),
	                        _phone1 = oPhone1.val(),
	                        _contract2 = oContract2.val(),
	                        _relation2 = oRelation2.attr('data-value'),
	                        _phone2 = oPhone2.val();

	                    var param = {
	                        code: _code,
	                        contractType: "main",
	                        linkman1: _contract1,
	                        linkman1Relation: _relation1,
	                        phone1: _phone1,
	                        linkman2: _contract2,
	                        linkman2Relation: _relation2,
	                        phone2: _phone2
	                    };
	                    subContractModel.param = param;
	                    subContractModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            App.toast.show("数据保存成功", true);
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    });
	                }
	            })
	        },
	        validate: function(){
	            var _contract1 = oContract1.val(),
	                _relation1 = oRelation1.attr('data-value'),
	                _phone1 = oPhone1.val(),
	                _contract2 = oContract2.val(),
	                _relation2 = oRelation2.attr('data-value'),
	                _phone2 = oPhone2.val();
	            if(!_contract1){
	                App.toast.show('联系人1姓名不能为空', true);
	                return false;
	            }
	            else if(!_relation1){
	                App.toast.show('选择您与联系1的关系', true);
	                return false;
	            }
	            else if(!App.checkTelPhone(_phone1)){
	                App.toast.show('手机号输入有误，请重新输入', true);
	                return false;
	            }
	            else if(!_contract2){
	                App.toast.show('联系人2姓名不能为空', true);
	                return false;
	            }
	            else if(!_relation2){
	                App.toast.show('选择您与联系2的关系', true);
	                return false;
	            }
	            else if(!App.checkTelPhone(_phone2)){
	                App.toast.show('手机号输入有误，请重新输入', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        },
	        picker: function(pData){
	            //获取选择器数据
	            pageOptionModel.execute(function(_data){
	                //联系人1
	                var relation1 = new Picker({
	                    obj: 'relation1',
	                    column: 1,
	                    data: _data.mainContract,
	                    initValue: pData.relation1,
	                    closeFunc: function(picker){
	                        oRelation1.attr('data-value', picker.value[0]);
	                    }
	                });
	                relation1.init();

	                //联系人2
	                var relation2 = new Picker({
	                    obj: 'relation2',
	                    column: 1,
	                    data: _data.minorContract,
	                    initValue: pData.relation2,
	                    closeFunc: function(picker){
	                        oRelation2.attr('data-value', picker.value[0]);
	                    }
	                });
	                relation2.init();
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"contact-info\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>联系人1</label>\r\n                <p><input id=\"contract1\" value=\"<%=data.linkman1%>\" type=\"text\" placeholder=\"输入联系人姓名\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>与我关系</label>\r\n                <p><input id=\"relation1\" value=\"<%=data.linkman1Relation%>\" data-value=\"<%=data.linkman1Relation%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>手机号码</label>\r\n                <p><input id=\"phone1\" value=\"<%=data.phone1%>\" type=\"tel\" maxlength=\"11\" placeholder=\"输入联系人手机号\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>联系人2</label>\r\n                <p><input id=\"contract2\" value=\"<%=data.linkman2%>\" type=\"text\" placeholder=\"输入联系人姓名\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>与我关系</label>\r\n                <p><input id=\"relation2\" value=\"<%=data.linkman2Relation%>\" data-value=\"<%=data.linkman2Relation%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>手机号码</label>\r\n                <p><input id=\"phone2\" value=\"<%=data.phone2%>\" type=\"tel\" maxlength=\"11\" placeholder=\"输入联系人手机号\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,creditcardTpl){
	    'use strict';
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            App.header({
	                'title': '信用卡信息'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(creditcardTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();

	            var that = this,
	                sHTML = that.template();
	            that.$el.html(sHTML);
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            //模块页面加载
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump('AddCreditCard/'+pageName);
	                    return false;
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"credit-card\">\r\n    <div class=\"menu-block\">\r\n        <ul>\r\n            <li>\r\n                <a data-page=\"1\" href=\"javascript:;\">\r\n                    <label>信用卡1</label>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"2\" href=\"javascript:;\">\r\n                    <label>信用卡2</label>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(35)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,addcreditcardTpl){
	    'use strict';
	    var _code,cardId,oCardNum,oBankName,oAmountLimit,oIssuingTime,oButton,_type,
	        getCreditBankCardModel=null,subCreditcardModel=null,updateCreditcardModel=null,pageOptionModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            cardId = App.getID();
	            _code = App.getAuth();
	            getCreditBankCardModel = new Models.getCreditBankCardModel(_code);
	            subCreditcardModel = new Models.subCreditcardModel();
	            updateCreditcardModel = new Models.updateCreditcardModel();
	            pageOptionModel = new Models.pageOptionModel();
	            App.header({
	                'title': '添加信用卡'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(addcreditcardTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getCreditBankCardModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    var cardData={},pData;
	                    if(response.data){
	                        cardData = response.data[cardId-1];
	                        pData = {
	                            creditBankName: cardData.creditBankName,
	                            issuingTime: cardData.issuingTime,
	                            amountLimit: cardData.amountLimit
	                        };
	                    }
	                    else{
	                        cardData = {};
	                        _type = "add";
	                        pData = {
	                            creditBankName: "",
	                            issuingTime: "",
	                            amountLimit: ""
	                        };
	                        cardData.data = [];
	                    }
	                    var sHTML = that.template({data: cardData});
	                    that.$el.html(sHTML);
	                    oCardNum = that.$el.find(".cardNum");
	                    oBankName = that.$el.find(".bankName");
	                    oAmountLimit = that.$el.find("#amountLimit");
	                    oIssuingTime = that.$el.find("#issuingTime");
	                    oButton = that.$el.find(".action");

	                    that.picker(pData);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            oButton.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    App.mask.show();
	                    var vCardNum = oCardNum.val(),
	                        vBankName = oBankName.attr('data-value'),
	                        vAmountLimit = oAmountLimit.attr('data-value'),
	                        vIssuingTime = oIssuingTime.attr('data-value');

	                    var param = {
	                        code: _code,
	                        creditcardNum: vCardNum,
	                        creditBankName: vBankName,
	                        amountLimit: vAmountLimit,
	                        issuingTime: vIssuingTime
	                    }
	                    if(_type == "add"){
	                        subCreditcardModel.param = param;
	                        subCreditcardModel.execute(function(response){
	                            App.mask.hide();
	                            if(response.status == "1"){
	                                App.toast.show("信用卡信息添加成功", true);
	                            }
	                            else{
	                                App.queryError(response);
	                            }
	                        });
	                    }
	                    else{
	                        updateCreditcardModel.param = param;
	                        updateCreditcardModel.execute(function(response){
	                            App.mask.hide();
	                            if(response.status == "1"){
	                                App.toast.show("信用卡信息更新成功", true);
	                            }
	                            else{
	                                App.queryError(response);
	                            }
	                        })
	                    }
	                }
	            });
	        },
	        validate: function(){
	            var vCardNum = oCardNum.val(),
	                vBankName = oBankName.attr('data-value'),
	                vAmountLimit = oAmountLimit.attr('data-value'),
	                vIssuingTime = oIssuingTime.attr('data-value');
	            if(!vCardNum){
	                App.toast.show('信用卡号不能为空', true);
	                return false;
	            }
	            else if(!vBankName){
	                App.toast.show('请选择发卡银行', true);
	                return false;
	            }
	            else if(!vAmountLimit){
	                App.toast.show('请选择信用额度', true);
	                return false;
	            }
	            else if(!vIssuingTime){
	                App.toast.show('请选择信用卡有效期', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        },
	        picker: function(pData){
	            pageOptionModel.execute(function(_data){
	                //发卡银行
	                var bankName = new Picker({
	                    obj: 'bankName',
	                    column: 1,
	                    data: _data.bankName,
	                    initValue: pData.creditBankName,
	                    closeFunc: function(picker){
	                        oBankName.attr('data-value', picker.value[0]);
	                    }
	                });
	                bankName.init();

	                //信用卡额度
	                var quota = new Picker({
	                    obj: 'amountLimit',
	                    column: 1,
	                    data: _data.amountLimit,
	                    initValue: pData.amountLimit,
	                    closeFunc: function(picker){
	                        oAmountLimit.attr('data-value', picker.value[0]);
	                    }
	                });
	                quota.init();

	                //有效期
	                var validity = new Picker({
	                    obj: 'issuingTime',
	                    column: 22,
	                    data: _data.issuingTime,
	                    initValue: pData.issuingTime,
	                    _split: '/',
	                    closeFunc: function(picker){
	                        oIssuingTime.attr('data-value', picker.value[0]+'/'+picker.value[1]);
	                    }
	                });
	                validity.init();
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n\r\n<div class=\"add-credit-card\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>卡号</label>\r\n                <p>\r\n                    <%if(data.creditcardNum){%>\r\n                    <input class=\"cardNum\" type=\"number\" value=\"<%=data.creditcardNum%>\" readonly placeholder=\"本人信用卡号\"/>\r\n                    <%}else{%>\r\n                    <input class=\"cardNum\" type=\"number\" placeholder=\"本人信用卡号\"/>\r\n                    <%}%>\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <label>发卡银行</label>\r\n                <p>\r\n                    <%if(data.creditBankName){%>\r\n                    <input class=\"bankName\" type=\"text\" value=\"<%=data.creditBankName%>\" data-value=\"<%=data.creditBankName%>\" readonly placeholder=\"请选择\"/>\r\n                    <%}else{%>\r\n                    <input class=\"bankName\" id=\"bankName\" type=\"text\" readonly placeholder=\"请选择\"/>\r\n                    <%}%>\r\n                </p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>信用额度</label>\r\n                <p><input id=\"amountLimit\" type=\"text\" value=\"<%=data.amountLimit%>\" data-value=\"<%=data.amountLimit%>\" readonly placeholder=\"最高信用额度\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>有效期</label>\r\n                <p><input id=\"issuingTime\" type=\"text\" value=\"<%=data.issuingTime%>\" data-value=\"<%=data.issuingTime%>\" readonly placeholder=\"月/年\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,mobilesupplynameTpl){
	    'use strict';
	    var _phone,oAccount,oPwd,
	        authOperatorTokenModel=null,authOperatorModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            authOperatorTokenModel = new Models.authOperatorTokenModel(App.getAuth());
	            authOperatorModel = new Models.authOperatorModel();
	            App.header({
	                'title': '手机运营商认证'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(mobilesupplynameTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            _phone = App.getPhoneStar(App.getPhone());
	            var that = this,
	                sHTML = that.template({phone: _phone});
	            that.$el.html(sHTML);
	            oAccount = that.$el.find('#account');
	            oPwd = that.$el.find('#password');
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            var vCodeHtml = '<div class="v-code">' +
	                                '<h5>验证码</h5>' +
	                                '<p><input id="vCode" type="number" placeholder="输入短信验证码"/></p>' +
	                                '<span>短信发送至 '+_phone+'</span>' +
	                            '</div>';

	            $('.action').on('click', function(){
	                //获取聚信立token、website
	                authOperatorTokenModel.execute(function(response){
	                    if(response.status == "1"){
	                        var _token = response.data.token,
	                            _website = response.data.website,
	                            _code = App.getAuth(),
	                            _account = oAccount.val(),
	                            _pwd = oPwd.val();

	                        var param = {
	                            code: _code,
	                            token: _token,
	                            website: _website,
	                            account: _account,
	                            password: _pwd,
	                            type: 1
	                        }
	                        //获取聚信立验证码
	                        authOperatorModel.param = param;
	                        authOperatorModel.execute(function(_data){
	                            if(_data.status == "1"){
	                                if(_data.data.status == 0){
	                                    App.toast.show(_data.data.content, true);
	                                    return false;
	                                }
	                                //显示输入验证码窗口
	                                App.makePopBox({
	                                    "num": 1,
	                                    "title": vCodeHtml,
	                                    "certainText": "提交",
	                                    "close": true,
	                                    "certain": function(){
	                                        var vCode = $('#vCode').val();
	                                        param.type = 2;
	                                        param.captcha = vCode;
	                                        //发送验证码进行认证
	                                        authOperatorModel.param = param;
	                                        authOperatorModel.execute(function(res){
	                                            if(res.status == "1"){
	                                                App.toast.show("认证成功", true);
	                                            }
	                                            else{
	                                                App.queryError(res);
	                                            }
	                                        })
	                                    }
	                                });
	                                App.popBoxSingle.show();
	                            }
	                            else{
	                                App.queryError(_data);
	                            }
	                        })
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                });
	            });

	            //找回服务密码
	            that.$el.find('.modify').on('click', function(){
	                App.jump('ModifyServicePassword');
	                return false;
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mobile-supply-name\">\r\n    <p class=\"t\">提供真实信息才能通过审核，所填信息仅作认证用途，信息会被加密保护，请放心输入。</p>\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>手机号码</label>\r\n                <p><input id=\"account\" type=\"tel\" maxlength=\"11\" value=\"<%=phone%>\" disabled/></p>\r\n            </li>\r\n            <li>\r\n                <label>服务密码</label>\r\n                <p><input id=\"password\" type=\"password\" placeholder=\"输入手机服务密码\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">认证</button></div>\r\n    <p class=\"f\"><a class=\"modify\" href=\"javascript:;\">修改服务密码</a></p>\r\n</div>";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,modifyservicepasswordTpl){
	    'use strict';
	    var oPwd,oSmsCode,
	        authOperatorTokenModel=null,resetOperatorPwdReqModel=null,submitOperatorResetPwdModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            authOperatorTokenModel = new Models.authOperatorTokenModel(App.getAuth());
	            resetOperatorPwdReqModel = new Models.resetOperatorPwdReqModel();
	            submitOperatorResetPwdModel = new Models.submitOperatorResetPwdModel();
	            App.header({
	                'title': '修改服务密码',
	                'btnClass': 'action',
	                'btnText': '提交'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(modifyservicepasswordTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this,
	                sHTML = that.template();
	            that.$el.html(sHTML);
	            oPwd = that.$el.find('#password');
	            oSmsCode = that.$el.find('#smsCode');
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                oButton = $(".action"),
	                param = {};
	            //获取聚信立token、website
	            authOperatorTokenModel.execute(function(response){
	                if(response.status == "1"){
	                    var _token = response.data.token,
	                        _website = response.data.website,
	                        _code = App.getAuth(),
	                        _account = App.getPhone();

	                    param = {
	                        code: _code,
	                        token: _token,
	                        website: _website,
	                        account: _account,
	                        webSiteType: "mobile"
	                    }
	                    //获取聚信立验证码
	                    resetOperatorPwdReqModel.param = param;
	                    resetOperatorPwdReqModel.execute(function(data){
	                        if(data.status == "1"){
	                            //console.log('successfully');
	                        }
	                        else{
	                            App.queryError(data);
	                        }
	                    })
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	            //保存服务密码重置请求
	            oButton.on('click', function(e){
	                e.stopPropagation();
	                if(that.validate()){
	                    param.password = oPwd.val();
	                    param.captcha = oSmsCode.val();
	                    submitOperatorResetPwdModel.param = param;
	                    submitOperatorResetPwdModel.execute(function(response){
	                        if(response.status == "1"){
	                            App.toast.show("服务密码修改成功", true);
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    })
	                }
	            });

	            //未收到短信验证码，返回上一页
	            that.$el.find('.back').on('click', function(){
	                history.back();
	            });
	        },
	        validate: function(){
	            var _pwd = oPwd.val(),
	                _smsCode = oSmsCode.val();
	            if(!_pwd){
	                App.toast.show('新密码不能为空', true);
	                return false;
	            }
	            else if(!_smsCode){
	                App.toast.show('短信验证码不能为空', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mobile-supply-name\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>设置密码</label>\r\n                <p><input id=\"password\" type=\"password\" placeholder=\"设置新的服务密码\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>验证码</label>\r\n                <p><input id=\"smsCode\" type=\"number\" placeholder=\"输入短信验证码\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <p class=\"t\">未收到短信验证码，请<a class=\"back\">返回上一页面</a>重新进入。</p>\r\n</div>";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(41)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,internetinfoTpl){
	    'use strict';
	    var oWechat,oQQ,oEmail,oSina,oTaobao,oButton,
	        subInternetInfoModel=null,getInternetInfoModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            getInternetInfoModel = new Models.getInternetInfoModel(App.getAuth());
	            subInternetInfoModel = new Models.subInternetInfoModel();
	            App.header({
	                'title': '互联网信息'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(internetinfoTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getInternetInfoModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    var sHTML = that.template(response);
	                    that.$el.html(sHTML);
	                    oWechat = that.$el.find("#wechat");
	                    oQQ = that.$el.find("#qq");
	                    oEmail = that.$el.find("#email");
	                    oSina = that.$el.find("#sina");
	                    oTaobao = that.$el.find("#taobao");
	                    oButton = that.$el.find(".action");

	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            oButton.on('click', function(){
	                App.mask.show();
	                var _wchat = oWechat.val(),
	                    _qq = oQQ.val(),
	                    _email = oEmail.val(),
	                    _sina = oSina.val(),
	                    _taobao = oTaobao.val(),
	                    _code = App.getAuth();

	                var param = {
	                    code: _code,
	                    wchat: _wchat,
	                    qq: _qq,
	                    email: _email,
	                    sina: _sina,
	                    taobao: _taobao
	                }
	                subInternetInfoModel.param = param;
	                subInternetInfoModel.execute(function(response){
	                    App.mask.hide();
	                    if(response.status == "1"){
	                        App.toast.show("数据保存成功", true);
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            })
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"internet-info\">\r\n    <p class=\"t\">所涉信息均已作加密处理，请放心填写。</p>\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>微信号</label>\r\n                <p><input id=\"wechat\" value=\"<%=data.wchat%>\" type=\"text\" placeholder=\"输入你的微信号\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>QQ号</label>\r\n                <p><input id=\"qq\" value=\"<%=data.qq%>\" type=\"number\" placeholder=\"输入你的QQ号\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>常用邮箱</label>\r\n                <p><input id=\"email\" value=\"<%=data.email%>\" type=\"email\" placeholder=\"输入你常用的邮箱\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>新浪账号</label>\r\n                <p><input id=\"sina\" value=\"<%=data.sina%>\" type=\"text\" placeholder=\"输入你的新浪账号\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>淘宝账号</label>\r\n                <p><input id=\"taobao\" value=\"<%=data.taobao%>\" type=\"text\" placeholder=\"输入你的淘宝账号\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(10),__webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,Picker,morecontactTpl){
	    'use strict';
	    var _code,oContract1,oRelation1,oPhone1,
	        oContract2,oRelation2,oPhone2,
	        mainData={},pData={},
	        getContractModel=null,subContractModel=null,pageOptionModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            _code = App.getAuth();
	            pageOptionModel = new Models.pageOptionModel();
	            getContractModel = new Models.getContractModel(_code, "minor");
	            subContractModel = new Models.subContractModel();
	            App.header({
	                'title': '补充联系人'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(morecontactTpl),
	        events: {},
	        render: function(){
	            var that = this;
	            getContractModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    if(response.data){
	                        mainData = response.data;
	                        pData = {
	                            relation1: response.data.linkman1Relation || "配偶",
	                            relation2: response.data.linkman2Relation || "配偶"
	                        };
	                    }
	                    else{
	                        pData = {
	                            relation1: "配偶",
	                            relation2: "配偶"
	                        }
	                        mainData.data = {};
	                    }
	                    var sHTML = that.template({data: mainData});
	                    that.$el.html(sHTML);
	                    //获取元素标签
	                    oContract1 = that.$el.find('#contract1');
	                    oRelation1 = that.$el.find('#relation1');
	                    oPhone1 = that.$el.find('#phone1');
	                    oContract2 = that.$el.find('#contract2');
	                    oRelation2 = that.$el.find('#relation2');
	                    oPhone2 = that.$el.find('#phone2');

	                    that.picker(pData);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var oButton = $('.action');

	            oButton.on('click', function(e){
	                e.stopPropagation();
	                //if(that.validate()){
	                    App.mask.show();
	                    var _contract1 = oContract1.val(),
	                        _relation1 = oRelation1.attr('data-value'),
	                        _phone1 = oPhone1.val(),
	                        _contract2 = oContract2.val(),
	                        _relation2 = oRelation2.attr('data-value'),
	                        _phone2 = oPhone2.val();

	                    var param = {
	                        code: _code,
	                        contractType: "minor",
	                        linkman1: _contract1,
	                        linkman1Relation: _relation1,
	                        phone1: _phone1,
	                        linkman2: _contract2,
	                        linkman2Relation: _relation2,
	                        phone2: _phone2
	                    };
	                    subContractModel.param = param;
	                    subContractModel.execute(function(response){
	                        App.mask.hide();
	                        if(response.status == "1"){
	                            App.toast.show("数据保存成功", true);
	                        }
	                        else{
	                            App.queryError(response);
	                        }
	                    });
	                //}
	            })
	        },
	        validate: function(){
	            var _contract1 = oContract1.val(),
	                _relation1 = oRelation1.attr('data-value'),
	                _phone1 = oPhone1.val(),
	                _contract2 = oContract2.val(),
	                _relation2 = oRelation2.attr('data-value'),
	                _phone2 = oPhone2.val();
	            if(!_contract1){
	                App.toast.show('联系人1姓名不能为空', true);
	                return false;
	            }
	            else if(!_relation1){
	                App.toast.show('选择您与联系1的关系', true);
	                return false;
	            }
	            else if(!App.checkTelPhone(_phone1)){
	                App.toast.show('手机号输入有误，请重新输入', true);
	                return false;
	            }
	            else if(!_contract2){
	                App.toast.show('联系人2姓名不能为空', true);
	                return false;
	            }
	            else if(!_relation2){
	                App.toast.show('选择您与联系2的关系', true);
	                return false;
	            }
	            else if(!App.checkTelPhone(_phone2)){
	                App.toast.show('手机号输入有误，请重新输入', true);
	                return false;
	            }
	            else{
	                return true;
	            }
	        },
	        picker: function(pData){
	            //获取选择器数据
	            pageOptionModel.execute(function(_data){
	                if(!_data){
	                    return false;
	                }
	                //联系人1
	                var relation1 = new Picker({
	                    obj: 'relation1',
	                    column: 1,
	                    data: _data.mainContract,
	                    initValue: pData.relation1,
	                    closeFunc: function(picker){
	                        oRelation1.attr('data-value', picker.value[0]);
	                    }
	                });
	                relation1.init();

	                //联系人2
	                var relation2 = new Picker({
	                    obj: 'relation2',
	                    column: 1,
	                    data: _data.minorContract,
	                    initValue: pData.relation2,
	                    closeFunc: function(picker){
	                        oRelation2.attr('data-value', picker.value[0]);
	                    }
	                });
	                relation2.init();
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"contact-info\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>联系人1</label>\r\n                <p><input id=\"contract1\" value=\"<%=data.linkman1%>\" type=\"text\" placeholder=\"输入联系人姓名\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>与我关系</label>\r\n                <p><input id=\"relation1\" value=\"<%=data.linkman1Relation%>\" data-value=\"<%=data.linkman1Relation%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>手机号码</label>\r\n                <p><input id=\"phone1\" value=\"<%=data.phone1%>\" type=\"tel\" maxlength=\"11\" placeholder=\"输入联系人手机号\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>联系人2</label>\r\n                <p><input id=\"contract2\" value=\"<%=data.linkman2%>\" type=\"text\" placeholder=\"输入联系人姓名\"/></p>\r\n            </li>\r\n            <li>\r\n                <label>与我关系</label>\r\n                <p><input id=\"relation2\" value=\"<%=data.linkman2Relation%>\" data-value=\"<%=data.linkman2Relation%>\" type=\"text\" readonly placeholder=\"请选择\"/></p>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n            <li>\r\n                <label>手机号码</label>\r\n                <p><input id=\"phone2\" value=\"<%=data.phone2%>\" type=\"tel\" maxlength=\"11\" placeholder=\"输入联系人手机号\"/></p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,evidenceTpl){
	    'use strict';
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            App.header({
	                'title': '证明材料'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(evidenceTpl),
	        events: {},
	        render: function(){
	            var that = this,
	                sHTML = that.template();
	            that.$el.html(sHTML);
	            that.eventsHandler();
	            App.loading.hide();
	            App.maskLayer.hide();
	        },
	        hide: function(){

	        },
	        eventsHandler: function(){
	            var that = this;
	            //模块页面加载
	            that.$el.find('a').on('click', function(){
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump('Evidence/'+pageName);
	                    return false;
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"evidence\">\r\n    <div class=\"menu-block\">\r\n        <ul>\r\n            <li>\r\n                <a data-page=\"Job\" href=\"javascript:;\">\r\n                    <label>工作证明</label>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-page=\"Edu\" href=\"javascript:;\">\r\n                    <label>学历证明</label>\r\n                    <i class=\"icon icon-arrow-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(47)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,evidencejobTpl){
	    'use strict';
	    var oButton,jobEmail,
	        subJobProveModel=null,getJobInfoModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            subJobProveModel = new Models.subJobProveModel();
	            getJobInfoModel = new Models.getJobInfoModel(App.getAuth());
	            App.header({
	                'title': '工作证明'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(evidencejobTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();

	            var that = this;
	            getJobInfoModel.execute(function(response){
	                if(response.status == "1"){
	                    jobEmail = response.data.jobEmail || "";
	                    var sHTML = that.template(response);
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            })
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;

	            //引用第三方插件（调取相册或相机）
	            App.addCameraJS(['mobileFix','exif', 'lrz']);
	            var input = $('.upload-pic input');
	            input.on('change', function(){
	                var oDiv = $(this).next();
	                lrz(this.files[0], {width: 400}, function (results) {
	                    var img = new Image();
	                    img.src = results.base64;
	                    oDiv.html(img);
	                });
	            });

	            //保存图片
	            oButton = that.$el.find(".action");
	            oButton.on("click", function(e){
	                e.stopPropagation();
	                var f1 = that.$el.find("#jobFile img").attr("src") || "",
	                    f2 = that.$el.find("#moneyFile img").attr("src") || "";
	                var param = {
	                    code: App.getAuth(),
	                    jobEmail: jobEmail,
	                    jobFile: that._replace(f1),
	                    moneyFile: that._replace(f2)
	                }
	                subJobProveModel.param = param;
	                subJobProveModel.execute(function(response){
	                    if(response.status == "1"){
	                        App.toast.show("图片保存成功", true);
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            })
	        },
	        _replace: function(imgData){
	            return imgData.replace(/^data:image\/(png|jpeg);base64,/, "");
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"evidence\">\r\n    <div class=\"filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>工作证明</label>\r\n                <div class=\"upload-pic clear\">\r\n                    <span class=\"t\">上传图片格式工作证明材料。</span>\r\n                    <div class=\"pic\">\r\n                        <input type=\"file\" capture=\"camera\" />\r\n                        <div class=\"report\" id=\"jobFile\">\r\n                            <%if(data.jobPicUrl){%>\r\n                            <img src=\"<%=data.jobPicUrl%>\"/>\r\n                            <%}%>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <label>财力证明</label>\r\n                <div class=\"upload-pic clear\">\r\n                    <span class=\"t\">上传图片格式财力证明材料。</span>\r\n                    <div class=\"pic\">\r\n                        <input type=\"file\" capture=\"camera\" />\r\n                        <div class=\"report\" id=\"moneyFile\">\r\n                            <%if(data.incomePicUrl){%>\r\n                            <img src=\"<%=data.incomePicUrl%>\"/>\r\n                            <%}%>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(49)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,evidencedegreeTpl){
	    'use strict';
	    var oButton,mainData,subEduProveModel=null,getProveInfoModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            subEduProveModel = new Models.subEduProveModel();
	            getProveInfoModel = new Models.getProveInfoModel(App.getAuth());
	            App.header({
	                'title': '学历证明'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(evidencedegreeTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();

	            var that = this;
	            getProveInfoModel.execute(function(response){
	                if(response.status == "1"){
	                    var sHTML = that.template(response);
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            })
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;

	            //引用第三方插件（调取相册或相机）
	            App.addCameraJS(['mobileFix','exif', 'lrz']);
	            var input = $('.upload-pic input');
	            input.on('change', function(){
	                var oDiv = $(this).next();
	                lrz(this.files[0], {width: 400}, function (results) {
	                    var img = new Image();
	                    img.src = results.base64;
	                    oDiv.html(img);
	                });
	            });

	            //保存图片
	            oButton = that.$el.find(".action");
	            oButton.on("click", function(e){
	                e.stopPropagation();
	                var f1 = that.$el.find("#eduFile1 img").attr("src") || "",
	                    f2 = that.$el.find("#eduFile2 img").attr("src") || "",
	                    f3 = that.$el.find("#eduFile3 img").attr("src") || "",
	                    f4 = that.$el.find("#eduFile4 img").attr("src") || "";
	                var param = {
	                    code: App.getAuth(),
	                    eduFile1: that._replace(f1),
	                    eduFile2: that._replace(f2),
	                    eduFile3: that._replace(f3),
	                    eduFile4: that._replace(f4)
	                }
	                subEduProveModel.param = param;
	                subEduProveModel.execute(function(response){
	                    if(response.status == "1"){
	                        App.toast.show("图片保存成功", true);
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            })
	        },
	        _replace: function(imgData){
	            return imgData.replace(/^data:image\/(png|jpeg);base64,/, "");
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"evidence-degree\">\r\n    <div class=\"degree\">\r\n        <label>上传图片格式学历证明材料</label>\r\n        <div class=\"upload-pic clear\">\r\n            <div class=\"pic\">\r\n                <input type=\"file\" capture=\"camera\" />\r\n                <div class=\"report\" id=\"eduFile1\">\r\n                    <%if(data.eduPicUrl && data.eduPicUrl[0]){%>\r\n                    <img src=\"<%=data.eduPicUrl[0]%>\"/>\r\n                    <%}%>\r\n                </div>\r\n            </div>\r\n            <div class=\"pic\">\r\n                <input type=\"file\" capture=\"camera\" />\r\n                <div class=\"report\" id=\"eduFile2\">\r\n                    <%if(data.eduPicUrl && data.eduPicUrl[1]){%>\r\n                    <img src=\"<%=data.eduPicUrl[1]%>\"/>\r\n                    <%}%>\r\n                </div>\r\n            </div>\r\n            <div class=\"pic\">\r\n                <input type=\"file\" capture=\"camera\" />\r\n                <div class=\"report\" id=\"eduFile3\">\r\n                    <%if(data.eduPicUrl && data.eduPicUrl[2]){%>\r\n                    <img src=\"<%=data.eduPicUrl[2]%>\"/>\r\n                    <%}%>\r\n                </div>\r\n            </div>\r\n            <div class=\"pic\">\r\n                <input type=\"file\" capture=\"camera\" />\r\n                <div class=\"report\" id=\"eduFile4\">\r\n                    <%if(data.eduPicUrl && data.eduPicUrl[3]){%>\r\n                    <img src=\"<%=data.eduPicUrl[3]%>\"/>\r\n                    <%}%>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">提交</button></div>\r\n    <p class=\"t\">请提供可证明学历的证书，如毕业证书、学位证书等（最多4张）。</p>\r\n</div>\r\n<%}%>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(51)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,limitnotenoughTpl){
	    'use strict';
	    var backUrl,myLimitOrderModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            backUrl = App.getListingData().backUrl;
	            myLimitOrderModel = new Models.myLimitOrderModel(App.getAuth());
	            App.header({
	                'title': '应花分期'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(limitnotenoughTpl),
	        events: {},
	        render: function(){
	            var that = this;

	            myLimitOrderModel.async = false;
	            myLimitOrderModel.execute(function(response){
	                App.mask.hide();
	                if(response.status == "1"){
	                    var _amount = App.getListingData().amount,
	                        _limit = response.data.limit,
	                        difference = 0;
	                    if(Number(_amount) > Number(_limit)){
	                        difference = Number(_amount) - Number(_limit);
	                    }
	                    else{
	                        difference = Number(_limit) - Number(_amount);
	                    }
	                    var mainData = {
	                        amount: _amount,
	                        limit: _limit,
	                        difference: difference
	                    }
	                    var sHTML = that.template({data: mainData});
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            //选择其他支付方式
	            that.$el.find(".action").on('click', function(){
	                App.jumpTo(backUrl);
	                return false;
	            })
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"shortfall\">\r\n    <div class=\"amount\">\r\n        <p>恭喜您，已经成功激活应花分期</p>\r\n        <label>￥<%=data.limit%></label>\r\n        <p class=\"red\">您的应花分期额度不足以支付当前订单</p>\r\n    </div>\r\n    <div class=\"order filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>订单金额</label>\r\n                <p><%=data.amount%>元</p>\r\n            </li>\r\n            <li>\r\n                <label>差额</label>\r\n                <p class=\"red\"><%=data.difference%>元</p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action btn-red\">选择其他付款方式</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(53)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,activationfailTpl){
	    'use strict';
	    var rule,openFailModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            rule = App.locaHandler().split('/')[1];
	            App.header({
	                'title': '应花分期',
	                backHandler: function(){
	                    if(rule == "HasOrder"){
	                        App.jumpTo(App.getListingData().backUrl);
	                        return false;
	                    }
	                    else{
	                        App.jump("My");
	                        return false;
	                    }
	                }
	            });
	        },
	        el: "#mainBody",
	        template: _.template(activationfailTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();

	            var that = this;
	            var sHTML = that.template({data: {rule: rule}});
	            that.$el.html(sHTML);
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            that.$el.find(".action").on("click", function(e){
	                e.stopPropagation();
	                App.jumpTo(App.getListingData().backUrl);
	                return false;
	            })
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"openfail\">\r\n    <p class=\"red\">\r\n        <i></i>\r\n        由于综合评分不足，您的应花分期额度激活失败\r\n    </p>\r\n</div>\r\n<%if(data.rule == \"HasOrder\"){%>\r\n<div class=\"submit-button\"><button class=\"action btn-red\">选择其他付款方式</button></div>\r\n<%}%>\r\n<%}%>";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(55)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,activationsuccessTpl){
	    'use strict';
	    var submitBtn,goShopBtn,phoneCodeBtn,noPhoneCode,smsVerifyCode,countdown=30,mainData={},
	        timer=null,phoneCodeModel=null,installmentOrderModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            phoneCodeModel = new Models.phoneCodeModel();
	            installmentOrderModel = new Models.installmentOrderModel();
	            App.header({
	                'title': '应花分期'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(activationsuccessTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;

	            var rule = App.locaHandler().split('/')[1];
	            mainData = App.getListingData();
	            mainData.rule = rule;
	            mainData.limit = App.gStore.get('userLimit');
	            mainData.phone = App.getPhoneStar(App.getPhone());
	            mainData.backGoodsUrl = App.getListingData().backGoodsUrl;
	            var sHTML = that.template({data: mainData});
	            that.$el.html(sHTML);

	            submitBtn = that.$el.find('#submit');
	            goShopBtn = that.$el.find('#goShop');
	            phoneCodeBtn = that.$el.find('#phoneCodeBtn');
	            noPhoneCode = that.$el.find('#noPhoneCode');
	            smsVerifyCode = that.$el.find("#smsVerifyCode");
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            //去购物
	            goShopBtn.on("click", function(e){
	                e.stopPropagation();
	                if(App.getListingData().backGoodsUrl){
	                    App.jumpTo(App.getListingData().backGoodsUrl);
	                }
	            });

	            //分期下单
	            submitBtn.on("click", function(e){
	                e.stopPropagation();
	                //验证短信
	                if(!smsVerifyCode.val()){
	                    App.toast.show("短信验证码输入有误", true);
	                    return false;
	                }
	                var param = {
	                    code: App.getAuth(),
	                    smsVerifyCode: smsVerifyCode.val(),
	                    yhOrderNo: App.getListingData().orderInfo.yhOrderNo,
	                    periods: App.getListingData().orderInfo.periods
	                }
	                installmentOrderModel.param = {data: JSON.stringify(param)};
	                installmentOrderModel.execute(function(response){
	                    if(response.status == "1"){
	                        App.jump('PaySuccess');
	                        return false;
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                });
	            });

	            //获取验证码
	            phoneCodeBtn.on('click', function(e){
	                e.stopPropagation();
	                var phone = App.getPhone(),
	                    $this = $(this),
	                    status = $this.attr('data-use');
	                if(status == "Y"){
	                    phoneCodeModel.param = "phoneNum="+phone+"&smsCode=order";
	                    phoneCodeModel.execute(function(response){
	                        if(response.status == "1"){
	                            //开启倒计时
	                            that.countDownTime($this);
	                            $this.addClass('disabled');
	                            $this.attr('data-use', 'N');
	                        }
	                        else{
	                            App.toast.show(response.msg, true);
	                        }
	                    });
	                }
	            });

	            //收不到验证码
	            noPhoneCode.on("click", function(e){
	                e.stopPropagation();
	                var phone = App.getAuth(),
	                    $this = $(this),
	                    status = $this.attr('data-use');
	                if(status == "Y"){
	                    phoneCodeModel.param = "phoneNum="+phone+"&smsCode=order_voice";
	                    phoneCodeModel.execute(function(response){
	                        if(response.status == "1"){
	                            $this.attr('data-use', 'N');
	                        }
	                        else{
	                            App.toast.show(response.msg, true);
	                        }
	                    });
	                }
	            })
	        },
	        countDownTime: function(obj){
	            //清除倒计时
	            clearTimeout(timer);

	            var that = this;
	            if (countdown == 0) {
	                obj.removeClass('disabled').html('获取验证码').attr('data-use', 'Y');
	                countdown = 30;
	                return false;
	            }
	            else{
	                obj.addClass('disabled').html('还剩' + countdown + '秒').attr('data-use', 'N');
	                countdown--;
	            }
	            timer = setTimeout(function(){
	                that.countDownTime(obj)
	            }, 1000);
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"shortfall\">\r\n    <div class=\"amount os\">\r\n        <p>恭喜您，已经成功激活应花分期</p>\r\n        <label>￥<%=data.limit%></label>\r\n    </div>\r\n\r\n    <%if(data.rule == 'HasOrder'){%>\r\n    <div class=\"order filed-block\">\r\n        <ul>\r\n            <li>\r\n                <label>分期购总价</label>\r\n                <p><%=data.amount%>元</p>\r\n            </li>\r\n            <li>\r\n                <label>分期期数</label>\r\n                <p><%=data.orderInfo.periods%>期</p>\r\n            </li>\r\n            <li>\r\n                <label>分期利息</label>\r\n                <p><%=data.orderInfo.interest%>/月</p>\r\n            </li>\r\n            <li>\r\n                <label>每月还款</label>\r\n                <p><%=data.orderInfo.monthlyFee%>元</p>\r\n            </li>\r\n            <li>\r\n                <label>首期还款日</label>\r\n                <p><%=data.orderInfo.firstRefundDate%></p>\r\n            </li>\r\n            <li style=\"padding-right: 5rem;\">\r\n                <p><input id=\"smsVerifyCode\" type=\"tel\" maxlength=\"6\" placeholder=\"输入短信验证码\"></p>\r\n                <span id=\"phoneCodeBtn\" data-use=\"Y\" class=\"phone-code\">获取验证码</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <p class=\"send-code clear\">\r\n        <span>发送验证码至 <%=data.phone%></span>\r\n        <span id=\"noPhoneCode\" data-use=\"Y\">收不到验证码？</span>\r\n    </p>\r\n    <p class=\"t\">点击提交表示阅读并同意<a data-page=\"Protocol/Loan\">《三方借款协议》</a>、<a data-page=\"Protocol/BS\">《购销协议》</a>、<a data-page=\"Protocol/Debited\">《委托扣款授权书》</a>。</p>\r\n    <div class=\"submit-button\"><button id=\"submit\" class=\"btn-red\">确认分期</button></div>\r\n    <%}else{%>\r\n        <%if(data.backGoodsUrl){%>\r\n    <div class=\"submit-button\"><button id=\"goShop\">去逛逛</button></div>\r\n        <%}%>\r\n    <%}%>\r\n</div>\r\n<%}%>";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(57)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,paysuccessTpl){
	    'use strict';
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            App.header({
	                'title': '应花分期'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(paysuccessTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            var sHTML = that.template();
	            that.$el.html(sHTML);
	            that.eventsHandler();
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	            that.$el.find('.action').on('click', function(){
	                App.jumpRef('My');
	                return false;
	            })
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pay-success\">\r\n    <p>\r\n        <i></i>\r\n        应花分期订单提交成功\r\n        <span class=\"red\">请留意审核短信提醒</span>\r\n    </p>\r\n    <div class=\"submit-button\"><button class=\"action btn-red\">完成</button></div>\r\n</div>";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(59)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,myTpl){
	    'use strict';
	    var resultData={},
	        myLimitOrderModel=null,getMyBillModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            myLimitOrderModel = new Models.myLimitOrderModel(App.getAuth());
	            getMyBillModel = new Models.getMyBillModel(App.getAuth());
	            App.header({
	                'title': '我的应花分期'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(myTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            myLimitOrderModel.execute(function(response){
	                if(response.status == "1"){
	                    resultData = response.data;
	                    resultData.phone = App.getPhoneStar(App.getPhone());
	                    //有订单时，获取当前应还、还款日
	                    if(resultData.hasOrder == "1"){
	                        getMyBillModel.async = false;
	                        getMyBillModel.execute(function(_data){
	                            if(_data.status == "1"){
	                                resultData.myBill = _data.data;
	                            }
	                            else{
	                                App.queryError(_data);
	                            }
	                        });
	                    }
	                    var sHTML = that.template({data: resultData});
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                aBtn = that.$el.find(".my a"),
	                repayButton = that.$el.find(".action");
	            //去还款
	            repayButton.on("click", function(e){
	                e.stopPropagation();
	                App.jump("Repayment");
	                return false;
	            })
	            //页面链接
	            aBtn.on("click", function(e){
	                e.stopPropagation();
	                var pageName = $(this).attr('data-page');
	                if(pageName){
	                    App.jump(pageName);
	                    return false;
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"my\">\r\n    <div class=\"desc\">\r\n        <span class=\"_a\">你的账号：<%=data.phone%></span>\r\n        <a class=\"_m\" data-page=\"MyInfo\" href=\"javascript:;\">我的应花资料</a>\r\n        <h4>\r\n            <label>应花分期额度</label>\r\n            <%if(data.isActivation == \"1\"){%>\r\n            ￥<%=data.limit%>\r\n            <%}else{%>\r\n            ￥2000-20000\r\n            <%}%>\r\n        </h4>\r\n        <%if(data.isActivation == \"0\"){%>\r\n        <a class=\"_o\" data-page=\"Activation\" href=\"javascript:;\">激活额度</a>\r\n        <%}%>\r\n        <%if(data.isActivation == \"1\" && data.limit == 0){%>\r\n        <a class=\"_o\" data-page=\"Activation\" href=\"javascript:;\">重新激活额度</a>\r\n        <%}%>\r\n    </div>\r\n    <div class=\"menu-block\">\r\n        <ul>\r\n            <li>\r\n                <%if(data.hasOrder == \"0\"){%>\r\n                <a href=\"javascript:;\">\r\n                    <label>没有待还款订单</label>\r\n                </a>\r\n                <%}else{%>\r\n                    <%if(data.orderStatus == \"3\"){%>\r\n                    <a data-page=\"OrderDetail\" href=\"javascript:;\">\r\n                        <label>订单详情</label>\r\n                        <i class=\"icon icon-arrow-right\"></i>\r\n                    </a>\r\n                    <ol>\r\n                        <li><label>当前应还</label><span><%=data.myBill.currentShouldRepay%>元</span></li>\r\n                        <li><label>还款日</label><span>\r\n                            <%=data.myBill.monthlyRepayDay%>\r\n                        </span></li>\r\n                    </ol>\r\n                    <%}else{%>\r\n                    <a data-page=\"OrderDetail\" href=\"javascript:;\">\r\n                        <label>您的应花分期订单正在审核中</label>\r\n                        <i class=\"icon icon-arrow-right\"></i>\r\n                    </a>\r\n                    <%}%>\r\n                <%}%>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <%if(data.hasOrder == \"1\"){%>\r\n    <div class=\"submit-button\"><button class=\"action btn-red\">去还款</button></div>\r\n    <%}%>\r\n</div>\r\n<%}%>";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(61)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,orderdetailTpl){
	    'use strict';
	    var oid,getOrderDetailModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            oid = App.getListingData().yhOrderNo;
	            console.log(App.getListingData());
	            getOrderDetailModel = new Models.getOrderDetailModel(App.getAuth(),oid);
	            App.header({
	                'title': '订单详情'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(orderdetailTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            getOrderDetailModel.execute(function(response){
	                if(response.status == "1"){
	                    var sHTML = that.template(response);
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            })
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this;
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"order-detail filed-block\" style=\"display: none;\">\r\n    <ul>\r\n        <li>\r\n            <label>商品名称</label>\r\n            <p>Apple iPhone 5 (A1700) 16G 8成新 你要买吗？</p>\r\n        </li>\r\n        <li>\r\n            <label>商品价格</label>\r\n            <p>4500元</p>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"order-detail filed-block\">\r\n    <ul>\r\n        <li>\r\n            <label>首付</label>\r\n            <p><%=data.downPayment%>元</p>\r\n        </li>\r\n        <li>\r\n            <label>分期金额</label>\r\n            <p><%=data.amount%>元</p>\r\n        </li>\r\n        <li>\r\n            <label>分期期数</label>\r\n            <p><%=data.installmentAmount%>期</p>\r\n        </li>\r\n        <li>\r\n            <label>月手续费</label>\r\n            <p><%=data.monthlyFee%>元</p>\r\n        </li>\r\n        <li>\r\n            <label>每期应还</label>\r\n            <p><%=data.periodRepay%>元</p>\r\n        </li>\r\n        <li>\r\n            <label>首期还款日</label>\r\n            <p><%=data.firstRepayDay%></p>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<%}%>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(63)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,repaymentTpl){
	    'use strict';
	    var getMyBillModel=null,repayModel=null,
	        nowIndex= 0;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            getMyBillModel = new Models.getMyBillModel(App.getAuth());
	            repayModel = new Models.repayModel();
	            App.header({
	                'title': '我要还款'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(repaymentTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            getMyBillModel.execute(function(response){
	                if(response.status == "1"){
	                    if(response.data){
	                        var sHTML = that.template(response);
	                        that.$el.html(sHTML);
	                        that.eventsHandler();
	                    }
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                aItem = that.$el.find('.item'),
	                arrows = that.$el.find('.arrow'),
	                actionBtn = that.$el.find('.action');

	            //分期选择
	            aItem.each(function(){
	                var $this = $(this);
	                if($this.attr('data-status') == "repay"){
	                    $('.radio i', $this).css("visibility", "hidden");
	                };
	                nowIndex = that.getNowIndex();
	                $this.on('click', function(e){
	                    e.stopPropagation();
	                    var status = $this.attr('data-status'),
	                        thisIndex = $this.index(),
	                        _checked = $this.attr('data-checked'),
	                        radio = $this.find('.radio i'),
	                        showAmount = $('#amount'),
	                        amount = Number(showAmount.html()),
	                        once = Number($this.find('.money').html());
	console.log(nowIndex);
	                    if(status == 'wait') {
	                        if (_checked == 'N') {
	                            if (thisIndex == nowIndex + 1) {
	                                nowIndex = thisIndex;
	                            }
	                            else {
	                                App.toast.show('不能跳期还款，请注意还款顺序', true);
	                                return false;
	                            }
	                            radio.attr('class', 'checked');
	                            $this.attr('data-checked', 'Y');
	                            showAmount.html(amount + once);
	                        }
	                        else{
	                            if (thisIndex == nowIndex) {
	                                nowIndex = thisIndex - 1;
	                            }
	                            else {
	                                App.toast.show('不能跳期还款，请注意还款顺序', true);
	                                return false;
	                            }
	                            radio.attr('class', 'unchecked');
	                            $this.attr('data-checked', 'N');
	                            showAmount.html(amount - once);
	                        }
	                    }
	                    else if(status == "delay"){
	                        App.toast.show('已逾期不可取消', true);
	                        return false;
	                    }
	                });
	            });

	            //还款明细展开&收缩
	            arrows.on('click', function(e){
	                e.stopPropagation();
	                var $this = $(this),
	                    _parent = $this.parent(),
	                    _show = _parent.parent().attr('data-show'),
	                    _arrow = $this.find('i'),
	                    _content = _parent.next();

	                //为N时，展开
	                if(_show == 'N'){
	                    _arrow.attr('class', 'icon-arrow-down');
	                    _parent.parent().attr('data-show', 'Y');
	                    _content.show();
	                }
	                //为Y时，收起
	                else{
	                    _arrow.attr('class', 'icon-arrow-up');
	                    _parent.parent().attr('data-show', 'N');
	                    _content.hide();
	                }
	            });

	            //查看分期明细
	            that.$el.find('#viewDetail').on('click', function(e){
	                e.stopPropagation();
	                App.jump('Repayment/Detail');
	                return false;
	            });

	            //百度还款
	            actionBtn.on('click', function(e){
	                e.stopPropagation();
	                //获取还款期次
	                var periods = '';
	                aItem.each(function(){
	                    var $this = $(this);
	                    if($this.attr('data-checked') == 'Y'){
	                        periods += $this.attr('data-periods') + ',';
	                    }
	                });
	                var param = {
	                    code: App.getAuth(),
	                    periods: periods.substring(0, periods.length-1)
	                }
	                repayModel.param = param;
	                repayModel.execute(function(response){
	                    if(response.status == "1" && response.error == "00000000"){
	                        if(response.data){
	                            App.jumpTo(response.data);
	                        }
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                })
	            });
	        },
	        getNowIndex: function(){
	            var that = this,
	                arr = [];
	            that.$el.find('.item').each(function(){
	                var status = $(this).attr('data-status');
	                if(status == 'wait'){
	                    arr.push($(this).index());
	                }
	            });
	            return arr[0];
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"repayment\">\r\n    <%if(data.maxOverdueDays > 0){%>\r\n    <p class=\"t\">距还款日<%=data.recentlyRefundDays%>天</p>\r\n    <%}%>\r\n    <div class=\"total panel\">\r\n        <p>\r\n            本次还款金额\r\n            <em>￥<i id=\"amount\"><%=data.currentShouldRepay%></i></em>\r\n        </p>\r\n        <span class=\"s\">还款日 <i class=\"red\"><%=data.monthlyRepayDay%></i></span>\r\n        <span class=\"d\">\r\n            <%if(data.recentlyRefundDays > 0){%>\r\n            距离还款日<%=data.recentlyRefundDays%>天\r\n            <%}else{%>\r\n            今天是您的还款日\r\n            <%}%>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"list panel\">\r\n        <%if(data.singleDetail.length > 0){%>\r\n            <%_.each(data.singleDetail, function(item, key){%>\r\n\r\n            <%if(item.repayStatus == \"1\"){%>\r\n            <div data-status=\"repay\" data-show=\"N\" class=\"item\">\r\n            <%}else{%>\r\n                <%if(item.isOverdue == \"1\"){%>\r\n            <div data-status=\"delay\" data-show=\"N\" data-checked=\"Y\" data-periods=\"<%=item.period%>\" class=\"item\">\r\n                <%}else{%>\r\n                    <%if(item.isOverdue == \"0\" && key-1 == 0){%>\r\n            <div data-status=\"wait\" data-show=\"N\" data-checked=\"Y\" data-periods=\"<%=item.period%>\" class=\"item\">\r\n                    <%}else{%>\r\n            <div data-status=\"wait\" data-show=\"N\" data-checked=\"N\" data-periods=\"<%=item.period%>\" class=\"item\">\r\n                    <%}%>\r\n                <%}%>\r\n            <%}%>\r\n                <div class=\"hd\">\r\n                    <p class=\"radio\">\r\n                        <%if(item.isOverdue == \"1\"){%>\r\n                            <i class=\"checked\"></i>\r\n                        <%}else{%>\r\n                            <%if(key-1 == 0){%>\r\n                            <i class=\"checked\"></i>\r\n                            <%}else{%>\r\n                            <i class=\"unchecked\"></i>\r\n                            <%}%>\r\n                        <%}%>\r\n                        <span><%=item.period%>期</span>\r\n                    </p>\r\n                    <p>应还 <span class=\"money\"><%=item.shouldRepay%></span>元</p>\r\n                    <p class=\"arrow\">\r\n                        <%if(item.repayStatus == \"1\"){%>\r\n                        <span class=\"hGrey\">已还款</span>\r\n                        <%}else{%>\r\n                            <%if(item.overdueDays > 0){%>\r\n                            <span class=\"red\">已逾期<%=item.overdueDays%>天</span>\r\n                            <%}else{%>\r\n                                <%if(item.toRefundDays == 0){%>\r\n                                <span class=\"purple\">今天是您的还款日</span>\r\n                                <%}else{%>\r\n                                <span class=\"purple\">距还款日<%=item.toRefundDays%>天</span>\r\n                                <%}%>\r\n                            <%}%>\r\n                        <%}%>\r\n\r\n                        <i class=\"icon-arrow-up\"></i>\r\n                    </p>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <ul class=\"clear\">\r\n                        <li><label>本期金额</label><%=item.currentAmount%>元</li>\r\n                        <li><label>应还款日</label><%=item.shouldRepayDay%></li>\r\n                        <li><label>逾期费用</label><%=item.overdueFee%>元</li>\r\n                        <li><label>滞纳金</label><%=item.delayingFee%>元</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <%})%>\r\n        <%}%>\r\n    </div>\r\n\r\n    <div class=\"ft panel\">\r\n        <ul>\r\n            <li>\r\n                全部结清还需\r\n                <span><em id=\"surplus\"><%=data.settleAmount%></em>元</span>\r\n            </li>\r\n            <li id=\"viewDetail\">\r\n                本次分期明细\r\n                <span>剩余<%=data.remainingPeriod%>期</span>\r\n                <i class=\"icon icon-arrow-right\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"submit-button\"><button class=\"action\">百度支付还款</button></div>\r\n</div>\r\n<%}%>";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(65)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,repaymentdetailTpl){
	    'use strict';
	    var getMyBillModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            getMyBillModel = new Models.getMyBillModel(App.getAuth());
	            App.header({
	                'title': '本次分期明细'
	            });
	        },
	        el: "#mainBody",
	        template: _.template(repaymentdetailTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            getMyBillModel.execute(function(response){
	                if(response.status == "1"){
	                    var sHTML = that.template(response);
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var that = this,
	                arrows = that.$el.find('.arrow');

	            //还款明细展开&收缩
	            arrows.on('click', function(e){
	                e.stopPropagation();
	                var $this = $(this),
	                    _parent = $this.parent(),
	                    _show = _parent.parent().attr('data-show'),
	                    _arrow = $this.find('i'),
	                    _content = _parent.next();

	                //为N时，展开
	                if(_show == 'N'){
	                    _arrow.attr('class', 'icon-arrow-down');
	                    _parent.parent().attr('data-show', 'Y');
	                    _content.show();
	                }
	                //为Y时，收起
	                else{
	                    _arrow.attr('class', 'icon-arrow-up');
	                    _parent.parent().attr('data-show', 'N');
	                    _content.hide();
	                }
	            });
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<div class=\"repayment\">\r\n    <%if(data.maxOverdueDays > 0){%>\r\n    <p class=\"t\">借款最大逾期天数已达<%=data.maxOverdueDays%>天，请尽快还款！</p>\r\n    <%}%>\r\n    <div class=\"list detail panel\">\r\n        <%if(data.singleDetail.length > 0){%>\r\n            <%_.each(data.singleDetail, function(item){%>\r\n\r\n            <%if(item.repayStatus == \"1\"){%>\r\n            <div data-status=\"repay\" data-show=\"N\" class=\"item\">\r\n            <%}else{%>\r\n                <%if(item.isOverdue == \"1\"){%>\r\n            <div data-status=\"delay\" data-show=\"N\" data-checked=\"Y\" class=\"item\">\r\n                <%}else{%>\r\n            <div data-status=\"wait\" data-show=\"N\" data-checked=\"N\" class=\"item\">\r\n                <%}%>\r\n            <%}%>\r\n                <div class=\"hd\">\r\n                    <p class=\"radio\">\r\n                        <span><%=item.period%>期</span>\r\n                    </p>\r\n                    <p>应还 <span class=\"money\"><%=item.shouldRepay%></span>元</p>\r\n                    <p class=\"arrow\">\r\n                        <%if(item.repayStatus == \"1\"){%>\r\n                            <span class=\"hGrey\">已还款</span>\r\n                        <%}else{%>\r\n                            <%if(item.overdueDays > 0){%>\r\n                                <span class=\"red\">已逾期<%=item.overdueDays%>天</span>\r\n                            <%}else{%>\r\n                                <%if(item.toRefundDays == 0){%>\r\n                                <span class=\"purple\">今天是您的还款日</span>\r\n                                <%}else{%>\r\n                                <span class=\"purple\">距还款日<%=item.toRefundDays%>天</span>\r\n                                <%}%>\r\n                            <%}%>\r\n                        <%}%>\r\n\r\n                        <i class=\"icon-arrow-up\"></i>\r\n                    </p>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <ul class=\"clear\">\r\n                        <li><label>应还款日</label><%=item.shouldRepayDay%></li>\r\n                        <%if(item.actualRepayDay){%>\r\n                        <li><label>实际还款日</label><%=item.actualRepayDay%></li>\r\n                        <%}%>\r\n                        <li><label>本期金额</label><%=item.currentAmount%>元</li>\r\n                        <li><label>逾期费用</label><%=item.overdueFee%>元</li>\r\n                        <li><label>滞纳金</label><%=item.delayingFee%>元</li>\r\n                        <li class=\"black\"><label>本期应还总额</label><%=item.shouldRepay%>元</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <%})%>\r\n        <%}%>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(67)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,goTpl){
	    'use strict';
	    var _token,_status,_code,
	        listingData,myLimitOrderModel=null,isCodeMatchPhoneModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            _token = App.getQueryParameter('token');
	            _code = App.getAuth();
	            _status = App.gStore.get('_status');
	            myLimitOrderModel = new Models.myLimitOrderModel(_code);
	        },
	        el: "#mainBody",
	        template: _.template(goTpl),
	        events: {},
	        render: function(){
	            var that = this;

	            //3c商城微信公众号入口
	            var _3code = App.getQueryParameter("code"),
	                _3phone = App.getQueryParameter("phone");
	            if(_3code){
	                App.setAuth(_3code, _3phone);
	                App.jump("My");
	                return false;
	            }

	            //通过跳转页返回商户
	            /*if(_status) {
	                App.gStore.remove('_status');
	                history.back();
	            }
	            else{
	                App.gStore.set('_status', 'isEnter');
	            }*/

	            //验证商户合法性
	            if(!App.checkAccessToken(_token)){
	                App.mask.hide();
	                App.makePopBox({
	                    "num": 1,
	                    "title": "验证授权失败，请重新验证！",
	                    "tAlign": "center",
	                    "certainText": "我知道了",
	                    "close": false,
	                    "certain": function(){
	                        history.back();
	                    }
	                });
	                App.popBoxSingle.show();
	                return false;
	            }

	            //获取商户返回报文
	            listingData = App.getListingData();
	            //验证用户是否已登录（code）
	            if(!_code){
	                App.jump("Login");
	                return false;
	            }
	            //校验与手机号是否匹配
	            var _phone = listingData.phone;
	            isCodeMatchPhoneModel = new Models.isCodeMatchPhoneModel(_code,_phone);
	            isCodeMatchPhoneModel.async = false;
	            isCodeMatchPhoneModel.execute(function(response){
	                if(response.status == "1" && response.data.isMatched == "1"){
	                    //直接返回商户平台，并清空数据
	                    var sHTML = that.template();
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.mask.hide();
	                    App.makePopBox({
	                        "num": 1,
	                        "title": "登录超时，请重新登录！",
	                        "tAlign": "center",
	                        "certainText": "确定",
	                        "close": false,
	                        "certain": function(){
	                            App.jump("Login");
	                            return false;
	                        }
	                    });
	                    App.popBoxSingle.show();
	                    return false;
	                }
	            });
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){
	            var _fromPage = listingData.page,
	                _orderAmount = listingData.amount;

	            //页面切入：付款页面
	            if(_fromPage == "pay"){
	                myLimitOrderModel.async = false;
	                myLimitOrderModel.execute(function(response){
	                    if(response.status == "1"){
	                        var limit = response.data.limit,
	                            isActivation = response.data.isActivation;
	                            App.gStore.set("userLimit", limit);
	                        //是否激活额度
	                        if(isActivation == "0"){
	                            App.jump("Activation");
	                            return false;
	                        }
	                        //匹配额度与订单金额
	                        if(Number(limit) > Number(_orderAmount)){
	                            App.jump("ActivationSuccess/HasOrder");
	                            return false;
	                        }
	                        else{
	                            App.jump("LimitNotEnough");
	                            return false;
	                        }
	                    }
	                    else{
	                        App.queryError(response);
	                    }
	                });
	            }
	            //页面切入：我的应花资料
	            if(_fromPage == "personal"){
	                App.jump("My");
	                return false;
	            }
	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(69)], __WEBPACK_AMD_DEFINE_RESULT__ = function(App,Models,protocolTpl){
	    'use strict';
	    var mainData,rule,_title,_protocol,
	        getValueModel=null;
	    var View = Backbone.View.extend({
	        initialize: function(_params){
	            rule = App.locaHandler().split('/')[1];
	            getValueModel = new Models.getValueModel();
	            switch (rule){
	                case "Register":
	                    _title = "注册服务协议";
	                    break;
	                case "Private":
	                    _title = "隐私政策";
	                    break;
	                case "Loan":
	                    _title = "三方借款协议";
	                    _protocol = "THREE_SIDES";
	                    break;
	                case "BS":
	                    _title = "购销协议";
	                    _protocol = "PURCHASE_SALE";
	                    break;
	                case "Debited":
	                    _title = "委托扣款授权书";
	                    _protocol = "ENTRUST";
	                    break;
	            }
	            App.header({
	                'title': _title
	            });
	        },
	        el: "#mainBody",
	        template: _.template(protocolTpl),
	        events: {},
	        render: function(){
	            App.mask.hide();
	            var that = this;
	            getValueModel.param = {
	                code: App.getAuth(),
	                yhOrderNo: App.getListingData().yhOrderNo,
	                protocol: _protocol
	            }
	            getValueModel.execute(function(response){
	                if(response.status == "1"){
	                    mainData = response.data;
	                    mainData.rule = rule;
	                    var sHTML = that.template({data: mainData});
	                    that.$el.html(sHTML);
	                    that.eventsHandler();
	                }
	                else{
	                    App.queryError(response);
	                }
	            })
	        },
	        hide: function(){
	            App.mask.show();
	        },
	        eventsHandler: function(){

	        }
	    });
	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<%if(data){%>\r\n<%if(data.rule == \"Register\"){%>\r\n<div style=\"display: block;\" class=\"protocol\">\r\n<%}else{%>\r\n<div style=\"display: none;\" class=\"protocol\">\r\n<%}%>\r\n    <div class=\"block\">\r\n        <p>请务必认真阅读和理解本《用户注册协议》（下称“协议”）中规定的所有权利和限制。除非您接受本《协议》条款，否则您无权注册、登陆或使用本协议所涉及的相关服务。您一旦注册、登陆、使用或以任何方式使用本《协议》所涉及的相关服务的行为将视为对本《协议》的接受，即表示您同意接受本《协议》各项条款的约束。如果您不同意本《协议》中的条款，请不要注册、登陆或试用本《协议》相关服务。本《协议》是用户与上海前隆金融信息服务有限公司（下称“手机贷”）之间的法律协议，本《协议》具有和合同一样的法律效力。</p>\r\n        <p>本《协议》内容包括以下条款及已经发布的或将来可能发布的各类规则。所有规则为《协议》不可分割的一部分，与《协议》正文具有同等法律效力。本《协议》是由用户与手机贷共同签订的，适用于用户在手机贷的全部活动。在用户注册时，用户已经阅读、理解并接受本《协议》的全部条款及各类规则，并承诺遵守中国现行的法律、法规、规章及其他政府规定，如有违反而导致任何法律后果的发生，用户将以自己的名义独立承担所有相应的法律责任。</p>\r\n        <p>手机贷有权根据需要不时地制定、修改本《协议》或各类规则，如本《协议》及规则有任何变更，手机贷将在网站、手机客户端上刊载公告，经修订的《协议》、规则一经公布后，立即自动生效。用户应不时地注意本《协议》及附属规则地变更，若用户不同意相关变更，手机贷有权不经任何告知终止、中止本《协议》或者限制用户进入手机贷的全部或者部分板块且不承担任何法律责任。</p>\r\n        <p>用户确认本《协议》后，本《协议》即在用户和手机贷之间产生法律效力。用户按照手机贷规定的注册程序成功注册为用户，既表示同意并签署了本《协议》。本《协议》不涉及用户与手机贷的其他用户之间因网上交易而产生的法律关系及法律纠纷，但用户在此同意将全面接受和履行与手机贷其他用户在手机贷签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>一、使用限制</h3>\r\n        <p>用户确认本《协议》后，本《协议》即在用户和手机贷之间产生法律效力。用户按照手机贷规定的注册程序成功注册为用户，既表示同意并签署了本《协议》。本《协议》不涉及用户与手机贷的其他用户之间因网上交易而产生的法律关系及法律纠纷，但用户在此同意将全面接受和履行与手机贷其他用户在手机贷签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。</p>\r\n        <p>用户承诺合法使用手机贷提供的服务及网站内容。禁止在手机贷从事任何可能违反中国现行的法律、法规、规章和政府规范性文件的行为或者任何未经授权使用手机贷的行为，如擅自进入手机贷的未公开系统、不正当地使用密码和网站任何内容等。</p>\r\n        <p>手机贷只接受中华人民共和国（不包括香港特区、澳门特区及台湾地区）的18周岁以上的具有完全民事行为能力的自然人成为网站用户。如用户不符合资格，请勿注册。手机贷保留中止或终止用户身份的权利。用户注册成功后，不得将手机贷的用户名转让给第三方或者授权给第三方使用。用户确认，使用本人的用户的用户名和密码登录手机贷后在手机贷的一切行为均代表用户本人并由用户本人承担相应的法律后果。</p>\r\n        <p>用户有义务在注册时提供自己的真实资料，并保证诸如电子邮件地址、联系电话、联系地址、邮政编码等内容的有效性及安全性。如用户因网上交易与其他用户产生诉讼的，手机贷将根据隐私规则使用、披露相关用户资料。</p>\r\n        <p>经国家生效法律文书或行政处罚决定确认用户存在违法行为，或者手机贷有足够事实依据可以认定用户存在违法或违反本《协议》的行为的或者用户借款逾期未还的，用户在此同意并授权手机贷在因特网络上公布用户的违法、违约行为及用户事先提供给手机贷的信息和资料，并将该等内容记入任何与用户相关的信用资料和档案。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>二、涉及第三方网站</h3>\r\n        <p>手机贷的手机客户端、网站内容可能涉及由第三方所有、控制或者运营的其他网站（以下称“第三方网站”）。手机贷不能保证也没有义务保证第三方网站上的信息的真实性和有效性。用户确认按照第三方网站的服务协议使用第三方网站，而不是按照本协议。第三方网站不是手机贷推荐或者介绍的，第三方网站的内容、产品、广告和其他任何信息均由用户自行判断并承担风险，而与手机贷无关。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>三、免责声明</h3>\r\n        <p>除手机贷明确表示提供担保的业务外，手机贷提供的服务中不带有对手机贷中的任何用户、任何交易的任何保证或条件，无论是明示、默示或法定的，因此手机贷及其股东、创建人、高级职员、董事、代理人、关联公司、母公司、子公司和雇员等均不能完全保证网站内容的真实性、充分性、及时性、可靠性、完整性和有效性，并且免除任何由此引起的法律责任。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>四、责任限制</h3>\r\n        <p>在任何情况下，手机贷对用户使用手机贷服务而产生的任何形式的直接或间接损失均不承担法律责任，包括但不限于资金损失、利润损失、营业中断损失等。因为手机贷或者涉及的第三方网站的设备、系统存在缺陷或者因为计算机病毒造成的损失，手机贷均不负责赔偿，用户的补救措施只能是与手机贷终止本协议并停止使用手机贷。但是，中国现行法律、法规另有规定的除外。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>五、网站内容监测</h3>\r\n        <p>手机贷没有义务监测网站、手机端内容，但是用户确认并同意手机贷有权不时地根据法律、法规、政府要求披露、修改或者删除必要的、合适的信息，以便更好地运营手机贷并保护自身及手机贷的其他合法用户。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>六、个人信息授权</h3>\r\n        <p>用户同意并不可撤销地授权手机贷对于用户提供的、手机贷自行收集的、经过认证的个人信息；授权范围包括：用户同意手机贷与业务相关的第三方对本人/本单位的相关交易信息进行收集，并在与业务相关的第三方之间共享；同时同意手机贷将查询获取的信息进行保存、整理、加工，但法律、法规、监管政策禁止查询的除外，当用户作为借款人借款逾期未还时，手机贷及作为借出人的其他用户可以使用用户的个人信息追索债权。</p>\r\n        <p>用户的个人信息包括：本机号码、IP地址\\互联网协议地址、网络连接状态、短信、通话记录、通讯录及用户提供的其他信息，以实现手机贷更好地为注册用户提供服务。手机贷可以根据本协议的规定使用或披露前述信息。</p>\r\n        <h5>1、用户身份限制</h5>\r\n        <p>未成年人（年龄18周岁以下人士）、中国大陆以外地区人士及自然人以外的组织等请勿向手机贷提交任何个人信息。</p>\r\n        <h5>2、涉及的个人信息</h5>\r\n        <p>用户提供给手机贷的个人信息及用户同意手机贷收集的个人信息的主要目的在于向用户提供一个顺利、有效和度身订造的交易体验。</p>\r\n        <p>手机贷可能自公开来源了解用户的情况，并为其度身订造手机贷服务、解决争议并有助确保在网站进行安全交易。</p>\r\n        <p>手机贷按照用户在手机贷网址上的行为自动追踪关于用户的某些资料。手机贷利用这些资料进行有关手机贷之用户的人口统计、兴趣及行为的内部研究，以更好地了解用户及向用户和手机贷的用户社区提供更好的服务。</p>\r\n        <p>手机贷在手机贷的某些网页上使用诸如“Cookies”的资料收集装置。</p>\r\n        <p>如果用户将个人通讯信息（例如：手机短信、电邮或信件）交付给手机贷，或如果其他用户或第三方向手机贷发出关于用户在手机贷上的活动或登录事项的通讯信息，手机贷可以将这些资料收集在用户的专门档案中。</p>\r\n        <h5>3、手机贷对用户的资料的使用</h5>\r\n        <p>用户同意手机贷可使用关于用户的个人信息（包括但不限于手机贷持有的有关用户的档案中的资料，及手机贷从用户目前及以前在手机贷上的活动所获取的其他资料）以解决争议、对纠纷进行调停、有助于确保在手机贷进行安全交易，并执行手机贷的服务协议。手机贷有时候可能调查多个用户以识别问题或解决争议，特别是手机贷可审查用户的资料以区分使用多个用户名或别名的用户。用户同意手机贷可以使用用户的个人信息以改进手机贷的推广和促销工作、分析网站的使用率、改善手机贷的内容和产品推广形式，并使手机贷的网站内容、设计和服务更能符合用户的要求。这些使用能改善手机贷的网页，以调整手机贷的网页使其更能符合用户的需求，从而使用户在使用手机贷服务时得到更为顺利、有效、安全及度身订造的交易体验。</p>\r\n        <p>为禁止用户在手机贷上的欺诈、非法或其他刑事犯罪活动，使手机贷免受其害，用户同意手机贷可通过人工或自动程序对用户的个人信息进行评价。</p>\r\n        <p>用户同意手机贷可以使用用户的个人信息以改进手机贷的推广和促销工作、分析网站的使用率、改善手机贷的内容和产品推广形式，并使手机贷的网站内容、设计和服务更能符合用户的要求。这些使用能改善手机贷的网页，以调整手机贷的网页使其更能符合用户的需求，从而使用户在使用手机贷服务时得到更为顺利、有效、安全及度身订造的交易体验。</p>\r\n        <p>用户同意手机贷利用用户的资料与用户联络并向用户传递（在某些情况下）针对用户的兴趣而提供的信息，例如：有针对性的广告条、行政管理方面的通知、产品提供以及有关用户使用手机贷的通讯。</p>\r\n        <h5>4、手机贷对用户信息的披露</h5>\r\n        <p>虽然手机贷采用行业标准惯例以保护用户的个人信息，鉴于技术限制，手机贷不能确保用户的全部私人通讯及其他个人信息不会通过本隐私规则中未列明的途径泄露出去。</p>\r\n        <p>手机贷有义务根据有关法律要求向司法机关和政府部门提供用户的个人信息。在用户未能按照与手机贷签订的《协议》或者与手机贷其他用户签订的借款协议等其他法律文本的约定履行自己应尽的义务时，手机贷有权根据自己的判断或者与该笔交易有关的其他用户的请求披露用户的个人信息，并做出评论。用户的借款逾期超过30天的，手机贷有权对用户提供的及手机贷自行收集的用户的个人信息和资料编辑入网站黑名单，用于审核逾期用户之后的借款申请。</p>\r\n        <h5>5、用户对其他用户的资料的使用</h5>\r\n        <p>在手机贷提供的交易活动中，用户无权要求手机贷提供其他用户的个人信息，除非符合以下条件：</p>\r\n        <p>\r\n            A. 用户已向法院起诉其他用户的在手机贷活动中的违约行为；<br>\r\n            B. 接受用户贷款的借款人逾期未归还借款本息；<br>\r\n            C. 手机贷被吊销营业执照、解散、清算、宣告破产或者其他有碍于用户收回借款本息的情形。\r\n        </p>\r\n        <h5>6、电子邮件和群组</h5>\r\n        <p>用户不得使用手机贷提供的站内信息服务、群组服务或其他电子邮件转发服务发出垃圾邮件、信息或其他可能违反手机贷的服务协议的内容。如果您利用手机贷的服务向没有在手机贷内注册的电子邮件地址发出电子邮件，手机贷除了利用该电子邮件地址发出用户的电子邮件之外将不作任何其他用途。手机贷不会出租或出售这些电子邮件地址。手机贷不会永久储存电子邮件信息或电子邮件地址。</p>\r\n        <h5>7、密码的安全性</h5>\r\n        <p>用户须对使用用户的用户名和密码所采取的一切行为负责。因此，用户不要向任何第三方披露用户在手机贷的用户名和密码，否则由此造成的损失由用户自行承担。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>七、补偿</h3>\r\n        <p>就任何第三方提出的，由于用户违反本协议及纳入本协议的条款和规则或用户违反任何法律、法规或侵害第三方的权利而产生或引起的每一种类和性质的任何索赔、要求、诉讼、损失和损害（实际的、特别的及有后果的），无论是已知或未知的，包括合理的律师费，用户同意就此对手机贷和（如适用）手机贷的母公司、子公司、关联公司、高级职员、董事、代理人和雇员进行补偿并使其免受损害。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>八、终止</h3>\r\n        <p>除非手机贷终止本协议或者用户申请终止本协议且经手机贷同意，否则本协议始终有效。手机贷有权在不通知用户的情况下在任何时间终止本协议或者限制用户使用手机贷。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>九、适用法律和管辖</h3>\r\n        <p>因手机贷提供服务所产生的争议均适用中华人民共和国法律，并由手机贷住所地的上海市有管辖权的人民法院管辖。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>十、附加条款</h3>\r\n        <p>在手机贷的某些部分或页面中可能存在除本协议以外的单独的附加服务条款，当这些条款存在冲突时，在该些部分和页面中附加条款优先适用。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>十一、条款的独立性</h3>\r\n        <p>若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>十二、投诉与建议</h3>\r\n        <p>用户对手机贷有任何投诉和建议，请将投诉和建议致电021-80203636或者手机贷APP平台联络客服。</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n<%if(data.rule == \"Private\"){%>\r\n<div style=\"display: block;\" class=\"protocol\">\r\n<%}else{%>\r\n<div style=\"display: none;\" class=\"protocol\">\r\n<%}%>\r\n    <div class=\"block\">\r\n        <p>上海前隆金融信息服务有限公司（以下简称“前隆金融”）重视本公司旗下移动客户端产品（如：手机贷客户端）、网站、产品及服务之用户的隐私，并且尽商业上合理的一切努力保护这些隐私。本隐私政策涉及在您与前隆金融互动（例如当您访问本公司网站、使用或购买本公司产品或服务或与前隆金融员工交流时）的过程中随时可能涉及到的个人信息的收集、使用和披露。请阅读下文以详细了解我们收集何种信息、我们如何处理这些信息以及我们如何使用您的个人信息。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>一、信息收集与使用</h3>\r\n        <p>我们收集某些个人信息的主要目的是为了尽可能为用户提供最高水平的服务。掌握这些个人信息使我们能够向用户发送产品公告、软件更新和优惠信息，提供方便而又个性化的用户访问服务，改进产品特性及功能。前隆金融的注册用户可以登录旗下产品（如：手机贷客户端、手机贷微信公众平台、手机贷官方网站） 访问所在账户信息，随时查看并修改其个人信息。未注册用户也可以使用部分前隆金融旗下产品及服务，我们不收集未注册用户的个人信息。在许多情况下，前隆金融可能收集信息并将其用于内部业务目的，例如：</p>\r\n        <p>1. 姓名、电子邮件地址、联系方式等个人信息，您使用哪些前隆金融产品及服务，以及您的信用卡卡号等交易信息，以交付并支持本公司的产品及服务；</p>\r\n        <p>2. 人口统计学信息，例如您的职业以及您使用电脑和移动设备的位置-以深化我们对客户需求的了解；</p>\r\n        <p>3. 来自于您电脑或移动设备上的浏览器或前隆金融旗下移动客户端应用的访问跟踪信息，包括IP地址、LBS位置信息、移动产品信息、cookies以及您请求访问的页面，以分析动态、管理网站、追踪您在网站上的浏览历史、发送相关广告并收集广泛的人口统计学信息以供汇总使用（请注意我们不会将IP地址与“个人可识别信息”关联起来）并遵循我们在中国法律项下所承担的法律义务；及不对单个用户进行个人识别的多用户汇总信息，例如地理区域，但我们可能与业务合作伙伴共享这些信息，以深化我们对客户需求的了解并提供相关服务您可以随时选择不再参与这些服务和（或）删除您在任何前隆金融旗下产品上发布的信息和资料。如果您注销账户，您或访问服务的其他人将无法再访问该等信息，但是由于计算机系统的运行和持续数据备份及存档特性，该等信息的残余副本可能续存您在前隆金融用户名及相关信息；</p>\r\n        <p>4. 前隆金融旗下产品允许您基于自己的个人信息创建一个“前隆金融用户名”。 创建用户名后您才能充分利用前隆金融提供的服务。这也使得前隆金融能够提供更加个性化而又便捷的服务。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>二、对第三方的信息披露</h3>\r\n        <p>当您在前隆金融旗下产品上访问或发布信息时，即表示您允许前隆金融为提供前隆金融服务之目的而记录、使用该等信息并对其采取其他行动（按适用法律要求和/或如服务条款所述）。我们不会与他人分享这些信息，亦不会将其出售、出租或以其他方式分发给他人（按照本隐私政策之规定披露的除外）。下列情形下，前隆金融可以与外部人士分享您的信息：</p>\r\n        <p>1. 您明确同意我们分享信息；</p>\r\n        <p>2. 为了满足您对产品或服务的要求，我们需要分享您的信息；</p>\r\n        <p>3. 我们善意地认为，为了遵守我们的法定义务，分享或以其他方式允许访问、披露、使用或保存该等信息是必要的；</p>\r\n        <p>4. 您明确要求来自于前隆业务合作伙伴的信息，在这种情况下，在收集信息时，收集个人信息方以及所应适用的隐私声明均将予以明确；</p>\r\n        <p>5. 我们认为为了履行我们的法律报告义务或为了调查、预防非法活动、涉嫌诈骗行为或对人身或财产的潜在威胁，或对该等情形采取行动，有必要向司法机关或其他有权行政机关披露您的信息；</p>\r\n        <p>6. 我们认为为了调查和/或披露可能违反我们服务条款的行为或执行这些服务条款，有必要披露您的信息；或您与我们的某一关联方或合作伙伴之间存在线上或线下（非互联网）关系，或提及的关联方或合作伙伴网站，并已经通过该合作伙伴或关联方之程序或网站注册前隆的在线服务，而我们与该关联方或合作伙伴之间亦存在某种关系。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>三、Cookies与跟踪像素</h3>\r\n        <p>Cookies是您访问过某一网站后可能存储在您硬盘上的小数据文件，通常包括匿名唯一识别符。Cookie无法从您的硬盘上取得任何其他数据、传播计算机病毒或捕捉您的电子邮件地址。前隆金融旗下网站将Cookies用于用户认证、记录用户偏好、需使用用户身份的推广活动、记录受众规模及流量模式及某些其他目的。我们的电子邮件消息和新闻简报中可能包含跟踪像素，用于确定消息是否被开启以及链接是否确实被查看。</p>\r\n        <p>您可以将浏览器设置为接受cookies、拒绝cookies或在使用cookie时通知。但是，如果您将浏览器设置为拒绝cookies，您可能将无法使用需要您登录的前隆金融旗下产品或服务或利用前隆金融旗下产品的全部功能。如果您不希望接收跟踪像素，您需要禁止电子邮件客户端中的HTML图像，但这样可能会影响您查看收到的其他电子邮件中的图片。</p>\r\n        <p>前隆金融可能允许在我们旗下产品的部分网页上做广告的第三方业务合作伙伴在您的计算机中保存它们自己的cookies。这些业务合作伙伴无权访问前隆金融旗下网站的cookies，并且它们的使用受其自身隐私政策的约束。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>四、数据安全</h3>\r\n        <p>前隆金融致力于保护您的信息安全，并为此采取合理的预防措施。但是，互联网数据传输，无论是有线的还是无线的，均无法保证100%的安全，因此我们无法保证您传输给我们的信息绝对安全。因此，您确认，您对传输给我们的信息自担风险。一旦我们收到您传输的数据，我们将做出一切商业上合理的努力确保其在我们系统上的安全：</p>\r\n        <p>1. 您的前隆金融密码受到加密保护，并且只有您有权访问；</p>\r\n        <p>2. 存储在我们的系统上的您的个人信息及数据受到各种物理、电子和程序措施的保护。它们存储在安全的设施上，并且前隆金融将通过物理和网络方式接触该等设备的权限局限在受过严格训练的部分员工，并定期评估其技术、设备、程序及潜在风险，以维护用户数据的安全和隐私。通常，前隆金融非业务职责内员工并不监控或查看前隆服务中存储的您的个人信息或内容，但如果我们得知我们的服务条款可能已被违反并且需要对此进行确认，或我们确定我们有义务审查或者向以法律或适用法规所授予权行事的其他方提供您的个人信息或内容，则您的个人信息或内容可能会被查看；及某些前隆服务支持使用标准SSL加密以保护数据传输。但是，由于防火墙或其他安全软件可能发生故障，这并不保证该等数据传输不可能被访问、修改或删除。</p>\r\n        <p>3. 如果前隆金融得知安全系统漏洞，我们可能联络您在注册时提供的电子邮件地址或在我们的旗下产品上发布通知，以试图告知您并提供关于保护措施（如适用）的信息。依据您的居住地，您可能依法享有以书面形式接收该等通知的权利。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>五、修改与更新</h3>\r\n        <p>由于本隐私政策可能不时被更新，我们将修改并在旗下产品《隐私政策》条款顶部显示其生效日期。您应定期查看以了解我们保护所收集的个人信息的方案及程序。您继续使用前隆金融服务即构成您对本隐私政策及其任何更新版本的同意。</p>\r\n        <p>如果前隆金融出售其资产，与另一实体合并或申请破产，前隆金融旗下产品收集或在运营服务过程中收集的信息可能作为前隆金融资产被转让。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>六、联系我们</h3>\r\n        <p>欢迎您对本隐私政策和我们的服务条款提出意见。如有任何问题、意见或疑虑，请发电子邮件至feedback@mobanker.com或寄信至：上海前隆金融信息服务有限公司，中国上海市虹口区东大名路1050号绿地北外滩中心9楼。</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n<%if(data.rule == \"Loan\"){%>\r\n<div style=\"display: block;\" class=\"protocol\">\r\n<%}else{%>\r\n<div style=\"display: none;\" class=\"protocol\">\r\n<%}%>\r\n    <div class=\"block\">\r\n        <p class=\"no\">合同编号：<span class=\"blue\"><%=data.contractNo%></span></p>\r\n        <dl>\r\n            <dt>甲方（出借方）</dt>\r\n            <dd>姓名/名称：<span><%=data.lenderName%></span></dd>\r\n            <dd>身份证号码/地址：<span><%=data.lenderIdCard%></span></dd>\r\n\r\n            <dt>乙方（借款方/买方）</dt>\r\n            <dd>姓名：<span class=\"blue\"><%=data.borrowerName%></span></dd>\r\n            <dd>身份证号码：<span class=\"blue\"><%=data.borrowerIdCard%></span></dd>\r\n\r\n            <dt>丙方（卖方）：<%=data.sellerName%></dt>\r\n            <dd>地址：<span class=\"blue\"><%=data.sellerAddress%></span></dd>\r\n        </dl>\r\n    </div>\r\n    <div class=\"block\">\r\n        <strong>鉴于：</strong><br>\r\n        <p>甲方、乙方通过【应花商城】平台达成借款意愿，均同意网站服务协议和服务规则，并自愿根据该网站相关服务协议和规则达成本协议；</p>\r\n        <p>丙方是一家合法成立并有效存续的有限责任公司，系【应花商城】平台的入驻商家，为乙方提供商品及相关服务；</p>\r\n        <p>各方基于平等自愿原则，经协商一致，于【<%=data.sellerAddress%>】日通过【应花商城】平台达成协议如下，以资共同遵守：</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>一、借款基本信息</h3>\r\n        <p>甲方同意为乙方购买丙方商品进行融资，乙方指定相应出借资金由甲方直接支付给丙方，包括但不限于通过银行转账或第三方支付平台等支付的方式等。</p>\r\n        <p>丙方收到款项后，乙方与丙方形成买卖合同关系，该买卖合同关系仅限于乙方与丙方之间，与甲方无关；若因丙方产品质量问题存在争议或纠纷，相关纠纷由乙方与丙方协商解决，与甲方无关；若因任何原因导致退货、退款的，相关款项应由丙方返还甲方，款项返如数返还至甲方账户后，本协议终止。</p>\r\n        <p>本协议有效期内，乙方的还款顺序依次为先冲还利息、罚息，再冲还本金。</p>\r\n        <p>相关资金成本如下表：</p>\r\n        <table cellspacing=\"1\" cellpadding=\"0\">\r\n            <tr>\r\n                <th>借款本金数额</th>\r\n                <td>【<span><%=data.amount%></span>】</td>\r\n            </tr>\r\n            <tr>\r\n                <th>利率</th>\r\n                <td><span><%=data.interestRate%></span></td>\r\n            </tr>\r\n            <tr>\r\n                <th>每期偿还金额</th>\r\n                <td><span><%=data.repayAmountDesc%></span></td>\r\n            </tr>\r\n            <tr>\r\n                <th>借款期限/<br>还款分期月数</th>\r\n                <td><span><%=data.period%></span></td>\r\n            </tr>\r\n            <tr>\r\n                <th>还款日</th>\r\n                <td><span>如发生逾期，<%=data.repayDay%>元/笔/期</span></td>\r\n            </tr>\r\n            <tr>\r\n                <th>滞纳金</th>\r\n                <td><span><%=data.overdueFine%></span></td>\r\n            </tr>\r\n            <tr>\r\n                <th>逾期罚息</th>\r\n                <td>计算公式：当期应还金额 *罚息利率（<%=data.overdueCharge%>）*逾期天数</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n<%if(data.rule == \"BS\"){%>\r\n<div style=\"display: block;\" class=\"protocol\">\r\n<%}else{%>\r\n<div style=\"display: none;\" class=\"protocol\">\r\n<%}%>\r\n    <div class=\"block\">\r\n        <dl>\r\n            <dt>甲方（卖方）：<span class=\"blue\"><%=data.sellerName%></span></dt>\r\n            <dd>地址：<span class=\"blue\"><%=data.sellerAddress%></span></dd>\r\n\r\n            <dt>乙方（买方）：<span class=\"blue\"><%=data.buyerName%></span></dt>\r\n            <dd>身份证号码：<span class=\"blue\"><%=data.buyerIdCard%></span></dd>\r\n            <dd>电话：<span class=\"blue\"><%=data.buyerPhone%></span></dd>\r\n            <dd>地址：<span class=\"blue\"><%=data.buyerAddress%></span></dd>\r\n        </dl>\r\n    </div>\r\n    <div class=\"block\">\r\n        <p>甲方为应花分期平台入驻商家，为乙方提供产品销售服务；乙方为应花分期平台的注册用户，有意向甲方购买相关产品；甲、乙双方根据平等自愿原则，达成本协议如下：</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>一、\t合同标的、价款及支付方式</h3>\r\n        <dl class=\"proInfo\">\r\n            <dt>产品名称及价格</dt>\r\n            <dd>产品名称：<span class=\"blue\"><%=data.goodsName%></span></dd>\r\n            <dd>产品价格：<span class=\"blue\"><%=data.goodsPrice%></span></dd>\r\n        </dl>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>二、\t交货方式、交货日期及交货地点</h3>\r\n        <p>商户根据商品详情页内容完成交货</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>三、\t产品质量</h3>\r\n        <p>1．甲方所提供产品的应符合国家标准及相关法律规定的质量标准。</p>\r\n        <p>2．在质保期内如果甲方提供的产品出现质量问题，甲方需要在7个工作日内给予相应处理。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>四、\t对产品提出异议的时间和办法</h3>\r\n        <p>1．乙方在验收中，如果发现产品的品种、型号、规格、花色和质量不合规定，应妥为保管，并在7天内向甲方提出书面异议；乙方怠于通知或者自产品收到之日起超过7天未通知甲方的，视为产品合乎约定。</p>\r\n        <p>2．乙方因使用、保管、保养不善等造成产品质量下降的，不得提出异议。</p>\r\n        <p>3．甲方在接到需方书面异议后，应在7天内负责处理，否则，即视为默认乙方提出的异议和处理建议。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>五、\t违约责任</h3>\r\n        <p>1．甲方如违反本协议条款逾期交付产品的，需按协议要求承担相应违约责任并赔偿损失。</p>\r\n        <p>2．乙方如违反本协议条款逾期支付产品价款的，需按协议要求承担相应违约责任并赔偿损失。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <h3>六、\t争议解决及法律适用</h3>\r\n        <p>1．因执行本协议所发生的争议或与本协议有关的一切争议，双方应通过友好协商解决。如协商不成，则双方应将争议提交上海仲裁委员会仲裁解决。</p>\r\n        <p>2．本协议适用中华人民共和国大陆地区法律、法规。</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <p style=\"text-align: center;\">（以下无正文，为双方签署）</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <dl>\r\n            <dt>甲方：（签字或盖章）　<%=data.sellerName%></dt>\r\n            <dd>日期：<span class=\"blue\"><%=data.date%></span></dd>\r\n\r\n            <dt>乙方：（签字或盖章）　<%=data.buyerName%></dt>\r\n            <dd>日期：<span class=\"blue\"><%=data.date%></span></dd>\r\n        </dl>\r\n    </div>\r\n</div>\r\n\r\n\r\n<%if(data.rule == \"Debited\"){%>\r\n<div style=\"display: block;\" class=\"protocol\">\r\n<%}else{%>\r\n<div style=\"display: none;\" class=\"protocol\">\r\n<%}%>\r\n    <div class=\"block\">\r\n        <p>鉴于授权人<i> <%=data.authorizer%> </i>通过被授权人<i> <%=data.delegated%> </i>的平台于<i> <%=data.date%> </i>与出借人签署了《借款协议》，现授权人郑重就《借款协议》的还款事宜作出对被授权人的如下授权：</p>\r\n        <p>一、授权人同意被授权人在其逾期还款五日后（逾期第六日0点起），即可委托银行从包括但不限于接受借款的银行账户、以及归属授权人名下的其他任意银行账户内以约定的资费标准划付所欠的本息及逾期管理费。上述银行账户余额不足的，被授权人有权委托银行继续划付直至授权人还清所欠款项为止。由此造成授权人的不便或其他损失的，被授权人不承担法律责任；且在授权人欠款未清之前，该等委托划付还款方式不影响被授权人采取其他方式向授权人催收欠款。</p>\r\n        <p>二、授权人在指定账户中必须留有足够余额，否则因账户余额不足或不可归责于被授权人委托方的任何事由，导致无法及时扣款或扣款错误、失败， 责任由授权人自行承担。</p>\r\n        <p>三、借款协议效力中止或终止后，本授权书效力同时中止或终止，被授权人暂停或终止委托划付款项，借款协议效力恢复后，本授权书效力随即恢复。</p>\r\n        <p>四、本授权书自授权人确认之日起生效，至借款协议效力终止时终止。</p>\r\n        <p>五、授权人同意终止授权或变更账户、通讯地址时，应于当期款项交付日10个工作日前向被授权人递交书面通知，若因未及时通知被授权人而产生的一切风险、损失均由授权人自行承担。</p>\r\n        <p>六、授权人保证本授权书的真实性、合法性、有效性，被授权人依据本授权书进行的委托扣款操作引起的一切法律纠纷或风险，由授权人独立承担或解决。本授权书的复印件、扫描件与原件具有同等法律效力。</p>\r\n        <p>七、授权人接受借款银行账户信息：</p>\r\n        <p>\r\n            银行卡户名：<i> <%=data.bankUserName%> </i><br>\r\n            银行卡开户银行：<i> <%=data.bankName%> </i><br>\r\n            银行卡账号：<i> <%=data.bankCardNo%> </i><br>\r\n            身份证号码：<i> <%=data.idCard%> </i><br>\r\n            联系手机：<i> <%=data.phone%> </i><br>\r\n            授权人确认：<i> <%=data.authorizer%> </i><br>\r\n        </p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <p>（以下无正文，为各方签署）</p>\r\n    </div>\r\n    <div class=\"block\">\r\n        <p>授权人：<i> <%=data.authorizer%> </i></p>\r\n        <p>被授权人：<i> <%=data.delegated%> </i></p>\r\n        <p>日期：<i> <%=data.date%> </i></p>\r\n    </div>\r\n</div>\r\n<%}%>";

/***/ }
]);