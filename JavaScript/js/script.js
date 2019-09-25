/**
 * 根据class 获取元素
 * @param parent
 * @param clsName
 * @return {any[]}
 */
function getByClass(parent, clsName) {
    var boxArr = new Array(), // 用来存储获取到的所有class 为box的元素
        oElements = parent.getElementsByTagName('*'); // 获取parent 下的所有标签
    for (let i in oElements) {
        if (oElements[i].className == clsName) {
            boxArr.push(oElements[i])
        }
    }
    return boxArr;
}

/**
 * 返回数组中最小值下标
 * @param arr
 * @param val
 * @return {string}
 */
function getMinhindex(arr, val) {
    for (let i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

/**
 * 瀑布流功能实现
 * @param parent
 * @param box
 */
function waterfall(parent, box) {
    // 将 ID为main下的所有box 取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, box);
    // 计算整个页面显示的列数（页面宽/box宽）
    var oBoxW = oBoxs[0].offsetWidth; // box元素宽
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW); // 计算出页面可以放几列
    // 设置main 宽
    oParent.style.cssText = 'width:' + (oBoxW * cols) + 'px;margin: 0 auto';
    // 存放每一列 高到的数组
    var hArr = new Array();
    for (let i in oBoxs) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, hArr);
            var index = getMinhindex(hArr, minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            // oBoxs[i].style.left = (oBoxW * index) + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            hArr[index] += oBoxs[i].offsetHeight;
        }
    }
}

/**
 * 检测是否具备了滚动条加载数据块的条件
 * @return {boolean}
 */
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent, 'box');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; // 混杂模式和标准模式 获取 页面脱离浏览器的高度
    var height = document.body.clientHeight || document.documentElement.clientHeight; // 获取浏览器窗口高度
    return (lastBoxH < scrollTop + height) ? true : false;
}

window.onload = function () {
    waterfall('main', 'box');
    // data 模拟后台请求数据
    var data = {
        "code": 1, "data": [
            {"src": "images/23.jpg"},
            {"src": "images/24.jpg"},
            {"src": "images/25.jpg"}
        ]
    };
    window.onscroll = function () {

        if (checkScrollSlide()) {
            var oParent = document.getElementById('main');
            // 将数据块渲染到页面尾部
            for (let i in data.data) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src = data.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('main', 'box');
        }
    }
}