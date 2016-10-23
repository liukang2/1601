define('registerfast', ['app','models','registerfastTpl'], function(App,Models,registerfastTpl){
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
});