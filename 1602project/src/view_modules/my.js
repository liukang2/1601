define('my', ['app','models','myTpl'], function(App,Models,myTpl){
    'use strict';
    var resultData={},
        myLimitOrderModel=null,getMyBillModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            myLimitOrderModel = new Models.myLimitOrderModel(App.getAuth());
            getMyBillModel = new Models.getMyBillModel(App.getAuth());
            App.header({
                'title': '我的应花分期'
            });
        },
        el: "#mainBody",
        template: _.template(myTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this;
            myLimitOrderModel.execute(function(response){
                if(response.status == "1"){
                    resultData = response.data;
                    resultData.phone = App.getPhoneStar(App.getPhone());
                    //有订单时，获取当前应还、还款日
                    if(resultData.hasOrder == "1"){
                        getMyBillModel.async = false;
                        getMyBillModel.execute(function(_data){
                            if(_data.status == "1"){
                                resultData.myBill = _data.data;
                            }
                            else{
                                App.queryError(_data);
                            }
                        });
                    }
                    var sHTML = that.template({data: resultData});
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
            var that = this,
                aBtn = that.$el.find(".my a"),
                repayButton = that.$el.find(".action");
            //去还款
            repayButton.on("click", function(e){
                e.stopPropagation();
                App.jump("Repayment");
                return false;
            })
            //页面链接
            aBtn.on("click", function(e){
                e.stopPropagation();
                var pageName = $(this).attr('data-page');
                if(pageName){
                    App.jump(pageName);
                    return false;
                }
            });
        }
    });
    return View;
});