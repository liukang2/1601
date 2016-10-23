define('evidencedegree', ['app','models','evidencedegreeTpl'], function(App,Models,evidencedegreeTpl){
    'use strict';
    var oButton,mainData,subEduProveModel=null,getProveInfoModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            subEduProveModel = new Models.subEduProveModel();
            getProveInfoModel = new Models.getProveInfoModel(App.getAuth());
            App.header({
                'title': '学历证明'
            });
        },
        el: "#mainBody",
        template: _.template(evidencedegreeTpl),
        events: {},
        render: function(){
            App.mask.hide();

            var that = this;
            getProveInfoModel.execute(function(response){
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

            //保存图片
            oButton = that.$el.find(".action");
            oButton.on("click", function(e){
                e.stopPropagation();
                var f1 = that.$el.find("#eduFile1 img").attr("src") || "",
                    f2 = that.$el.find("#eduFile2 img").attr("src") || "",
                    f3 = that.$el.find("#eduFile3 img").attr("src") || "",
                    f4 = that.$el.find("#eduFile4 img").attr("src") || "";
                var param = {
                    code: App.getAuth(),
                    eduFile1: that._replace(f1),
                    eduFile2: that._replace(f2),
                    eduFile3: that._replace(f3),
                    eduFile4: that._replace(f4)
                }
                subEduProveModel.param = param;
                subEduProveModel.execute(function(response){
                    if(response.status == "1"){
                        App.toast.show("图片保存成功", true);
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