const qs = require('querystring');
let query = 'userId=1&name=jwellying';
let queryObj = qs.parse(query);
console.log(queryObj);
//  { userId: '1', name: 'jwellying' }
let queryStr = qs.stringify(queryObj);
console.log(queryStr);
