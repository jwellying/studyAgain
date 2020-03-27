import React, { Component, Fragment } from 'react'
// import Son from './Son'
import Wrap from './Son'

function high(WrapCom){
  class highCom extends Component {
    componentDidMount(){
      console.log('高阶组件被mounted');
      
    }
    render(){
      return(
        <WrapCom></WrapCom>
      )
    }
  }
  return highCom;
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      num:0
    }
  }
  render() {
    let HighCom = high(Wrap);
    return (
      <div>
        我是父组件
        <hr/>
        {/* <Wrap></Wrap> */}
        <HighCom></HighCom>
      </div>
    )
  }
}
