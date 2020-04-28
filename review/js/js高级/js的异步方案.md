## js的异步方案
在网页引入第三方js时，因为浏览器的渲染线程和js线程会互相阻塞，所以如果js不采取异步的方案的话，用户体验不好

## script标签中的defer和async
+ 通常不加任何标记的script标签再被浏览器解析时，浏览器会停止当前的解析与处理，转向下载解析执行script标签所指向的资源；
+ 而加上defer标记之后的script标签会在浏览器执行到该行是异步下载，且等到浏览器所有任务完成后再进行执行；
+ 而async标记与defer不同的是，script标签的资源依旧是异步下载的，然而等到下载完成后会停止当前动作，转向执行下载好的script标签内的内容

## 动态添加script标签
```js
(function(){
    // 兼容性处理
    // IE:attachEvenet和detachEvent
    // 其他：addEventListener和removeEventListener
    if(window.attachEvent){
        window.attachEvent("load", asyncLoad);
    }else{
        window.addEventListener("load", asyncLoad);
    }
    // 动态创建一个script
    var asyncLoad = function(){
        var ga = document.createElement('script'); 
        ga.type = 'text/javascript'; 
        ga.async = true; 
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
        var s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(ga, s);
    }
)();
```
## XHR注入
通过XMLHttpRequest来获取javascript，然后创建一个script元素插入到DOM结构中。ajax请求成功后设置script.text为请求成功后返回的responseText
```js
  //获取XMLHttpRequest对象，考虑兼容性。
    var getXmlHttp = function(){
        var obj;
        if (window.XMLHttpRequest)
            obj = new XMLHttpRequest();
        else
            obj = new ActiveXObject("Microsoft.XMLHTTP");
        return obj;
    };  
    //采用Http请求get方式;open()方法的第三个参数表示采用异步(true)还是同步(false)处理
    var xmlHttp = getXmlHttp();
    xmlHttp.open("GET", "api/async.js", true);
    xmlHttp.send(); 
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var script = document.createElement("script");
            script.text = xmlHttp.responseText;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    } 
```
## XHR Eval
这种方法与注入不同的是，获取到scriptText之后，直接使用eval执行
```js
    eval(xmlHttp.responseText);
```
## iframe异步加载
```js
    var insertJS = function(){alert(2)};
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    var doc = iframe.contentWindow.document;//获取iframe中的window要用contentWindow属性。
    doc.open();
    doc.write("<script>var insertJS = function(){};<\/script><body οnlοad='insertJS()'></body>");
    doc.close();
```
## 利用缓存实现lazyLoad的功能
