import React, { Component } from 'react'
import Child from './child';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'hello react'
    }
  }
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <Child name={this.state.name}>
          <div>
            {this.state.name}
          </div>
          <div>
            nice to meet you 
          </div>
        </Child>
      </div>
    )
  }
}

