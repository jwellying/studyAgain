# 常见请求头和响应头

1. 常用的HTTP请求头
 **Accept**	
       可接受的响应内容类型（Content-Types）。	
       示例：Accept: text/plain	
 **Cache-Control**	    
       用来指定当前的请求/回复中的，是否使用缓存机制。	
       示例：Cache-Control: no-cache	
 **Connection**	
       客户端（浏览器）想要优先使用的连接类型	
       示例：Connection: keep-alive / Connection: Upgrade
 **Cookie**	
       由之前服务器通过Set-Cookie设置的一个HTTP协议Cookie	
       示例：Cookie: $Version=1; Skin=new;
 **Content-Length**	
       以8进制表示的请求体的长度	
       示例：Content-Length: 348	
 **Content-Type**	
       请求体的MIME类型 （用于POST和PUT请求中）	
       示例：Content-Type: application/x-www-form-urlencoded	
 **Host**	
       表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口(80)端口号可以省略
       示例：Host: www.itbilu.com
 **Origin**	
        发起一个针对跨域资源共享的请求（该请求要求服务器在响应中加入一个Access-Control-Allow-Origin的消息头，表示访问控制所允许的来源）
        示例：Origin: http://www.itbilu.com	
 **Proxy-Authorization**	
       用于向代理进行认证的认证信息。	
       示例：Proxy-Authorization: Basic + IOoDZRgDOi0vcGVuIHNlNidJi2==	
 **Referer**	
       表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。
   	示例：Referer: http://itbilu.com/+ nodejs	固定
 **User-Agent**	
       浏览器的身份标识字符串	
       示例：User-Agent: Mozilla/……	固定
 **Warning**	
        一个一般性的警告，表示在实体内容体中可能存在错误。	
        示例：Warning: 199 Miscellaneous warning	固定
 
2. 常用的HTTP响应头
**Access-Control-Allow-Origin**
        指定哪些网站可以跨域源资源共享
        Access-Control-Allow-Origin: *		
**Age**	
        响应对象在代理缓存中存在的时间，以秒为单位	
        Age: 12	
**Allow**	
        对于特定资源的有效动作;	
        Allow: GET, HEAD	
**Cache-Control**	
        通知从服务器到客户端内的所有缓存机制，表示它们是否可以缓存这个对象及缓存有效时间。其单位为秒	
        Cache-Control: max-age=3600	
**Connection**	
        针对该连接所预期的选项	
        Connection: close
**Content-Type**	
        当前内容的MIME类型	
        Content-Type: text/html; charset=utf-8
**Date**	
        此条消息被发送时的日期和时间(以RFC 7231中定义的"HTTP日期"格式来表示)	
        Date: Tue, 15 Nov 1994 08:12:31 GMT	
**Expires**
        指定一个日期/时间，超过该时间则认为此回应已经过期	
        Expires: Thu, 01 Dec 1994 16:00:00 GMT
**Last-Modified**	
        所请求的对象的最后修改日期(按照 RFC 7231 中定义的“超文本传输协议日期”格式来表示)	
        Last-Modified: Dec, 26 Dec 2015 17:30:00 GMT	
**Location**	
        用于在进行重定向，或在创建了某个新资源时使用。	
        Location: http://www.itbilu.com/nodejs	
**Refresh**	
        用于重定向，或者当一个新的资源被创建时。默认会在5秒后刷新重定向。	
        Refresh: 5; url=http://itbilu.com	 
**Server**	
        服务器的名称	
        Server: nginx/1.6.3	
**Set-Cookie**	
        设置HTTP cookie	
        Set-Cookie: UserID=itbilu; Max-Age=3600; Version=1	固定: 标准
**Status**	
        通用网关接口的响应头字段，用来说明当前HTTP连接的响应状态。	
        Status: 200 OK	 
**Warning**
        一般性警告，告知在实体内容体中可能存在错误。	
        Warning: 199 Miscellaneous warning	固定
