import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default function TodoList() {
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        </>
    )
}
