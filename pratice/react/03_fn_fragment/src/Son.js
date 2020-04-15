import React, { Component, Fragment } from 'react'

class Son extends Component {
    componentDidMount(){
        console.log('son组件被mounted');
        
    }
    constructor(props){
        super(props);
        this.state = {
            sonNum:99
        }
    }
    render() {
        return (
            <div>
                <div>我是子组件</div>
            </div>
        )
    }
}

export default class Wrap extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('minx被mounted');
        
    }
    render(){
        return(
           
            <Son></Son>

        )
    }
}