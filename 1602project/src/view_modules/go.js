define('go', ['app','models','goTpl'], function(App,Models,goTpl){
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
});