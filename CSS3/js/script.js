window.onload = function () {
    // data 模拟后台请求数据
    var data = {
        "code": 1, "data": [
            {"src": "images/23.jpg"},
            {"src": "images/24.jpg"},
            {"src": "images/25.jpg"}
        ]
    };
    window.onscroll = function () {

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
    }
}