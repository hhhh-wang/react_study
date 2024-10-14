import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default function TodoList() {
    // 状态数据定义
    let [todos, setTodos] = useState([
        {
            id:nanoid(),
            title:'吃饭',
            isDone:false
        },
        {
            id:nanoid(),
            title:'睡觉',
            isDone:false
        },
        {
            id:nanoid(),
            title:'敲代码',
            isDone:true
        }
    ])

    // 添加todo
    function addTodo(title){
        // 1. 创建一个todo对象
        // 2. 将todo对象加入todos数组中
        // 3. 重新设置todos的值，触发页面更新
        let todo = {
            id:nanoid(),
            title,
            isDone:false
        }
        setTodos([todo,...todos])
    }
    // 删除todo
    function deleteTodo(id){
        if(!window.confirm('确定要删除么?')) return;
        setTodos(todos.filter(todo=>{
            return id !== todo.id
        }))
    }
    // 修改单条todo的状态
    function checkOne(id){
        setTodos(todos.map(todo=>{
            if(todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        }))
    }

    // 清除已完成 ===》 将isDone是true删掉 == > 将isDone是false的保留
    function deleteDone(){
        if(!window.confirm('确定要删除完成的项目么?')) return;
        setTodos(todos.filter(todo=>!todo.isDone))
    }

    function checkAll(isDone){
        setTodos(todos.map(todo=>{
            todo.isDone = isDone
            return todo;
        }))
    }
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={addTodo}/>
                    <Main todos={todos} deleteTodo={deleteTodo} checkOne={checkOne}/>
                    <Footer todos={todos} deleteDone={deleteDone} checkAll={checkAll}/>
                </div>
            </div>
        </>
    )
}
