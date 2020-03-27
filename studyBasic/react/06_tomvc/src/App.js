import React, { Component, Fragment } from 'react'
import './App.css'
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      inputVal:'',
      todoList:[
        {id:1,completed:true,name:'唱歌'},
        {id:2,completed:false,name:'睡觉'},
        {id:3,completed:true,name:'吃饭'}
      ],
      editId:-1
    }
  }
  showList(){
    let todos = this.state.todoList;
    let editId = this.state.editId;
    // console.log(todos);
    return todos.map(todo=>{
      return (
        <li key={todo.id} className= {todo.id===editId?'editing':''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} 
                onChange={() => this.checkItem(todo)}/>
                <label onDoubleClick={()=>{this.showEdit(todo)}}>{todo.name}</label>
                <button className="destroy" onClick={()=>this.destroyTodo(todo)
                }></button>
            </div>
            <form onSubmit={this.editOver = this.editOver.bind(this)}>
              <input className="edit" value={todo.name} ref={'todo_'+todo.id}
              onChange={(e)=>this.changeEdit(e,todo)} 
              onBlur={this.editOver = this.editOver.bind(this)}/>
            </form>
            
        </li>
      )
    })
  }
  // input框的双向数据绑定
  changeHandler(e){
    // console.log(this);
    this.state.inputVal = e.target.value;
    this.setState({});
  }
  // 添加todo
  addTodo(e){
    // 首先我们需要禁止默认的提交事件
    e.preventDefault();
    // 处理id
    let newId = -1;
    this.state.todoList.forEach(v=>{
      // console.log(v);
      if(v.id>=newId){newId = v.id+1}
    })
    
    // 处理输入为空的情况
    if(this.state.inputVal.trim()!==''){
      this.state.todoList.push({
            id:newId,completed:false,name:this.state.inputVal
          })
      // 这里不需要
      // this.setState({});
      this.setState({
        inputVal:''
      })
    }
    // console.log(this.state.todoList);
  }
  // 销毁todo
  destroyTodo(todo){
    // 点击按钮删除该项
    // 首先我们要如何拿到该项数据呢
    // console.log(e.target);
    let {todoList} = this.state;
    // console.log(todoList);
    // 或者使用findIndex
    let index = todoList.findIndex(t=> t.id==todo.id);
    todoList.splice(index,1);
    // 有bug不能用
    // todoList.forEach(v=>{
    //   if(v.id===todo.id){
    //     console.log(todoList[v.id]);
        
    //     // todoList.splice(todoList[v.id],1);
    //   }
    // })
    this.setState({});
    
  }
  // 勾选功能
  checkItem(todo){
    let {todoList} = this.state;
    // console.log(todoList);
    // 或者使用findIndex
    let index = todoList.findIndex(t=> t.id==todo.id);
    let cur = this.state.todoList[index];
    cur.completed = !cur.completed;
    this.setState({});
  }
  // 双击编辑
  showEdit(todo){
    // console.log(todo);
    this.setState({
      editId:todo.id
    },()=>{
      this.refs['todo_'+todo.id].focus();
    })
    
  }
  // 编辑框的改变
  changeEdit(e,todo){
    console.log(e.target);
    let {todoList} = this.state;
    let index = todoList.findIndex(t=>t.id===todo.id);
    let cur = todoList[index];
    cur.name = e.target.value;
    this.setState({});
  }
  // 编辑结束
  editOver(e){
    e.preventDefault();
    this.setState({
      editId:-1
    })
  }
  render() {
    return (
      <Fragment>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.addTodo = this.addTodo.bind(this)}>
                  <input className="new-todo" placeholder="What needs to be done?" autoFocus 
                  onChange={this.changeHandler = this.changeHandler.bind(this)} value={this.state.inputVal}
                  onBlur={this.addTodo = this.addTodo.bind(this)}/>
                </form>
            </header>
            {/* This section should be hidden by default and shown when there are todos */}
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {/* These are here just to show the structure of the list items */}
                    {/* List items should get the className `editing` when editing and `completed` when marked as completed */}
                    {this.showList()}
                </ul>
            </section>
            {/* This footer should hidden by default and shown when there are todos */}
            <footer className="footer">
                {/* This should be `0 items left` by default */}
                <span className="todo-count"><strong>0</strong> item left</span>
                {/* Remove this if you don't implement routing */}
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                {/*Hidden if no completed items are left ↓ */}
                <button className="clear-completed">Clear completed</button>
            </footer>
        </section>
        <footer className="info">
            <p>Double-click to edit a todo</p>
            {/* Remove the below line ↓ */}
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            {/* Change this out with your name and url ↓ */}
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>

      </Fragment>
    )
  }
}


