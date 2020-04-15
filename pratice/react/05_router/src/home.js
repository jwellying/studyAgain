import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import User from './user'
export default class home extends Component {
    goBack(){
        this.props.history.goBack();
    }
    goForward(){
        this.props.history.goForward();
    }
    render() {
        let obj = {
            pathname:'/home/user',
            query:{
                id:3
            }
        }
        return (
            <div>
                <Fragment>
                    <p>
                       我是home组件 
                    </p>
                    <button onClick={()=>{
                            this.goBack()
                        }}>点我返回</button>
                    <br/>
                    <button onClick={()=>{
                            this.goForward()
                        }}>点我前进</button>
                    <br/>
                    <Router>
                        {/* pramas的方法 */}
                        <NavLink to='/home/user/8'>去userparams</NavLink>
                        <br/>
                        {/* <NavLink to={obj}>去userobj</NavLink> */}
                        <Route path='/home/user/:id' component={User}></Route>
                        {/* query的方法 */}
                        <NavLink to='/home/user?id=1'>去userQ</NavLink>
                        <NavLink to={obj}>去userQ</NavLink>
                        <Route path='/home/user' component={User}></Route>

                    </Router>
                </Fragment>
                
            </div>
        )
    }
}
