## viewport
+ layoutviewport:  大于实际屏幕， 元素的宽度继承于 layoutviewport，用于保证网站的外观特性与桌面浏览器一样。layoutviewport 到底多宽，每个浏览器不同,通过 document.documentElement.clientWidth 获取。
+ visualviewport: 当前显示在屏幕上的页面，即浏览器可视区域的宽度。

+ idealviewport: 为浏览器定义的可完美适配移动端的理想 viewport，固定不变，可以认为是设备视口宽度。比如 iphone 7 为 375px, iphone 7p 为 414px。

```html
<meta name='viewport' content='width=device-width,inital-scale=1,user-scale=no'>
<!-- 
1.width 设置的是 layoutviewport 的宽度
2.initial-scale 设置页面的初始缩放值，并且这个初始缩放值是相对于 idealviewport 缩放的，最终得到的结果不仅会决定 visualviewport，还会影响到 layoutviewport
3.user-scalable 是否允许用户进行缩放的设置 -->

```
当我们将viewport的设定为device-width时，不会出现横向的滚动条；

## 1px边框问题
- 通过scaleY(0.5)
```css
div {
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}

/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}

/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}

```

## rem布局(flexible布局)
```js
// set 1rem = viewWidth / 10
function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
}
setRemUnit();

```
只是一个过渡方法，注定要被抛弃

## vh、vw的方法
将可视端口屏的宽高分成一百等份，进行换算的写法

webpack的插件可以支持自动转换
```js
{
    loader: 'postcss-loader',
    options: {
    	plugins: ()=>[
        	require('autoprefixer')({
        		browsers: ['last 5 versions']
        	}),
        	require('postcss-px-to-viewport')({
        		viewportWidth: 375, //视口宽度（数字)
        		viewportHeight: 1334, //视口高度（数字）
        		unitPrecision: 3, //设置的保留小数位数（数字）
        		viewportUnit: 'vw', //设置要转换的单位（字符串）
        		selectorBlackList: ['.ignore', '.hairlines'], //不需要进行转换的类名（数组）
                minPixelValue: 1, //设置要替换的最小像素值（数字）
                mediaQuery: false //允许在媒体查询中转换px（true/false）
        	})
    	]
}
```