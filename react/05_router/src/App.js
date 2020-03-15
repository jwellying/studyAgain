import React, { Fragment } from 'react';
import './App.css';
import Home from './home';
import News from './news';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <p>我是app</p>
      <Router>
        {/* exact确保路由的深度匹配 */}
        {/* switch确保路由的广度匹配 */}
        <Fragment>
          
            <NavLink to='/home/news' activeClassName='selected'>新闻</NavLink>
            <NavLink to='/home/fun' activeClassName='selected'>娱乐</NavLink>
          <Switch>
            <Route path='/' exact component={Home}></Route> */}
            <Route path='/home' component={Home}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/news' component={News}></Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </Fragment>
        {/*<Home></Home> */}
        
      </Router>
    </div>
  );
}

export default App;
