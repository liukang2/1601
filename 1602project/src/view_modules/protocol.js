define('protocol', ['app','models','protocolTpl'], function(App,Models,protocolTpl){
    'use strict';
    var mainData,rule,_title,_protocol,
        getValueModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            rule = App.locaHandler().split('/')[1];
            getValueModel = new Models.getValueModel();
            switch (rule){
                case "Register":
                    _title = "注册服务协议";
                    break;
                case "Private":
                    _title = "隐私政策";
                    break;
                case "Loan":
                    _title = "三方借款协议";
                    _protocol = "THREE_SIDES";
                    break;
                case "BS":
                    _title = "购销协议";
                    _protocol = "PURCHASE_SALE";
                    break;
                case "Debited":
                    _title = "委托扣款授权书";
                    _protocol = "ENTRUST";
                    break;
            }
            App.header({
                'title': _title
            });
        },
        el: "#mainBody",
        template: _.template(protocolTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this;
            getValueModel.param = {
                code: App.getAuth(),
                yhOrderNo: App.getListingData().yhOrderNo,
                protocol: _protocol
            }
            getValueModel.execute(function(response){
                if(response.status == "1"){
                    mainData = response.data;
                    mainData.rule = rule;
                    var sHTML = that.template({data: mainData});
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

        }
    });
    return View;
});