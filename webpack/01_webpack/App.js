//入口组件
var App = {
    template:`
        <div>这是一个入口组件</div>
    `
}

// 声明在导出
var num1 = 2;
export {num1};
//声明并导出
export var num2=3;

export default App;