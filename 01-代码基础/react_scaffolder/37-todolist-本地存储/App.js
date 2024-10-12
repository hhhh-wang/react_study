import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
// 导入App根组件样式
import './App.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <TodoList />
            </div>
        )
    }
}
