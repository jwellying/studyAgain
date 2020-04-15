require.config({
    baseUrl:'js',
    paths:{
        jquery:'lib/jquery-3.3.1'
    }
})



require([
    'user/index',
    'jquery'
], function(userIndex,$) {
    'use strict';
    console.log('主页');
});
