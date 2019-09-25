$(window).on('load', function () {
    waterfall();
    // data 模拟后台请求数据
    var data = {
        "code": 1, "data": [
            {"src": "images/23.jpg"},
            {"src": "images/24.jpg"},
            {"src": "images/25.jpg"}
        ]
    };
    $(window).on('scroll', function () {
        if (checkScrollSlide()) {
            $.each(data.data, function (key, value) {
                var oBox = $('<div>').addClass('box').appendTo($("#main"));
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src',$(value).attr( 'src')).appendTo($(oPic));
            });
            waterfall();
        }
    });
});

function checkScrollSlide() {
    var $lastBox = $('#main>div');
    var lastBoxDis = $lastBox.last().get(0).offsetTop + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height(); // 浏览器窗口可视区域高度
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}

function waterfall() {
    var $boxs = $('#main>div');
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width() / w);
    $('#main').width(w * cols).css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function (index, value) {
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr.push(h);
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            });
            hArr[minHIndex] += $boxs.eq(index).outerHeight();
        }
    });
}