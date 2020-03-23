# JSX语法
Babel 会把 JSX 转译成一个名为 **React.createElement()** 函数调用。
```js
const ele = (
    <h1 className='test'>
     hello world
    </h1>
)
// 等价于
const ele = React.createElement(
    'h1',
    {className:'test'},
    'hello world'
)
```
# 元素的渲染
+ react元素是不可变的，一旦被创建之后，他就不再变化；
+ 我们只能通过创建新的ele然后通过render去渲染新的结点；
+ 当然在渲染的时候，react并不会将所有的结点进行重新渲染，而是将通过虚拟dom的方式，将新旧dom比较之后，只渲染改变的部分

# 详解react中的props属性
```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

// 函数式组件,定义一个Button组件,首字母大写
function Button(props) {
  console.log(props); // 将会把调用处组件的style属性给打印出来
  const btnStyles = {
  width: props.style.width,
  height: props.style.height,
  background: props.style.background,
  color: props.style.color,
  border: props.style.border,
  outline: props.style.outline,
  cursor: props.style.cursor
};
return (
  <div>
    <button style = { btnStyles }>按钮</button>
  </div>
);
}

const btnStyle = {
  width: "100px",
  height: "40px",
  background: "orange",
  color: "#fff",
  border: "none",
  outline: "none",
  cursor: "pointer"
}
const container = document.getElementById('root');

ReactDOM.render(<Button style = { btnStyle } />, container);
```
```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

// 类组件,通过class关键字声明使用
class Button extends Component {
  constructor(props){
  super(props);

}

render() {
  console.log(this.props);
  // 这里利用Es6中的解构赋值
  const { width, height, background, color, border, outline,cursor} = this.props.style;
  const btnStyles = {
    width,  // 等于width:width
    height,
    background,
    color,
    border,
    outline,
    cursor
}
return (
<div>
   <button style = { btnStyles }>按钮</button>
</div>
);
}
}
// 该Button组件按钮自身拥有的属性
const btnStyle = {
  width: "100px",
  height: "40px",
  background: "orange",
  color: "#fff",
  border: "none",
  outline: "none",
  cursor: "pointer"
}

const container = document.getElementById('root');

ReactDOM.render(<Button style = { btnStyle } />, container);
```

+ props就是组件定义属性的集合，是组件对外提供的接口，外部通过jsx传递的属性值来设置；
+ 父组件(外部组件)向子(内)组件传值是通过设置JSX属性的方式实现的,而在子组件内部获取父(外部)组件数据是通过this.props来获取的,也可以这么认为,props就是对外提供的数据接口
+ 如果一个组件需要定义自己的构造函数,那么就一定要调用super(props),也就是继承了React.Component构造函数
+ 至于为什么要调用super(props)方法,因为Es6采用的是先创建父类实例的this,然后在用子类的构造函数修改this
+ 但是无论有没有constructor函数,render函数,子组件内都可以使用this.props获取组件外部的数据,它是默认自带的
+ 至于写不写构造器函数,如果该自定义的组件不需要初始化state,不用进行方法的绑定(this坏境的设置),只是单纯的用于接收外部组件传来的props数据用作展示,并没有UI交互渲染动作

+ 那么就不需要为该React组件实现构造函数

+ 如果是这样,则更应该把它转换为函数式(无状态UI)组件,因为它的效能是最高的
