import React from 'react'
import './index.css'
export default function Header({addTodo}) {
    function sendTitle(e){
        // 1. 判断是否按的是回车
        // 2. 获取用户输入内容
        // 3. 调用方法，传递数据给父组件
        if(e.code !== 'Enter') return;
        let title = e.target.value.trim();
        addTodo(title);
        // 清空文本框
        e.target.value = ''
    }
    return (
        <div className="todo-header">
            <input type="text" onKeyUp={sendTitle} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
