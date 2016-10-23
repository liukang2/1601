define('repaymentdetail', ['app','models','repaymentdetailTpl'], function(App,Models,repaymentdetailTpl){
    'use strict';
    var getMyBillModel=null;
    var View = Backbone.View.extend({
        initialize: function(_params){
            getMyBillModel = new Models.getMyBillModel(App.getAuth());
            App.header({
                'title': '本次分期明细'
            });
        },
        el: "#mainBody",
        template: _.template(repaymentdetailTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this;
            getMyBillModel.execute(function(response){
                if(response.status == "1"){
                    var sHTML = that.template(response);
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
                arrows = that.$el.find('.arrow');

            //还款明细展开&收缩
            arrows.on('click', function(e){
                e.stopPropagation();
                var $this = $(this),
                    _parent = $this.parent(),
                    _show = _parent.parent().attr('data-show'),
                    _arrow = $this.find('i'),
                    _content = _parent.next();

                //为N时，展开
                if(_show == 'N'){
                    _arrow.attr('class', 'icon-arrow-down');
                    _parent.parent().attr('data-show', 'Y');
                    _content.show();
                }
                //为Y时，收起
                else{
                    _arrow.attr('class', 'icon-arrow-up');
                    _parent.parent().attr('data-show', 'N');
                    _content.hide();
                }
            });
        }
    });
    return View;
});