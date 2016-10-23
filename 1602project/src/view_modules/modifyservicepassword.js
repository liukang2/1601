define('modifyservicepassword', ['app','models','modifyservicepasswordTpl'], function(App,Models,modifyservicepasswordTpl){
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
});