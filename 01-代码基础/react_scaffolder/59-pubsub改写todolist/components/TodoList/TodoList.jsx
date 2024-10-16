import { nanoid } from 'nanoid'
import PubSub from 'pubsub-js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default function TodoList() {
    let [todos, setTodos] = useState([
        {
            id: nanoid(),
            title: '吃饭',
            isDone: false
        }
    ])

    useEffect(() => {
        let addTodoId = PubSub.subscribe('addTodo', (msg, title) => {
            let todo = {
                id: nanoid(),
                title,
                isDone: false
            }
            // 注意：PubSub在useEffect中使用时，会产生闭包，导致永远只能拿到初始值，需要使用setXxx函数的第二种用法，回调函数用法
            setTodos(todos => {
                return [todo, ...todos]
            })
        })

        let deleteId = PubSub.subscribe('deleteTodo', (msg, id) => {
            setTodos(todos => {
                return todos.filter(todo => todo.id !== id)
            })
        })
        return () => {
            PubSub.unsubscribe(addTodoId)
            PubSub.unsubscribe(deleteId)
        }
    }, [])
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <Main todos={todos} />
                    <Footer />
                </div>
            </div>
        </>
    )
}
