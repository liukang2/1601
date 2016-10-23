define('activationfail', ['app','models','activationfailTpl'], function(App,Models,activationfailTpl){
    'use strict';
    var rule,openFailModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            rule = App.locaHandler().split('/')[1];
            App.header({
                'title': '应花分期',
                backHandler: function(){
                    if(rule == "HasOrder"){
                        App.jumpTo(App.getListingData().backUrl);
                        return false;
                    }
                    else{
                        App.jump("My");
                        return false;
                    }
                }
            });
        },
        el: "#mainBody",
        template: _.template(activationfailTpl),
        events: {},
        render: function(){
            App.mask.hide();

            var that = this;
            var sHTML = that.template({data: {rule: rule}});
            that.$el.html(sHTML);
            that.eventsHandler();
        },
        hide: function(){
            App.mask.show();
        },
        eventsHandler: function(){
            var that = this;
            that.$el.find(".action").on("click", function(e){
                e.stopPropagation();
                App.jumpTo(App.getListingData().backUrl);
                return false;
            })
        }
    });
    return View;
});