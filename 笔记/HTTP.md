# 当用户在地址栏输入一个网址到用户看到一个页面，浏览器发生了什么？
域名解析 --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户
+ 先会浏览器的缓存中寻找映射，再从操作系统的缓存中寻找映射，从本地的host文件 查找相应的IP映射 
+ 如果没有查到 就会从DNS服务器上去查找IP的映射 
+ 发起TCP的三次握手，建立起TCP连接后，浏览器会把请求的数据根据（http协议或者https）封装成相应的数据包转发给找到相应的服务器 
+ 服务器处理请求之后，处理并返回数据
+ 数据（可能是一个页面，也可能是一个json数据）
+ 浏览器拿到http后，开始解析http，并且请求响应资源（js、css等资源）
+ 渲染页面



# TCP三次握手详解
所谓三次握手（Three-Way Handshake）即建立TCP连接，就是指建立一个TCP连接时，需要客户端和服务端总共发送3个包以确认连接的建立。
+ 第一次握手：Client将标志位SYN置为1，随机产生一个值seq=J，并将该数据包发送给Server，Client进入SYN_SENT状态，等待Server确认。
+ 第二次握手：Server收到数据包后由标志位SYN=1知道Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，并将该数据包发送给Client以确认连接请求，Server进入SYN_RCVD状态。
+ 第三次握手：Client收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给Server，Server检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client与Server之间可以开始传输数据了。
# 为什么需要三次握手，而不是二次握手？
主要是为了防止两次握手情况下已失效的连接请求报文段突然又传送到服务端,而产生的错误。举例如下:

Client向Server发出TCP连接请求,第一个连接请求报文在网络的某个节点长时间滞留,Client超时后认为报文丢失,于是再重传一次连接请求,Server收到后建立连接。数据传输完毕后双方断开连接。而此时,前一个滞留在网络中的连接请求到达了服务端Server,而Server认为Client又发来连接请求,若采用的是“两次握手”,则这种情况下Server认为传输连接已经建立,并一直等待Client传输数据,而Client此时并无连接请求,因此不予理睬,这样就造成了Server的资源白白浪费了;但此时若是使用“三次握手”,则Server向Client返回确认报文段,由于是一个失效的请求,因此Client不予理睬,建立连接失败。第三次握手的作用:防止已失效的连接请求报文段突然又传送到了服务器。

# 跨域
## 什么是跨域？跨域可以分为几种？
+ 首先，什么是跨域？
通常我们说的跨域是狭义的跨域，是受浏览器同源的限制，而产生的跨域现象;
那怎么算跨域呢？
**协议+域名+端口**都要相同才算同源，任一不同都是跨域
+ 那么跨域有是否可划分呢？
事实上，跨域也分为两大类：简单跨域以及复杂跨域
只要同时满足以下两大条件，就属于简单请求。
(1) 请求方法是以下三种方法之一：
HEAD
GET
POST
(2)HTTP请求头信息不超出以下几种字段：
Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求。

浏览器对这两种请求的处理，是不一样的。
对于简单跨域，在我们发起请求的时候，请求会自动添加一个origin字段，然后发送到服务器的时候服务器会检查origin的值是否是允许跨域的域名，允许即可跨域成功；
对于复杂跨域，在我们发起请求的时候，浏览器会进行预检测options；因为什么引起的复杂跨域就在请求头中设置相应的字段解决；

## 跨域的解决方法
1、后端直接解决
2、jsonp（缺点：只能解决get请求-->因为get请求没有请求体）
（jsonp的原理是利用script标签不受同源的限制，由服务端返回一个预先定义好的js函数，数据则作为该函数的参数）
 ```js
 <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(res) {
        alert(JSON.stringify(res));
    }
 </script>
 后端返回的数据
 handleCallback({"status": true, "user": "admin"})
 ```
3、cors解决（本质其实是浏览器帮我们解决了跨域）
Access-Control-Allow-Origin:允许跨域的域名，可以指定，也可以设为*表示允许所有
Access-Control-Allow-Methods：允许请求的方式
Access-Control-Allow-Credentials：表示是否允许发送Cookie。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。

```node端解决
// 跨域解决
app.use(async (ctx,next)=>{
    //跨域问题的处理
    //复杂跨域会请求一个预检测options
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.response.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS");
    ctx.response.set("Access-Control-Allow-Credentials",true);
    ctx.response.set("Content-Type", "application/json;charset=utf-8");
    
    if(ctx.method==='OPTIONS'){
        ctx.body = 200
    }else{
        await next();
    }
})

```

