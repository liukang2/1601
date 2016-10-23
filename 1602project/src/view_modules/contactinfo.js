define('contactinfo', ['app','models','picker','contactinfoTpl'], function(App,Models,Picker,contactinfoTpl){
    'use strict';
    var _code,oContract1,oRelation1,oPhone1,
        oContract2,oRelation2,oPhone2,
        mainData={},pData={},
        getContractModel=null,subContractModel=null,pageOptionModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            _code = App.getAuth();
            pageOptionModel = new Models.pageOptionModel();
            getContractModel = new Models.getContractModel(_code, "main");
            subContractModel = new Models.subContractModel();
            App.header({
                'title': '联系信息',
                'btnClass': 'action',
                'btnText': '提交'
            });
        },
        el: "#mainBody",
        template: _.template(contactinfoTpl),
        events: {},
        render: function(){
            var that = this;
            getContractModel.execute(function(response){
                App.mask.hide();
                if(response.status == "1"){
                    if(response.data){
                        mainData = response.data;
                        pData = {
                            relation1: response.data.linkman1Relation || "配偶",
                            relation2: response.data.linkman2Relation || "配偶"
                        };
                    }
                    else{
                        mainData.data = {};
                        pData = {
                            relation1: "配偶",
                            relation2: "配偶"
                        }
                    }
                    var sHTML = that.template({data: mainData});
                    that.$el.html(sHTML);
                    //获取元素标签
                    oContract1 = that.$el.find('#contract1');
                    oRelation1 = that.$el.find('#relation1');
                    oPhone1 = that.$el.find('#phone1');
                    oContract2 = that.$el.find('#contract2');
                    oRelation2 = that.$el.find('#relation2');
                    oPhone2 = that.$el.find('#phone2');

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
            var that = this,
                oButton = $('.action');
            //提交保存
            oButton.on('click', function(e){
                e.stopPropagation();
                if(that.validate()){
                    App.mask.show();
                    var _contract1 = oContract1.val(),
                        _relation1 = oRelation1.attr('data-value'),
                        _phone1 = oPhone1.val(),
                        _contract2 = oContract2.val(),
                        _relation2 = oRelation2.attr('data-value'),
                        _phone2 = oPhone2.val();

                    var param = {
                        code: _code,
                        contractType: "main",
                        linkman1: _contract1,
                        linkman1Relation: _relation1,
                        phone1: _phone1,
                        linkman2: _contract2,
                        linkman2Relation: _relation2,
                        phone2: _phone2
                    };
                    subContractModel.param = param;
                    subContractModel.execute(function(response){
                        App.mask.hide();
                        if(response.status == "1"){
                            App.toast.show("数据保存成功", true);
                        }
                        else{
                            App.queryError(response);
                        }
                    });
                }
            })
        },
        validate: function(){
            var _contract1 = oContract1.val(),
                _relation1 = oRelation1.attr('data-value'),
                _phone1 = oPhone1.val(),
                _contract2 = oContract2.val(),
                _relation2 = oRelation2.attr('data-value'),
                _phone2 = oPhone2.val();
            if(!_contract1){
                App.toast.show('联系人1姓名不能为空', true);
                return false;
            }
            else if(!_relation1){
                App.toast.show('选择您与联系1的关系', true);
                return false;
            }
            else if(!App.checkTelPhone(_phone1)){
                App.toast.show('手机号输入有误，请重新输入', true);
                return false;
            }
            else if(!_contract2){
                App.toast.show('联系人2姓名不能为空', true);
                return false;
            }
            else if(!_relation2){
                App.toast.show('选择您与联系2的关系', true);
                return false;
            }
            else if(!App.checkTelPhone(_phone2)){
                App.toast.show('手机号输入有误，请重新输入', true);
                return false;
            }
            else{
                return true;
            }
        },
        picker: function(pData){
            //获取选择器数据
            pageOptionModel.execute(function(_data){
                //联系人1
                var relation1 = new Picker({
                    obj: 'relation1',
                    column: 1,
                    data: _data.mainContract,
                    initValue: pData.relation1,
                    closeFunc: function(picker){
                        oRelation1.attr('data-value', picker.value[0]);
                    }
                });
                relation1.init();

                //联系人2
                var relation2 = new Picker({
                    obj: 'relation2',
                    column: 1,
                    data: _data.minorContract,
                    initValue: pData.relation2,
                    closeFunc: function(picker){
                        oRelation2.attr('data-value', picker.value[0]);
                    }
                });
                relation2.init();
            });
        }
    });
    return View;
});