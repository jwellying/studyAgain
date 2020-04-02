# ajax
+ 某个事件触发异步请求事件-->创建xmlhttprequest-->发送请求-->后端处理请求
-->收到response，用js处理

传统的ajax是对xmlhttp的封装

# axios
axios是基于promise对xmlhttp的封装，可以说axios是ajax的进化版
+ axios支持promise
+ 客户端支持csrf
+ 提供了一些并发请求的接口
```js
axios({
    method:'post',
    url:'api',
    data:{
        firstName:'jwellying'
    }
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})
```

# fetch
fetch不同于ajax和axios，是同xhr一样的底层的API，fetch提供的方式也更丰富
1）这主要是由fetch返回promise导致的，因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；所以一般会对fetch请求做一层封装
2）fetch默认不会带cookie，需要添加配置项
3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现
的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4）fetch没有办法原生监测请求的进度，而XHR可以
看到这里你是不是和我一样想，这么个东西还不如axios来的轻松方便
但是实际上，fetch并非如此不堪
fetch解决了一个前端应用上一直十分头疼的问题---跨域
```js
fetch('/users.json', {
    method: 'post', 
    // 跨域处理
    mode: 'no-cors',
    // cookie问题
    credentials:'include',
    data: {}
}).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})

// 封装之后
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function parseJSON(response) {
  return response.json();
}
export default function request(url, options) {
  let opt = options||{};
  return fetch(url, {credentials: 'include', ...opt})
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ( data ))
    .catch((err) => ( err ));
}
```
