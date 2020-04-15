import React, { Component } from 'react'
import propType from 'prop-types'

export default class Son extends Component {
    // 属性的类型及默认值
    static propType = {
        name:propType.string.isRequired
    }
    static defaultProps = {
        name:'abc'
    }



    constructor(props){
        super(props);
    }
    render() {
        // 简单数据类型按值传递所以当name或者age改变时不会影响原值
        let {name,age} = this.props;
        // 但如果使用按引用传递的话
        // let {obj} = this.props;
        // 改变obj.xxx 会对this.props.obj.xxx同样产生影响
        return (
            <div>
                我是子组件<br/>
                {name}<br/>
                {age}
                {this.props.header}
                {/* 直接传递过来的部分内容使用children来接收 */}
                {this.props.children}
                {this.props.footer}
            </div>
        )
    }
}
