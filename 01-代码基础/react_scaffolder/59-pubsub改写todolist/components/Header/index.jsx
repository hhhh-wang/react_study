import React from 'react'
import PubSub from 'pubsub-js';
import './index.css'
export default function Header() {
    function sendTitle(e){
        if(e.code !== 'Enter') return;
        let title = e.target.value.trim();
        PubSub.publish('addTodo', title);
        // 清空文本框
        e.target.value = '';
    }
    return (
        <div className="todo-header">
            <input type="text" onKeyUp={sendTitle} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
