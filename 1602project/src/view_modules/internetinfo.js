define('internetinfo', ['app','models','internetinfoTpl'], function(App,Models,internetinfoTpl){
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
});