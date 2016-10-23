define('findpassword', ['app','models','findpasswordTpl'], function(App,Models,findpasswordTpl){
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
});