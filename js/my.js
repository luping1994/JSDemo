/**
 *
 * @param d
 */
function openConfirmDialog(d) {
    console.log(d.href);
    // var htmlStr = '';
    // htmlStr += '<input type="hidden" id="channel_id" value="0">';
    // htmlStr += '<div class="weui-mask"></div>';
    // htmlStr += '<div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>';
    // htmlStr += '<div class="weui-dialog__bd">';
    // htmlStr += d.title + '</div>';
    // htmlStr += '</div>';
    // htmlStr += '<div class="weui-dialog__ft">';
    // htmlStr += '<a id="qvxiao" href="javascript:void (0);" class="weui-dialog__btn weui-dialog__btn_default">取消</a>';
    // htmlStr += '<a id="queding" href="javascript:void (0);" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>';
    // htmlStr += '</div></div>';

    var tips = d.status?"是否关闭":"是否打开";

    $("#title")
        .text('关闭'+d.title);
    $("#alertDialog")
        .show()
        .data("data", d)
    $("#queding")
        .click(function () {
            sendCommand(d)
            $("#alertDialog").hide();

        });
    $("#qvxiao")
        .click(function () {
            $("#alertDialog").hide();
        });
}

function sendCommand(d) {
    console.log('channel_id为：' + d.channel_id);
}