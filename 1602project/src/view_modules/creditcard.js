define('creditcard', ['app','creditcardTpl'], function(App,creditcardTpl){
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
});