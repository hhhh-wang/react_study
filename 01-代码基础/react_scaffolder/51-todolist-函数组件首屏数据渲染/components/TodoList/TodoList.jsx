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
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <Main todos={todos}/>
                    <Footer todos={todos}/>
                </div>
            </div>
        </>
    )
}
