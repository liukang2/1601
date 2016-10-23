define('activationsuccess', ['app','models','activationsuccessTpl'], function(App,Models,activationsuccessTpl){
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
});