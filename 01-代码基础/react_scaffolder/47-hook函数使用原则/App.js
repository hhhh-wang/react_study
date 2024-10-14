import React from 'react'
import ClassTest from './components/ClassTest'
import FunTest from './components/FunTest'

export default function App() {
    return (
        <div>
            <h3>类组件</h3>
            <ClassTest/>
            <h3>函数组件</h3>
            <FunTest/>
        </div>
    )
}
