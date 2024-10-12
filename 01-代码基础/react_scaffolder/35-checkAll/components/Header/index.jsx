import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    sendTitle(e){
        // 判断：按的是否是回车键
        if(e.code !== 'Enter') return;
        // 按的是回车
        // 获取文本框内容
        let title = e.target.value.trim();
        // 把title发送给 TodoList 组件
        this.props.addTodo(title);
        // 将文本框清空
        e.target.value = '';
    }
    render() {
       
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.sendTitle.bind(this)} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
