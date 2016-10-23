var nowIndex = getNowIndex();
console.log(nowIndex);
$('.item').each(function(){
    var $this = $(this);
    $this.on('click', function(){
        var status = $this.attr('data-status'),
            thisIndex = $this.index(),
            _checked = $this.attr('data-checked'),
            radio = $this.find('.radio i'),
            showAmount = $('#amount'),
            amount = Number(showAmount.html()),
            once = Number($this.find('.money').html());
        console.log(thisIndex);
        console.log(nowIndex);
        if(status == 'wait') {
            if (_checked == 'N') {
                if (thisIndex == nowIndex + 1) {
                    nowIndex = thisIndex;
                }
                else {
                    return false;
                }
                radio.attr('class', 'checked');
                $this.attr('data-checked', 'Y');
                showAmount.html(amount + once);
            }
            else {
                if (thisIndex == nowIndex) {
                    nowIndex = thisIndex - 1;
                }
                else {
                    return false;
                }
                radio.attr('class', 'unchecked');
                $this.attr('data-checked', 'N');
                showAmount.html(amount - once);
            }
        }
    });
});

//获取当前索引值
function getNowIndex(){
    var arr = [];
    $('.item').each(function(){
        var status = $(this).attr('data-status');
        if(status == 'wait'){
            arr.push($(this).index());
        }
    });
    return arr[0];
}

//还款明细展开&收缩
$('.arrow').on('click', function(e){
    e.stopPropagation();
    var $this = $(this),
        _parent = $this.parent(),
        _show = $this.parent().attr('data-show'),
        _arrow = $this.find('i');

    //为N时，展开
    if(_show == 'N'){
        _arrow.attr('class', 'icon-arrow-down');
        _parent.attr('data-show', 'Y');
    }
    //为Y时，收起
    else{
        _arrow.attr('class', 'icon-arrow-up');
        _parent.attr('data-show', 'N');
    }
});