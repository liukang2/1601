define('orderdetail', ['app','models','orderdetailTpl'], function(App,Models,orderdetailTpl){
    'use strict';
    var oid,getOrderDetailModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            oid = App.getListingData().yhOrderNo;
            console.log(App.getListingData());
            getOrderDetailModel = new Models.getOrderDetailModel(App.getAuth(),oid);
            App.header({
                'title': '订单详情'
            });
        },
        el: "#mainBody",
        template: _.template(orderdetailTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this;
            getOrderDetailModel.execute(function(response){
                if(response.status == "1"){
                    var sHTML = that.template(response);
                    that.$el.html(sHTML);
                    that.eventsHandler();
                }
                else{
                    App.queryError(response);
                }
            })
        },
        hide: function(){
            App.mask.show();
        },
        eventsHandler: function(){
            var that = this;
        }
    });
    return View;
});