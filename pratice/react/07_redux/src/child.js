import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        console.log(props);
        
    }
    render() {
        return (
            <div>
                <h3>
                    {this.props.name}
                    <br/>
                    {this.props.children}    
                </h3>
            </div>
        )
    }
}
