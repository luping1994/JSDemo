var height = 1080;
var width = 1920;
var scale = 1;
var datas = {};

//初始化
function init() {
    $.getJSON("data/data.json", function (json) {

        scale = $("body").width() / width;
        $("div.full-wrapper").css("height", height * scale);
        $("svg.designer").css("transform", "scale(" + scale + ")");
        $("svg.designer").css("width", width);
        $("svg.designer").css("height", height);
        $("svg.designer").css("background-color", "#ffffff");
        $("svg.designer").css("background-image", "url(./img/bg.png)");
        $("svg.designer").empty();
        json.elements.map(createElement);
        json.text.map(createElement);
        json.signal.map(createElement);
        datas = json;

    });
    // http://183.236.25.192:24206/hotwater_mobile/index.php/home/index/read_all
    $.ajax({
        url: 'http://183.236.25.192:24206/hotwater_mobile/index.php/home/index/read_all',
        method: 'POST',
        dataType: "json",
        success: function (json) {

        },
        error: function (e) {

        }
    });
}

//窗口调整时重新加载
$(window).resize(function () {
    scale = $("body").width() / width;
    $("div.full-wrapper").css("height", height * scale);
    $("svg.designer").css("transform", "scale(" + scale + ")");
    $("svg.designer").css("width", width);
    $("svg.designer").css("height", height);
    $("svg.designer").css("background-color", "#ffffff");
    $("svg.designer").css("background-image", "url(./img/bg.png)");
    $("svg.designer").empty();
    datas.elements.map(createElement);
    datas.text.map(createElement);
    datas.signal.map(createElement);
});
