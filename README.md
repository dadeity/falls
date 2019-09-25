# JavaScript、jquery、CSS3 实现瀑布流
- 瀑布流原理：利用绝对定位固定图片位置，图片等宽不等高

## 项目中使用的CSS属性和js函数
### CSS:
- `box-shadow` 图片阴影
- `border-radius` 圆角
- `position` 定位
### JavaScript：
- `push()` 向数组的末尾添加一个或多个元素，并返回新的长度
- `Math.floor()` 取整
- `offsetWidth` 内容宽度 + 内边距宽度×2 +边框宽度×2
- `obj.style.cssText =""` 以字符串的形式设置多个样式
- `offsetWidth` 获取窗口的宽
- `Math.min.apply(null,arr)` 取数组中的最小值
- `appendChild` 插入对象到尾部
- `onscroll` 滚动条改变触发事件
### Jquery：
- `width()` 获取或者设置元素宽
- `innerWidth()` 获得包括内边界（padding）的元素宽度
- `outerWidth()` 获得包括内边界(padding)和边框(border)的元素宽度
- `outerWidth()` 获得包括外边框(margin)、内边界(padding)和边框(border)的元素宽度
- `innerHeight` `outerHeight` 获取高度
- `eq(n)` 结果集中选取第n的元素
- `$.inArray(value,arr)` 用来判断某个值在数组中的索引
- `$(window).scrollTop()` 滚动条滚动的距离
- `$(window).height()` 浏览器可视窗口的高度
- `append` `appendTo` 插入元素
### CSS3：
- `webkit`   Google 浏览器内核
- `ms`       IE 
- `o`        opera
- `moz`      FireFox
- `column-width` 设置列宽
- `column-count` 设置列数
- `column-rule` 设置列与列之间的边框
- `column-gap` 设置列间距 其计算规则：用当前浏览器宽口宽除以定义的列宽，剩下的距离平均分配