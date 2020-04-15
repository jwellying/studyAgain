const url = require('url');
let path = 'https://www.jwellying:8080/user?userId=1#hhh';
let obj = url.parse(path);
console.log(obj);
let str = url.format(obj);
console.log(str);

// 拿到的对象如下
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.jwellying:8080',
//   port: '8080',
//   hostname: 'www.jwellying',
//   hash: '#hhh',
//   search: '?userId=1',
//   query: 'userId=1',
//   pathname: '/user',
//   path: '/user?userId=1',
//   href: 'https://www.jwellying:8080/user?userId=1#hhh'
// }