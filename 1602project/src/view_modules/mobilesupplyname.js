define('mobilesupplyname', ['app','models','mobilesupplynameTpl'], function(App,Models,mobilesupplynameTpl){
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
});