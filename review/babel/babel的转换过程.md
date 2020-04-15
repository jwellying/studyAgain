## babel的原理
babel的转译过程
+ 解析(parse):将代码解析生成抽象语法树(即AST树)，即词法分析与语法分析的过程
+ 转换(transform):对于 AST 进行变换一系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进行遍历，在此过程中进行添加、更新及移除等操作
+ 生成 Generate: 将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator
解析：code -> AST **babylon**
转换：AST -> AST **babel-traverse**
```js
// 转换前
()=>{
    console.log(1);
}
// 转换后
function(){
    console.log(1);
}
```
生成：AST -> code **babel-generator**

## 如何编写一个babel插件
插件的编写需要你暴露一个函数,函数返回一个visitor对象
```js
module.export = function(){
    return {
        visitor:{
            // visitor中可以编写对生成的各类型的AST结点的操作
        }
    }
}
```

