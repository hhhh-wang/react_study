import React from 'react'
import './index.css'
export default function Item({todo,deleteTodo,checkOne}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.isDone} onChange={()=>checkOne(todo.id)}/>
                <span>{todo.title}</span>
            </label>
            <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>删除</button>
        </li>
    )
}
