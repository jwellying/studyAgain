## PWA(progressive web app)
渐进式网络应用
+ 一般我们在写一个web页面的时候，每次我们打开pc时，如果不是浏览器的一些缓存机制的话，需要重新去发起
网络请求，请求数据
+ pwa可以实现向app一样的使用体验，但是用户也不用麻烦的去安装更新，只需要刷新网页即可
+ 可以向app一样让给网页向我们推送一些消息
## 实现
pwa的缓存又是怎么实现的呢？
其实是通过cachestorage来实现的(类似于localstorage)
通过一个serviceworker来访问维护所有的键名和缓存cache对象的映射
```js

cachestorage.match()
cachestorage.open()
cachestorage.has()
cachestorage.delete()
cachestorage.keys()

```
serviceworker是一个介于浏览器和网络之间的代理服务器，可以拦截网络请求