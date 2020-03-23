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

比如说我们定义了一个data：{foo:'foo'}
然后我们对其进行修改vm.$data.foo = 'hhh'