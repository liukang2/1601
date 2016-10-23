define('dwellinginfo', ['app','models','picker','dwellinginfoTpl'], function(App,Models,Picker,dwellinginfoTpl){
    'use strict';
    var oButton,
        getLiveInfoModel=null,subLiveInfoModel=null,pageOptionModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            getLiveInfoModel = new Models.getLiveInfoModel(App.getAuth());
            subLiveInfoModel = new Models.subLiveInfoModel();
            pageOptionModel = new Models.pageOptionModel();
            App.header({
                'title': '居住信息'
            });
        },
        el: "#mainBody",
        template: _.template(dwellinginfoTpl),
        events: {},
        render: function(){
            App.mask.hide();

            var that = this;
            getLiveInfoModel.execute(function(response){
                if(response.status == '1'){
                    var mainData = response.data;
                    var sHTML = that.template({data: mainData});
                    that.$el.html(sHTML);
                    //住房性质
                    pageOptionModel.execute(function(_data){
                        var liveType = new Picker({
                            obj: 'liveType',
                            column: 1,
                            data: _data.liveType,
                            initValue: mainData.liveType || "自购",
                            closeFunc: function(picker){
                                that.$el.find("#liveType").attr('data-value', picker.value[0]);
                            }
                        });
                        liveType.init();
                    });

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
            oButton = that.$el.find(".action");

            //引用第三方插件（调取相册或相机）
            App.addCameraJS(['mobileFix','exif', 'lrz']);
            var input = $('.upload-pic input');
            input.on('change', function(){
                var oDiv = $(this).next();
                lrz(this.files[0], {width: 400}, function (results) {
                    var img = new Image();
                    img.src = results.base64;
                    oDiv.html(img);
                });
            });

            oButton.on("click", function(e){
                e.stopPropagation();
                var v1 = that.$el.find("#liveType").attr("data-value"),
                    v2 = that.$el.find("#telphone").val(),
                    f1 = that.$el.find("#livePicUrl img").attr("src") || "";
                var param = {
                    code: App.getAuth(),
                    liveType: v1,
                    liveTel: v2,
                    proveFile: that._replace(f1)
                }
                console.log(param);
                subLiveInfoModel.param = param;
                subLiveInfoModel.execute(function(response){
                    if(response.status == "1"){
                        App.toast.show("数据保存成功", true);
                    }
                    else{
                        App.queryError(response);
                    }
                })
            })
        },
        _replace: function(imgData){
            return imgData.replace(/^data:image\/(png|jpeg);base64,/, "");
        }
    });
    return View;
});