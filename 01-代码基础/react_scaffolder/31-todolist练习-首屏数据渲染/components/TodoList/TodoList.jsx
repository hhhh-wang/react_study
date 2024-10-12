import React, { Component } from 'react'
// 2导入nanoid
import {nanoid} from 'nanoid'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default class TodoList extends Component {
    state = {
        todos:[
            {
                id:nanoid(),
                title:'吃饭',
                isDone:true
            },
            {
                id:nanoid(),
                title:'睡觉',
                isDone:false
            },
            {
                id:nanoid(),
                title:'打代码',
                isDone:true
            }
        ]
    }
    render() {
        let {todos} = this.state;// 解构状态数据
        return (
            <>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header/>
                        <Main todos={todos}/>
                        {/* 传递todos数据给子组件Footer */}
                        <Footer todos={todos}/>
                    </div>
                </div>
            </>
        )
    }
}
