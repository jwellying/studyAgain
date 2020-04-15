
var btn = document.getElementById("btn");
btn.onclick = function(){
    var userName = document.getElementById("userName").value;
    var pas = document.getElementById("password").value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST','../app.js');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send("username="+userName+"&password="+pas);
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4){
            // 0: 请求未初始化
            // 1: 服务器连接已建立
            // 2: 请求已接收
            // 3: 请求处理中
            // 4: 请求已完成，且响应已就绪
            if (xhr.status==200 || xhr.status==304){
                console.log(xhr.responseText);
            }
        }
    }
    console.log(2);
    
}
