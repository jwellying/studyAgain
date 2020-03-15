// 导入模块
import React,{component, Component} from 'react'
// 继承父类
class App2 extends Component{
    constructor(){
        super();
        this.state = {
            num:0
        }
        // bind不会直接执行
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e){
        console.log(e.target.value);
        // 此时可以获取到e
        // 但是this的指向不正确
        // console.log(this);
        this.state.num = e.target.value;
        this.setState({});
        
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.num} onChange={this.changeHandler}/>
                {this.state.num}
            </div>
        )
    }
}

export default App2;