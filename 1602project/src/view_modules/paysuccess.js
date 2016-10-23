define('paysuccess', ['app','models','paysuccessTpl'], function(App,Models,paysuccessTpl){
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
});