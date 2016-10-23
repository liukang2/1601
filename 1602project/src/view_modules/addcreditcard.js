define('addcreditcard', ['app','models','picker','addcreditcardTpl'], function(App,Models,Picker,addcreditcardTpl){
    'use strict';
    var _code,cardId,oCardNum,oBankName,oAmountLimit,oIssuingTime,oButton,_type,
        getCreditBankCardModel=null,subCreditcardModel=null,updateCreditcardModel=null,pageOptionModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            cardId = App.getID();
            _code = App.getAuth();
            getCreditBankCardModel = new Models.getCreditBankCardModel(_code);
            subCreditcardModel = new Models.subCreditcardModel();
            updateCreditcardModel = new Models.updateCreditcardModel();
            pageOptionModel = new Models.pageOptionModel();
            App.header({
                'title': '添加信用卡'
            });
        },
        el: "#mainBody",
        template: _.template(addcreditcardTpl),
        events: {},
        render: function(){
            var that = this;
            getCreditBankCardModel.execute(function(response){
                App.mask.hide();
                if(response.status == "1"){
                    var cardData={},pData;
                    if(response.data){
                        cardData = response.data[cardId-1];
                        pData = {
                            creditBankName: cardData.creditBankName,
                            issuingTime: cardData.issuingTime,
                            amountLimit: cardData.amountLimit
                        };
                    }
                    else{
                        cardData = {};
                        _type = "add";
                        pData = {
                            creditBankName: "",
                            issuingTime: "",
                            amountLimit: ""
                        };
                        cardData.data = [];
                    }
                    var sHTML = that.template({data: cardData});
                    that.$el.html(sHTML);
                    oCardNum = that.$el.find(".cardNum");
                    oBankName = that.$el.find(".bankName");
                    oAmountLimit = that.$el.find("#amountLimit");
                    oIssuingTime = that.$el.find("#issuingTime");
                    oButton = that.$el.find(".action");

                    that.picker(pData);
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
            oButton.on('click', function(e){
                e.stopPropagation();
                if(that.validate()){
                    App.mask.show();
                    var vCardNum = oCardNum.val(),
                        vBankName = oBankName.attr('data-value'),
                        vAmountLimit = oAmountLimit.attr('data-value'),
                        vIssuingTime = oIssuingTime.attr('data-value');

                    var param = {
                        code: _code,
                        creditcardNum: vCardNum,
                        creditBankName: vBankName,
                        amountLimit: vAmountLimit,
                        issuingTime: vIssuingTime
                    }
                    if(_type == "add"){
                        subCreditcardModel.param = param;
                        subCreditcardModel.execute(function(response){
                            App.mask.hide();
                            if(response.status == "1"){
                                App.toast.show("信用卡信息添加成功", true);
                            }
                            else{
                                App.queryError(response);
                            }
                        });
                    }
                    else{
                        updateCreditcardModel.param = param;
                        updateCreditcardModel.execute(function(response){
                            App.mask.hide();
                            if(response.status == "1"){
                                App.toast.show("信用卡信息更新成功", true);
                            }
                            else{
                                App.queryError(response);
                            }
                        })
                    }
                }
            });
        },
        validate: function(){
            var vCardNum = oCardNum.val(),
                vBankName = oBankName.attr('data-value'),
                vAmountLimit = oAmountLimit.attr('data-value'),
                vIssuingTime = oIssuingTime.attr('data-value');
            if(!vCardNum){
                App.toast.show('信用卡号不能为空', true);
                return false;
            }
            else if(!vBankName){
                App.toast.show('请选择发卡银行', true);
                return false;
            }
            else if(!vAmountLimit){
                App.toast.show('请选择信用额度', true);
                return false;
            }
            else if(!vIssuingTime){
                App.toast.show('请选择信用卡有效期', true);
                return false;
            }
            else{
                return true;
            }
        },
        picker: function(pData){
            pageOptionModel.execute(function(_data){
                //发卡银行
                var bankName = new Picker({
                    obj: 'bankName',
                    column: 1,
                    data: _data.bankName,
                    initValue: pData.creditBankName,
                    closeFunc: function(picker){
                        oBankName.attr('data-value', picker.value[0]);
                    }
                });
                bankName.init();

                //信用卡额度
                var quota = new Picker({
                    obj: 'amountLimit',
                    column: 1,
                    data: _data.amountLimit,
                    initValue: pData.amountLimit,
                    closeFunc: function(picker){
                        oAmountLimit.attr('data-value', picker.value[0]);
                    }
                });
                quota.init();

                //有效期
                var validity = new Picker({
                    obj: 'issuingTime',
                    column: 22,
                    data: _data.issuingTime,
                    initValue: pData.issuingTime,
                    _split: '/',
                    closeFunc: function(picker){
                        oIssuingTime.attr('data-value', picker.value[0]+'/'+picker.value[1]);
                    }
                });
                validity.init();
            });
        }
    });
    return View;
});