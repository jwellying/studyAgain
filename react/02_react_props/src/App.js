import React, { Component } from 'react';
import Son from './Son'

class App extends Component{
    constructor(){
      // 1：数据初始化
      console.log('constructor');
      
      super();
      this.state = {
        age:18,
        name:'jwellying'
      }
      this.change = this.change.bind(this);
    }
    // 好像已经被丢弃
    // componentWillMount(){
    //   console.log('componentWillMount');
      
    // }
    // 2：模板渲染
    render(){
      console.log('render');
      const {name,age} = this.state;
      const header = <div>我是header</div>;
      const footer = <div>我是footer</div>;
      return(
        <div>
          <div>我是父组件{this.state.num}</div>
          <button onClick={this.change}>点我改变</button>
          <Son age={age} name={name} header={header} footer={footer}>
            <ul>
              <li>33</li>
              <li>33</li>
              <li>33</li>
            </ul>
          </Son>
        </div>
        
      )
    }
    // 渲染完毕
    componentDidMount(){
      // 实际应用用于发送网络请求
      console.log('componentDidMount');
      
    }
    shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      return false;
      
    }
    // 好像也被丢弃了
    // componentWillUpdate(){
    //   console.log('componentWillUpdate');
      
    // }
    componentDidUpdate(){
      console.log('componentDidUpdate');
      
    }
    change(){
      this.setState({
        num:33
      });
    }
}

export default App;


