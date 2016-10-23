define('login', ['app','models','loginTpl'], function(App,Models,loginTpl){
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
});