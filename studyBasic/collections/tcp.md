# 建立一个tcp连接之后能发送几个http请求？
涉及知识点：http1.0\http1.1\http2.0的区别
+ http1.0一般情况下不支持长连接，一次tcp连接会在请求完成后自动断开；
解决方法是可以在请求头上添加Connection: keep-alive
+ http1.1支持长连接，可以实现可复用，但是依然有局限性
+ http2完善了长连接，实现了真正的可复用

# 如何对一个请求进行缓存
两种方式：
1. 设置请求头字段：Expires
`res.setHeader('Expires','Tue Mar 10 2020 11:11:28 GMT+0800')`
2. 设置Cache-Control(10s后失效)
`res.setHeader('Cache-control', 'max-age=10')`
