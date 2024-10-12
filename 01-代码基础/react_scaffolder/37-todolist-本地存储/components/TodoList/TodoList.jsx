import React, { Component } from 'react'
// 2导入nanoid
import {nanoid} from 'nanoid'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default class TodoList extends Component {
    state = {
        todos:[]
    }
    componentDidMount(){
        // 从本地存储读取数据
        let todos = JSON.parse(localStorage.getItem('todos')) || []
        this.setState({
            todos
        })
    }
    componentDidUpdate(){
        // 重写本地存储的 todos
        localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    addTodo(title){
        console.log('父组件： title:, ', title);
        // 拼接一个新的todo
        let todo = {
            id:nanoid(),
            title,
            isDone:false
        }
        // 将todo加入到 todos状态中
        this.setState({
            todos:[todo,...this.state.todos]
        })
    }

    deleteById(id){
        if(!window.confirm('确定删除么?')) return;
        console.log('father id: ', id);
        // 
        this.setState({
            todos: this.state.todos.filter(todo=>todo.id !== id)
        })
    }

    checkOne(id){
        console.log('father checkOne id: ', id);
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id === id){
                    todo.isDone = !todo.isDone;
                }
                return todo;
            })
        })
    }

    checkAll(isDone){
        this.setState({
            todos: this.state.todos.map(todo=>{
                todo.isDone = isDone;
                return todo;
            })
        })
    }

    deleteDone(){
        
        if(!window.confirm('确定删除已完成么?')) return;
        this.setState({
            // 删除已完成，就是保留下 isDone是false的元素
            todos:this.state.todos.filter(todo=>!todo.isDone)
        })
    }

    render() {
        let {todos} = this.state;// 解构状态数据
        return (
            <>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo.bind(this)}/>
                        <Main todos={todos} deleteById={this.deleteById.bind(this)} checkOne={this.checkOne.bind(this)}/>
                        {/* 传递todos数据给子组件Footer */}
                        <Footer todos={todos} checkAll={this.checkAll.bind(this)} deleteDone={this.deleteDone.bind(this)}/>
                    </div>
                </div>
            </>
        )
    }
}
