define('identityinfo', ['app','models','picker','identityinfoTpl'], function(App,Models,Picker,identityinfoTpl){
    'use strict';
    var oRealName,oCardId,oArea,oAddress,oEdu,oMarital,oBankName,oCardNum,oPhone,pData={},mainData={},pName,cName,dName,
        getIdentityModel=null,subIdentityInfoModel=null,getDebitBankCardModel=null,pageOptionModel=null,addressModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            var _code = App.getAuth();
            pageOptionModel = new Models.pageOptionModel();
            addressModel = new Models.addressModel();
            getIdentityModel = new Models.getIdentityModel(_code);
            getDebitBankCardModel = new Models.getDebitBankCardModel(_code);
            subIdentityInfoModel = new Models.subIdentityInfoModel();
            App.header({
                'title': '身份认证',
                'btnClass': 'action',
                'btnText': '提交'
            });
        },
        el: "#mainBody",
        template: _.template(identityinfoTpl),
        events: {},
        render: function(){
            var that = this;
            getIdentityModel.async = false;
            getIdentityModel.execute(function(response){
                App.mask.hide();
                if(response.status == "1"){
                    if(response.data){
                        pName = response.data.addressProvinceName ? response.data.addressProvinceName : "北京";
                        cName = response.data.addressCityName ? response.data.addressCityName : "北京市";
                        dName = response.data.addressDistrictName ? response.data.addressDistrictName : "东城区";
                        pData = {
                            area: pName + '-' + cName + '-' + dName,
                            edu: response.data.edu || "本科",
                            marital: response.data.marriage || "未婚",
                            bankName: response.data.bankName || "中国工商银行"
                        };
                        mainData._base = response.data;
                        mainData._base.pcd = pData.area;
                    }
                    else{
                        pName = "北京";
                        cName = "北京市";
                        dName = "东城区";
                        pData = {
                            area: pName + '-' + cName + '-' + dName,
                            edu: "本科",
                            marital: "未婚",
                            bankName: "中国工商银行"
                        };
                        mainData._base = {};
                    }
                }
                else{
                    App.queryError(response);
                }
            });
            //获取银行卡信息
            getDebitBankCardModel.async = false;
            getDebitBankCardModel.execute(function(response){
                if(response.status == '1'){
                    if(response.data){
                        mainData._bank = response.data[0] || "";
                        pData.bankName = response.data[0].bankName || "中国工商银行";
                    }
                    else{
                        mainData._bank = "";
                        pData.bankName = "中国工商银行";
                    }
                }
                else{
                    App.queryError(response);
                }
            });
            var sHTML = that.template({data:mainData});
            that.$el.html(sHTML);
            //获取元素标签
            oRealName = that.$el.find('#realName');
            oCardId = that.$el.find('#cardId');
            oArea = that.$el.find('#area');
            oAddress = that.$el.find('#address');
            oEdu = that.$el.find('#edu');
            oMarital = that.$el.find('#marital');
            oBankName = that.$el.find('.bankName');
            oCardNum = that.$el.find('#cardNum');
            oPhone = that.$el.find('#phone');

            that.picker(pData);
            that.eventsHandler();
        },
        hide: function(){
            App.mask.show();
        },
        eventsHandler: function(){
            var that = this,
                oButton = $('.action');

            oButton.on('click', function(e){
                e.stopPropagation();
                if(that.validate()){
                    var realName = oRealName.val(),
                        cardId = oCardId.val(),
                        provinceId = oArea.attr('data-fid'),
                        cityId = oArea.attr('data-sid'),
                        districtId = oArea.attr('data-tid'),
                        edu = oEdu.attr('data-value'),
                        address = oAddress.val(),
                        marital = oMarital.attr('data-value'),
                        bankName = oBankName.attr('data-value'),
                        cardNum = oCardNum.val(),
                        phone = oPhone.val();

                    var param = {
                        code: App.getAuth(),
                        realName: realName,
                        cardId: cardId,
                        addressProvince: provinceId,
                        addressCity: cityId,
                        addressDistrict: districtId,
                        address: address,
                        edu: edu,
                        marital: marital,
                        bankName: bankName,
                        cardNum: cardNum,
                        phoneNum: phone
                    }
                    subIdentityInfoModel.param = param;
                    subIdentityInfoModel.execute(function(response){
                        App.mask.hide();
                        if(response.status == "1"){
                            App.toast.show("数据保存成功", true);
                        }
                        else{
                            App.queryError(response);
                        }
                    })
                }
            });
        },
        validate: function(){
            var realName = oRealName.val(),
                cardId = oCardId.val(),
                provinceId = oArea.attr('data-fid'),
                cityId = oArea.attr('data-sid'),
                districtId = oArea.attr('data-tid'),
                address = oAddress.val(),
                edu = oEdu.attr('data-value'),
                marital = oMarital.attr('data-value'),
                bankName = oBankName.attr('data-value'),
                cardNum = oCardNum.val(),
                phone = oPhone.val();
            if(!realName){
                App.toast.show('真实姓名不能为空', true);
                return false;
            }
            else if(!App.checkIdCard(cardId)){
                App.toast.show('身份证号码不能为空', true);
                return false;
            }
            else if(!provinceId && !cityId && !districtId){
                App.toast.show('选择常住地址', true);
                return false;
            }
            else if(!address){
                App.toast.show('街道地址不能为空', true);
                return false;
            }
            else if(!edu){
                App.toast.show('选择您的学历', true);
                return false;
            }
            else if(!marital){
                App.toast.show('选择您的婚姻状况', true);
                return false;
            }
            else if(!bankName){
                App.toast.show('选择您的开户行', true);
                return false;
            }
            else if(!cardNum){
                App.toast.show('银行卡号不能为空', true);
                return false;
            }
            else if(!App.checkTelPhone(phone)){
                App.toast.show('手机号输入有误，请重新输入', true);
                return false;
            }
            else{
                return true;
            }
        },
        picker: function(pData){
            pageOptionModel.execute(function(_data){
                //学历
                var edu = new Picker({
                    obj: 'edu',
                    column: 1,
                    data: _data.edu,
                    initValue: pData.edu,
                    closeFunc: function(picker){
                        oEdu.attr('data-value', picker.displayValue[0]);
                    }
                });
                edu.init();

                //婚姻
                var marital = new Picker({
                    obj: 'marital',
                    column: 1,
                    data: _data.marital,
                    initValue: pData.marital,
                    closeFunc: function(picker){
                        oMarital.attr('data-value', picker.displayValue[0]);
                    }
                });
                marital.init();

                //开户行
                var bankName = new Picker({
                    obj: 'bankName',
                    column: 1,
                    data: _data.bankName,
                    initValue: pData.bankName,
                    closeFunc: function(picker){
                        oBankName.attr('data-value', picker.displayValue[0]);
                    }
                });
                bankName.init();
            });
            addressModel.execute(function(_data){
                //地区信息
                var area = new Picker({
                    obj: 'area',
                    column: 3,
                    data: _data,
                    _split: "-",
                    initValue: pData.area,
                    closeFunc: function(picker){
                        var pName = picker.value[0],
                            cName = picker.value[1],
                            dName = picker.value[2];
                        App.setPickerId(pName, cName, dName, oArea, this.data);
                    }
                });
                area.init();
            });
        }
    });
    return View;
});