4、webpack代理
webpack.config.js部分配置：
```js
devServer:{
    proxy:[{
        context:'/api',  //代理接口
        target:'www.domain.com' //目标url
    }]
}
```
5、ngnix代理（生产环境）
```js
#proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;

    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
#前端
var xhr = new XMLHttpRequest();

// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;

// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
xhr.send();
```

# get和post的区别
        1、get发送的数据都在地址栏中，不安全
        2、get发送的数据有大小限制
        3、get没有请求体
        4、post发送的数据在请求体中，安全
        5、post对清求的数据大小没有限制
        6、post有一个特殊的请求（content-type：application/x-www-form-urlencoded）
        7、get的请求头相对较少，性能稍微好一点
# 一些不怎么常用的请求方式
PUT:请求服务器存储一个资源;
DELETE：请求服务器删除标识的资源；
OPTIONS：请求查询服务器的性能，或者查询与资源相关的选项和需求；
TRACE：请求服务器回送收到的请求信息，主要用于测试或诊断；
CONNECT：保留将来使用
# 返回的状态码 
▪ 200 ok
▪ 301 永久移除（永久重定向）
▪ 302 暂时移除（临时重定向）
▪ 304 请求资源未改变
▪ 307 临时重定向
▪ 401 未认证
▪ 403 没有权限访问
▪ 404 资源找不到
▪ 405 请求方法不对
▪ 500 服务器内部错误
**301永久性重定向**：新网址完全继承旧网址，旧网址的排名等完全清零
301重定向是网页更改地址后对搜索引擎友好的最好方法，只要不是暂时搬移的情况，都建议使用301来做转址。
**302临时性重定向**：对旧网址没有影响，但新网址不会有排名

例如：我们之前网站的域名是 a.com，现在替换成了 b.com。但是用户并不知道域名改了，所以还是在浏览器里输入 a.com，Web服务器（apache 或者 ngnix）在收到请求后，在响应中包含：

状态码 301 及 b.com。用户的浏览器在收到响应后，自动将输入栏网址改变为 b.com。
或者状态码 302 及 b.com。用户的浏览器在收到响应后，输入栏仍是显示旧网址，但是显示的是 b.com的内容。


# HTTP1和HTTP2的区别
+ http1.0客户端与服务端只会保持暂时的连接，请求完成后Tcp连接就会断开
解决方式：添加头信息——非标准的Connection字段Connection: keep-alive
+ http1.1
**1、持久连接**
引入了持久连接，即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive(对于同一个域名，大多数浏览器允许同时建立6个持久连接)
**2、管道机制**
即在同一个TCP连接里面，客户端可以同时发送多个请求。
**3、分块传输编码**
即服务端没产生一块数据，就发送一块，采用”流模式”而取代”缓存模式”。
**4、新增请求方式**
PUT:请求服务器存储一个资源;
DELETE：请求服务器删除标识的资源；
OPTIONS：请求查询服务器的性能，或者查询与资源相关的选项和需求；
TRACE：请求服务器回送收到的请求信息，主要用于测试或诊断；
CONNECT：保留将来使用
**缺点**
虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的。服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着。这将导致“队头堵塞”
避免方式：一是减少请求数，二是同时多开持久连接
+ http2
1. 二进制协议
HTTP/1.1 版的头信息肯定是文本（ASCII编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为”帧”：头信息帧和数据帧。
二进制协议解析起来更高效、“线上”更紧凑，更重要的是错误更少。
2. 完全多路复用
HTTP/2 复用TCP连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”。
原理好像是因为他在原来的基础上加上一个stream流
3. 报头压缩
HTTP 协议是没有状态，导致每次请求都必须附上所有信息。所以，请求的很多头字段都是重复的，比如Cookie，一样的内容每次请求都必须附带，这会浪费很多带宽，也影响速度。
对于相同的头部，不必再通过请求发送，只需发送一次；
HTTP/2 对这一点做了优化，引入了头信息压缩机制；
一方面，头信息使用gzip或compress压缩后再发送；
另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，产生一个索引号，之后就不发送同样字段了，只需发送索引号。
4. 服务器推送
HTTP/2 允许服务器未经请求，主动向客户端发送资源；
通过推送那些服务器任务客户端将会需要的内容到客户端的缓存中，避免往返的延迟


# HTTP和HTTPS的区别
- 1、HTTPS是加密传输协议，HTTP是名文传输协议;
- 2、HTTPS需要用到SSL证书，而HTTP不用;
- 3、HTTPS比HTTP更加安全，对搜索引擎更友好，利于SEO,
- 4、 HTTPS标准端口443，HTTP标准端口80;
- 5、 HTTPS基于传输层，HTTP基于应用层;