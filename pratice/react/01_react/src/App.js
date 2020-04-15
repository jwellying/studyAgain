// 首先要使用jsx语言，必须先引入react模块
import React,{Component} from 'react'

// 定义app组件
// 组件要继承component，所以也要引入component
class App extends Component{
    constructor(){
        // 继承父类
        super();
        this.state = {
            num:0
        }
    }
    changeHandler(e){
        console.log(e.target);
        
        console.log('input被改变了');
        // this.state.num = e.target.value;
        // react中改变值不能直接通过赋值的方法
        // 推荐使用函数的方法
        this.setState({
            num:e.target.value
        })
        
    }
    render(){
        return(
            <div>
                <div>hello world</div>
                <input type='text' value={this.state.num} onChange={(e)=>{
                    this.changeHandler(e);
                }}/>
                {this.state.num}
            </div>
            
        )
    }
}

export default App;


