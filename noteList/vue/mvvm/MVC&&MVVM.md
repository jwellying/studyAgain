# MVC
MVC是三个单词的首字母缩写，它们是Model（模型）、View（视图）和Controller（控制）
**MVC要实现的目标是将软件用户界面和业务逻辑分离以使代码可扩展性、可复用性、可维护性、灵活性加强。**
+ view在controller的顶端，而model在controller的底端；
+ controller同时关注着view和model
+ view只能感知到model的存在，并在model更新时收到通知进行更新

与mvc相比
在操控页面的时候我们不必再去关注**Dom**结点，而是直接通过直接更新数据，然后数据重渲染
vue实现的mvvm是的view层和model层之间交互通过viewmodel层进行，其实vue充当的就是viewmodel的角色，
同时view和model之间的更新的是双向的响应式的

# MVVM
+ model数据层
+ view视图层
+ viewmodel作为两者中间层(某种意义上讲vue就承担着viewmodel的角色)，他把view需要的数据暴露出来，
处理view层的数据绑定、指定以及事件监听等；view和model可以实现双向绑定(比如说表单)，view会响应model
的改变，model也会被通知到view的变化；
不需要再把精力放在dom操作上，因为数据的改变是响应式的；

# MVVM的优缺点?
优点:
+ 分离视图（View）和模型（Model）,降低代码耦合；
+ 提高视图或者逻辑的重用性
+ 自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放
缺点:
+ Bug很难被调试: 因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug，也可能是Model的代码有问题。
+ 一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，不释放内存就造成了花费更多的内存
+ 对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高
