
# 解析引擎（JavaScript Engine）

解析引擎的工作是**编译并执行 JavaScript 代码，完成内存分配、垃圾回收**等
其中我们最为熟悉的解析引擎就是V8引擎
V8引擎有两部分组成：
memory Heap(内存堆) — 内存分配地址的地方
Call Stack(调用堆栈) — 代码执行的地方

# JavaScript运行时（JavaScript Runtime）
想让JavaScript真正运作起来，单单靠JavaScript Engine是不够的,因为只有引擎的浏览器缺乏与外部交互的能力。

比如单靠一个V8引擎是无法进行ajax请求、设置定时器、响应事件等操作的，这就需要JavaScript运行时（JavaScript Runtime）的帮助，它为 JavaScript 提供一些对象或机制，使它能够与外界交互。

# 可执行代码
一段JavaScript代码的运行我们可以分为两个阶段:
1. 编译阶段：
+ 分词/词法分析（Tokenizing/Lexing）
+ 解析/语法分析（Parsing）
+ 预编译（解释）
2. 执行阶段
JavaScript并非简单的一行行解释执行，而是将JavaScript代码分为一块块的可执行代码块进行执行，那么如何划分代码块？
目前有三类代码块：
+ 函数代码块（Function code）
+ 全局代码块（Global code）
+ eval代码块（Eval code）

回到上述，v8引擎有两个部分内存堆和执行栈
代码解析好后，声明被放入内存堆中
到了代码执行阶段时，将代码块推入执行栈中
# 执行上下文
执行上下文在代码块执行前被创建，作为代码运行的基本执行环境，那么执行上下文是怎么创建的呢
正如代码块有三种，执行上下文也分为三种：
+ 全局执行上下文
全局执行上下文只有一个，任何不在函数内部的代码都在全局上下文中(this = window)
+ 函数执行上下文
函数上下文在函数被执行的时候创建，可以有多个；
+ eval执行上下文
在eval代码块中会被创建一个eval执行上下文；

但是，看到这里还是不明白执行上下文是什么？有什么作用？
执行上下文也分为两个阶段：
- 创建阶段
- 执行阶段
创建阶段需要做的事情有三：
1. 确定this的指向
2. 创建词法环境
3. 创建变量环境

总结：
拿到一段js代码后，js解析引擎会进行词法解析、语法解析、预编译，
解析完后，会将声明的变量加入内存堆中，开始创建全局上下文，创建
函数上下文，将代码执行弹出执行栈


