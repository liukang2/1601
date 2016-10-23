define('evidencejob', ['app','models','evidencejobTpl'], function(App,Models,evidencejobTpl){
    'use strict';
    var oButton,jobEmail,
        subJobProveModel=null,getJobInfoModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            subJobProveModel = new Models.subJobProveModel();
            getJobInfoModel = new Models.getJobInfoModel(App.getAuth());
            App.header({
                'title': '工作证明'
            });
        },
        el: "#mainBody",
        template: _.template(evidencejobTpl),
        events: {},
        render: function(){
            App.mask.hide();

            var that = this;
            getJobInfoModel.execute(function(response){
                if(response.status == "1"){
                    jobEmail = response.data.jobEmail || "";
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
                var f1 = that.$el.find("#jobFile img").attr("src") || "",
                    f2 = that.$el.find("#moneyFile img").attr("src") || "";
                var param = {
                    code: App.getAuth(),
                    jobEmail: jobEmail,
                    jobFile: that._replace(f1),
                    moneyFile: that._replace(f2)
                }
                subJobProveModel.param = param;
                subJobProveModel.execute(function(response){
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