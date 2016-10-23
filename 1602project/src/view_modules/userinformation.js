define('userinformation', ['app','models','userinformationTpl'], function(App,Models,userinformationTpl){
    'use strict';
    var myData,count,_timer,
        myDataStatusModel=null,getZmfModel=null,authorizeZmfModel=null,skipZmfAuthorizeModel=null,activationMyLimitModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            var _code = App.getAuth();
            myDataStatusModel = new Models.myDataStatusModel(_code);
            getZmfModel = new Models.getZmfModel(_code);
            authorizeZmfModel = new Models.authorizeZmfModel(_code);
            skipZmfAuthorizeModel = new Models.skipZmfAuthorizeModel(_code);
            activationMyLimitModel = new Models.activationMyLimitModel(_code);
            count = App.gStore.get("_count_");
            App.header({
                'title': "我的应花资料"
            });
        },
        el: "#mainBody",
        template: _.template(userinformationTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this,
                limit = App.gStore.get("userLimit");
            //获取资料状态
            myDataStatusModel.execute(function(response){
                if(response.status == "1"){
                    myData = response.data;
                    if(response.data.isActivation == "0"){
                        App.updateHeaderText("激活应花额度");
                    }
                    if(response.data.sesameStatus == "2"){
                        App.gStore.set("_count_", "2");
                    }
                    myData.limit = parseInt(limit);

                    var sHTML = that.template({data: myData});
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
                _fromPage = App.getListingData().page,
                _orderAmount = App.getListingData().amount;

            //页面转场
            that.$el.find('a').on('click', function(){
                var pageName = $(this).attr('data-page');
                //芝麻分认证
                if(pageName == 'SesameCredit'){
                    that.sesameCredit();
                }
                //
                else{
                    App.jump(pageName);
                    return false;
                }
            });

            //激活额度
            var animation = {
                show: function(){
                    App.compute.show();
                    App.maskLayer.show();
                    $('html').css('overflow-y', 'hidden');
                },
                hide: function(){
                    App.compute.hide();
                    App.maskLayer.hide();
                    $('html').css('overflow-y', 'scroll');
                }
            }
            function loading(){
                animation.show();
                var _t = 60;
                clearInterval(_timer);
                _timer = setInterval(function(){
                    _t--;
                    if(_t == 0){
                        animation.hide();
                        App.makePopBox({
                            "num": 2,
                            "title": "系统繁忙，您的应花分期正在开通中，请稍作等待",
                            "tAlign": "center",
                            "cancelText": "我的应花",
                            "certainText": "继续等待",
                            "close": false,
                            "cancel": function(){
                                //do something
                                //App.jump("My");
                            },
                            "certain": function(){
                                loading();
                            }
                        });
                        App.popBox.show();
                        App.maskLayer.show();
                    }
                }, 1000);
            }
            that.$el.find('.action').on('click', function(){
                loading();
                //开始计算额度
                activationMyLimitModel.execute(function(response){
                    clearInterval(_timer);
                    if(response.status == '1'){
                        //保存用户额度
                        App.gStore.set("userLimit", response.data.limitAmount);

                        if(_fromPage == "pay"){
                            if(Number(response.data.limit) == 0){
                                App.jumpRef("ActivationFail/NoOrder");
                                return false;
                            }
                            //足额
                            else if(Number(response.data.limit) > Number(_orderAmount)){
                                App.jumpRef("ActivationSuccess/HasOrder");
                                return false;
                            }
                            //不足额
                            else{
                                App.jumpRef("LimitNotEnough");
                                return false;
                            }
                        }
                        else{
                            if(Number(response.data.limit) == 0){
                                App.jumpRef("ActivationFail/NoOrder");
                                return false;
                            }
                            else{
                                App.jumpRef("ActivationSuccess/NoOrder");
                                return false;
                            }
                        }
                    }
                    else{
                        animation.hide();
                        App.queryError(response);
                    }
                });
            });
        },
        sesameCredit: function(){
            //去认证
            function authorize(){
                authorizeZmfModel.execute(function(response){
                    if(response.status == "1"){
                        App.jumpTo(response.data.url);
                        return false;
                    }
                    else{
                        App.queryError(response);
                    }
                })
            }
            //跳过认证
            function skipAuthorize(){
                skipZmfAuthorizeModel.execute(function(response){
                    if(response.status == "1"){
                        location.reload();
                    }
                    else{
                        App.queryError(response);
                    }
                })
            }

            if(count != "2"){
                App.makePopBox({
                    "num": 2,
                    "title": "进入芝麻分认证？",
                    "tAlign": "center",
                    "cancelText": "否",
                    "certainText": "去认证",
                    "cancel": function(){},
                    "certain": function(){
                        authorize();
                        App.gStore.set("_count_", "o.o");
                    }
                });
            }
            else{
                App.makePopBox({
                    "num": 2,
                    "title": "可跳过或者进行芝麻分认证",
                    "tAlign": "center",
                    "cancelText": "跳过",
                    "certainText": "去认证",
                    "cancel": function(){
                        skipAuthorize()
                    },
                    "certain": function(){
                        authorize();
                    }
                });
            }
            App.popBox.show();
        }
    });
    return View;
});