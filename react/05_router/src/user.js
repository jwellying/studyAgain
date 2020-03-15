import React, { Component } from 'react'

export default class user extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props);
        
    }
    render() {
        return (
            <div>
                我是user组件
            </div>
        )
    }
}
