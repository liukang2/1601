define('evidence', ['app','evidenceTpl'], function(App,evidenceTpl){
    'use strict';
    var View = Backbone.View.extend({
        initialize: function(_params){
            App.header({
                'title': '证明材料'
            });
        },
        el: "#mainBody",
        template: _.template(evidenceTpl),
        events: {},
        render: function(){
            var that = this,
                sHTML = that.template();
            that.$el.html(sHTML);
            that.eventsHandler();
            App.loading.hide();
            App.maskLayer.hide();
        },
        hide: function(){

        },
        eventsHandler: function(){
            var that = this;
            //模块页面加载
            that.$el.find('a').on('click', function(){
                var pageName = $(this).attr('data-page');
                if(pageName){
                    App.jump('Evidence/'+pageName);
                    return false;
                }
            });
        }
    });
    return View;
});