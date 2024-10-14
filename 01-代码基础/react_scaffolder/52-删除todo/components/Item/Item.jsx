import React from 'react'
import './index.css'
export default function Item({todo,deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.isDone}/>
                <span>{todo.title}</span>
            </label>
            <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>删除</button>
        </li>
    )
}
