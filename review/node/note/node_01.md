## NodeJs
### node是什么？

* NodeJs不是一门语言(他使用js编写，我们只能说js是一门语言却不能说node是一门语言)
* NodeJs不是一个库、一门框架(jquery是一个库，vue是一个框架)
**那么NodeJS到底是什么呢？**
1. NodeJs提供的是一个js运行时环境，它移植了chrome V8 引擎,解析和执行代码机制和浏览器js相同
并且沿用了JavaScript语法、另外扩展了自己需要的功能(具备操作文件的能力,具备服务器的创建和操作能力)
2. Node使用**事件驱动**，**非阻塞IO模型(异步)**来实现轻量与高效
3. npm是世界上最大开源生态库
4. node中可以访问process等全局对象，但不具备dom和bom，两者是浏览器独有的内置对象

### node的应用场景

* web服务器
  * node可以创建开启一个web服务器
* 命令行工具
  * npm (node)
  * git (c语言)
  * hexo(node)
* IO优势(在处理高并发场景中优势明显)
  * 对于文件读写,Node采用的是非阻塞IO
  * __传统IO在读写文件的时候CPU来处理,而代码执行也处于等待中,浪费性能__
  * __非阻塞IO将读写操作交给CPU,而代码正常执行,减少等待浪费的性能__
* 应用场景
  * 实际应用: webpack/gulp/npm/http-server/json-server
  * 服务器中负责IO读写的中间层服务器(天猫中间层IO服务器)

**引申**
Python在处理高并发的方面比node更加好

## Node中的I/O
I -- input  O -- output
正常的情况下I/O是阻塞的，如网络请求、数据库的读写、文件的读写
但是node中的I/O是非阻塞的

## 为什么要有node
前端js
- ECMAscript
- Bom
- Dom
- ajax
- 处于安全性考虑不能进行系统文件数据库的操作
NodeJs
- ECMAscript
- 数据库
- 系统文件


