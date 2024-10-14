import React from 'react'
import Item from '../Item/Item'
import './index.css'
export default function Main({ todos,deleteTodo }) {
    return (
        <ul className="todo-main">
            {todos.map(todo => (
                <Item key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
}
