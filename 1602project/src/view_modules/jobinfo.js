define('jobinfo', ['app','models','picker','jobinfoTpl'], function(App,Models,Picker,jobinfoTpl){
    'use strict';
    var oCompanyName,oArea,oJobAddress,oCompanyTel,oIncome,mainData={},pData={},pName,cName,dName,
        getJobInfoModel=null,subJobInfoModel=null,pageOptionModel=null,addressModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            var _code = App.getAuth();
            pageOptionModel = new Models.pageOptionModel();
            addressModel = new Models.addressModel();
            getJobInfoModel = new Models.getJobInfoModel(_code);
            subJobInfoModel = new Models.subJobInfoModel();
            App.header({
                'title': '工作信息',
                'btnClass': 'action',
                'btnText': '提交'
            });
        },
        el: "#mainBody",
        template: _.template(jobinfoTpl),
        events: {},
        render: function(){
            var that = this;
            getJobInfoModel.execute(function(response){
                App.mask.hide();
                if(response.status == "1"){
                    if(response.data){
                        pName = response.data.addressProvinceName ? response.data.addressProvinceName : "北京";
                        cName = response.data.addressCityName ? response.data.addressCityName : "北京市";
                        dName = response.data.addressDistrictName ? response.data.addressDistrictName : "东城区";
                        pData = {
                            area: pName + '-' + cName + '-' + dName,
                            income: response.data.income || "2000元以下"
                        };
                        mainData = response.data;
                        mainData.pcd = pData.area;
                    }
                    else{
                        pName = "北京";
                        cName = "北京市";
                        dName = "东城区";
                        pData = {
                            area: pName + '-' + cName + '-' + dName,
                            income: "2000元以下"
                        };
                    }
                    var sHTML = that.template({data: mainData})
                    that.$el.html(sHTML);
                    //获取元素标签
                    oCompanyName = that.$el.find('#companyName');
                    oArea = that.$el.find('#area');
                    oJobAddress = that.$el.find('#jobAddress');
                    oCompanyTel = that.$el.find('#companyTel');
                    oIncome = that.$el.find('#income');

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

            oButton.on('click', function(e){
                e.stopPropagation();
                if(that.validate()){
                    App.mask.show();
                    var companyName = oCompanyName.val(),
                        companyTel = oCompanyTel.val(),
                        income = oIncome.attr('data-value'),
                        provinceId = oArea.attr('data-fid'),
                        cityId = oArea.attr('data-sid'),
                        districtId = oArea.attr('data-tid'),
                        jobAddress = oJobAddress.val();

                    var param = {
                        code: App.getAuth(),
                        name: companyName,
                        tel: companyTel,
                        income: income,
                        address: jobAddress,
                        addressProvince: provinceId,
                        addressCity: cityId,
                        addressDistrict: districtId
                    }
                    subJobInfoModel.param = param;
                    subJobInfoModel.execute(function(response){
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
            var vCompanyName = oCompanyName.val(),
                vCompanyTel = oCompanyTel.val(),
                vIncome = oIncome.attr('data-value'),
                vProvinceId = oArea.attr('data-fid'),
                vCityId = oArea.attr('data-sid'),
                vDistrictId = oArea.attr('data-tid'),
                vJobAddress = oJobAddress.val();
            if(!vCompanyName){
                App.toast.show('单位名称不能为空', true);
                return false;
            }
            else if(!App.checkMobPhone(vCompanyTel)){
                App.toast.show('电话格式输入有误', true);
                return false;
            }
            else if(!vIncome){
                App.toast.show('请选择您的月收入额', true);
                return false;
            }
            else if(!vProvinceId && !vCityId && !vDistrictId){
                App.toast.show('请选择单位地址', true);
                return false;
            }
            else if(!vJobAddress){
                App.toast.show('街道地址不能为空', true);
                return false;
            }
            else{
                return true;
            }
        },
        picker: function(pData){
            pageOptionModel.execute(function(_data){
                //月均收入
                var income = new Picker({
                    obj: 'income',
                    column: 1,
                    data: _data.income,
                    initValue: pData.income,
                    closeFunc: function(picker){
                        oIncome.attr('data-value', picker.displayValue[0]);
                    }
                });
                income.init();
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