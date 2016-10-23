define('limitnotenough', ['app','models','limitnotenoughTpl'], function(App,Models,limitnotenoughTpl){
    'use strict';
    var backUrl,myLimitOrderModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            backUrl = App.getListingData().backUrl;
            myLimitOrderModel = new Models.myLimitOrderModel(App.getAuth());
            App.header({
                'title': '应花分期'
            });
        },
        el: "#mainBody",
        template: _.template(limitnotenoughTpl),
        events: {},
        render: function(){
            var that = this;

            myLimitOrderModel.async = false;
            myLimitOrderModel.execute(function(response){
                App.mask.hide();
                if(response.status == "1"){
                    var _amount = App.getListingData().amount,
                        _limit = response.data.limit,
                        difference = 0;
                    if(Number(_amount) > Number(_limit)){
                        difference = Number(_amount) - Number(_limit);
                    }
                    else{
                        difference = Number(_limit) - Number(_amount);
                    }
                    var mainData = {
                        amount: _amount,
                        limit: _limit,
                        difference: difference
                    }
                    var sHTML = that.template({data: mainData});
                    that.$el.html(sHTML);
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
            var that = this;
            //选择其他支付方式
            that.$el.find(".action").on('click', function(){
                App.jumpTo(backUrl);
                return false;
            })
        }
    });
    return View;
});