import React, { useState } from 'react'
import TestState from './components/TestState'

export default function App() {
    console.log('App run');
    let [count, setCount] = useState(88);
    let [msg, setMsg] = useState('atguigu');
    return (
        <div>
            <h3>App</h3>
            <p>app state count: {count}</p>
            <p>app state msg: {msg}</p>
            <p><button onClick={()=>{
                setCount(count+1)
            }}>count++</button></p>
            <p><button onClick={()=>{
                setMsg(msg + '!')
            }}>msg + '!'</button></p>

            {/* 函数组件的useState对状态的改变做了优化，当状态没有改变的时候，函数组件只多渲染一次 */}
            <p><button onClick={()=>{
                setCount(9999);
            }}>count赋值一个固定值</button></p>

            <TestState count={count} msg={msg}/>
        </div>
    )
}
