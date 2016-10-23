define('repayment', ['app','models','repaymentTpl'], function(App,Models,repaymentTpl){
    'use strict';
    var getMyBillModel=null,repayModel=null,
        nowIndex= 0;
    var View = Backbone.View.extend({
        initialize: function(_params){
            getMyBillModel = new Models.getMyBillModel(App.getAuth());
            repayModel = new Models.repayModel();
            App.header({
                'title': '我要还款'
            });
        },
        el: "#mainBody",
        template: _.template(repaymentTpl),
        events: {},
        render: function(){
            App.mask.hide();
            var that = this;
            getMyBillModel.execute(function(response){
                if(response.status == "1"){
                    if(response.data){
                        var sHTML = that.template(response);
                        that.$el.html(sHTML);
                        that.eventsHandler();
                    }
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
                aItem = that.$el.find('.item'),
                arrows = that.$el.find('.arrow'),
                actionBtn = that.$el.find('.action');

            //分期选择
            aItem.each(function(){
                var $this = $(this);
                if($this.attr('data-status') == "repay"){
                    $('.radio i', $this).css("visibility", "hidden");
                };
                nowIndex = that.getNowIndex();
                $this.on('click', function(e){
                    e.stopPropagation();
                    var status = $this.attr('data-status'),
                        thisIndex = $this.index(),
                        _checked = $this.attr('data-checked'),
                        radio = $this.find('.radio i'),
                        showAmount = $('#amount'),
                        amount = Number(showAmount.html()),
                        once = Number($this.find('.money').html());
console.log(nowIndex);
                    if(status == 'wait') {
                        if (_checked == 'N') {
                            if (thisIndex == nowIndex + 1) {
                                nowIndex = thisIndex;
                            }
                            else {
                                App.toast.show('不能跳期还款，请注意还款顺序', true);
                                return false;
                            }
                            radio.attr('class', 'checked');
                            $this.attr('data-checked', 'Y');
                            showAmount.html(amount + once);
                        }
                        else{
                            if (thisIndex == nowIndex) {
                                nowIndex = thisIndex - 1;
                            }
                            else {
                                App.toast.show('不能跳期还款，请注意还款顺序', true);
                                return false;
                            }
                            radio.attr('class', 'unchecked');
                            $this.attr('data-checked', 'N');
                            showAmount.html(amount - once);
                        }
                    }
                    else if(status == "delay"){
                        App.toast.show('已逾期不可取消', true);
                        return false;
                    }
                });
            });

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

            //查看分期明细
            that.$el.find('#viewDetail').on('click', function(e){
                e.stopPropagation();
                App.jump('Repayment/Detail');
                return false;
            });

            //百度还款
            actionBtn.on('click', function(e){
                e.stopPropagation();
                //获取还款期次
                var periods = '';
                aItem.each(function(){
                    var $this = $(this);
                    if($this.attr('data-checked') == 'Y'){
                        periods += $this.attr('data-periods') + ',';
                    }
                });
                var param = {
                    code: App.getAuth(),
                    periods: periods.substring(0, periods.length-1)
                }
                repayModel.param = param;
                repayModel.execute(function(response){
                    if(response.status == "1" && response.error == "00000000"){
                        if(response.data){
                            App.jumpTo(response.data);
                        }
                    }
                    else{
                        App.queryError(response);
                    }
                })
            });
        },
        getNowIndex: function(){
            var that = this,
                arr = [];
            that.$el.find('.item').each(function(){
                var status = $(this).attr('data-status');
                if(status == 'wait'){
                    arr.push($(this).index());
                }
            });
            return arr[0];
        }
    });
    return View;
});